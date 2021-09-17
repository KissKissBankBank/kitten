import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["isVisible", "onCloseClick", "titleId", "closeButtonLabel", "title", "text", "illustration", "illustrationBackground", "buttons"],
    _excluded2 = ["label", "clickOptions"];
import "core-js/modules/es.array.map.js";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Marger } from '../../../components/layout/marger';
import { CrossIcon } from '../../../components/graphics/icons/cross-icon';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { Title } from '../../../components/atoms/typography/title';
import { Paragraph } from '../../../components/atoms/typography/paragraph/next';
import { CONTAINER_PADDING_THIN } from '../../../constants/grid-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { Button } from '../../../components/molecules/buttons/button';
var borderSize = 2;
var PopoverContainer = styled.div.withConfig({
  displayName: "simple-popover__PopoverContainer",
  componentId: "sc-g4kqoa-0"
})(["padding:", ";display:flex;align-items:center;position:relative;border:solid ", " ", ";box-sizing:border-box;max-width:", ";flex-basis:100%;margin-bottom:", ";background-color:", ";opacity:1;visibility:visible;transition:opacity 0.3s ease,visibility 0s ease;transition-delay:0s,0s;@media (min-width:", "){padding:", " ", ";}&[aria-hidden='true']{opacity:0;visibility:hidden;transition-delay:0s,0.3s;}"], pxToRem(40), COLORS.line1, pxToRem(borderSize), pxToRem(555), pxToRem(CONTAINER_PADDING_THIN), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(40));
var IconContainer = styled.div.withConfig({
  displayName: "simple-popover__IconContainer",
  componentId: "sc-g4kqoa-1"
})(["display:none;min-width:", ";min-height:", ";margin-right:", ";border-radius:100%;align-items:center;justify-content:center;background-color:", ";@media (min-width:", "px){display:flex;}"], pxToRem(80), pxToRem(80), pxToRem(40), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, ScreenConfig.S.min);
var CrossIconButton = styled(Button).withConfig({
  displayName: "simple-popover__CrossIconButton",
  componentId: "sc-g4kqoa-2"
})(["position:absolute;top:-", ";right:-", ";transition:background-color 0.2s,color 0.2s,border-color 0.2s;"], pxToRem(borderSize), pxToRem(borderSize));
var ButtonsContainer = styled(Marger).withConfig({
  displayName: "simple-popover__ButtonsContainer",
  componentId: "sc-g4kqoa-3"
})(["& > * + *{margin-top:", ";@media (min-width:", "px){margin-top:0;margin-left:", ";}}"], pxToRem(20), ScreenConfig.S.min, pxToRem(20));
export var SimplePopover = function SimplePopover(_ref2) {
  var isVisible = _ref2.isVisible,
      onCloseClick = _ref2.onCloseClick,
      titleId = _ref2.titleId,
      closeButtonLabel = _ref2.closeButtonLabel,
      title = _ref2.title,
      text = _ref2.text,
      illustration = _ref2.illustration,
      illustrationBackground = _ref2.illustrationBackground,
      buttons = _ref2.buttons,
      simplePopoverProps = _objectWithoutPropertiesLoose(_ref2, _excluded);

  var _useState = useState(true),
      isDisplayedInDOM = _useState[0],
      displayInDom = _useState[1];

  var _useState2 = useState(false),
      isAriaVisible = _useState2[0],
      setAriaVisible = _useState2[1];

  var delayAfterMount = null;
  useEffect(function () {
    if (isVisible) {
      displayInDom(true);
      delayAfterMount = window.setTimeout(function () {
        return setAriaVisible(true);
      }, 50);
    } else {
      setAriaVisible(false);
      delayAfterMount = window.setTimeout(function () {
        return displayInDom(false);
      }, 300);
    }

    return function () {
      window.clearTimeout(delayAfterMount);
    };
  }, [isVisible]);
  if (!isDisplayedInDOM) return null;
  return /*#__PURE__*/React.createElement(PopoverContainer, _extends({}, simplePopoverProps, {
    role: "dialog",
    "aria-hidden": !isAriaVisible,
    "aria-labelledby": titleId
  }), /*#__PURE__*/React.createElement(CrossIconButton, {
    "aria-label": closeButtonLabel,
    onClick: onCloseClick,
    type: "button",
    modifier: "hydrogen",
    size: "micro",
    icon: true
  }, /*#__PURE__*/React.createElement(CrossIcon, {
    "aria-hidden": true,
    width: "8",
    height: "8",
    fill: COLORS.background1
  })), illustration && /*#__PURE__*/React.createElement(IconContainer, {
    backgroundColor: illustrationBackground
  }, illustration), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Marger, {
    bottom: ".5"
  }, /*#__PURE__*/React.createElement(Title, {
    id: titleId,
    modifier: "senary",
    noMargin: true,
    tag: "h2"
  }, title)), /*#__PURE__*/React.createElement(Marger, {
    top: ".5",
    bottom: "1"
  }, /*#__PURE__*/React.createElement(Paragraph, {
    modifier: "tertiary"
  }, text)), buttons.length > 0 && /*#__PURE__*/React.createElement(ButtonsContainer, {
    top: "3"
  }, buttons.map(function (_ref3, i) {
    var label = _ref3.label,
        clickOptions = _ref3.clickOptions,
        buttonProps = _objectWithoutPropertiesLoose(_ref3, _excluded2);

    var clickHandler = clickOptions && clickOptions.closeOnClick && onCloseClick;
    return /*#__PURE__*/React.createElement(Button, _extends({
      onClick: clickHandler,
      key: i,
      children: label
    }, buttonProps));
  }))));
};
SimplePopover.defaultProps = {
  isVisible: true,
  onCloseClick: function onCloseClick() {},
  titleId: 'popover-title',
  closeButtonLabel: 'Close',
  title: '',
  text: '',
  illustration: null,
  illustrationBackground: COLORS.primary4,
  buttons: []
};
SimplePopover.propTypes = {
  isVisible: PropTypes.bool,
  onCloseClick: PropTypes.func,
  titleId: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  illustration: PropTypes.object,
  illustrationBackground: PropTypes.string,
  buttons: PropTypes.array
};