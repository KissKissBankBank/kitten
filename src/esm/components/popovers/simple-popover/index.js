import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Marger } from '../../../components/layout/marger';
import { CrossIcon } from '../../../components/icons/cross-icon';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { Title } from '../../../components/typography/title';
import { Paragraph } from '../../../components/typography/paragraph';
import { CONTAINER_PADDING_THIN } from '../../../constants/grid-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { Button } from '../../../components/buttons/button/button';
var borderSize = 2;
var PopoverContainer = styled.div.withConfig({
  displayName: "simple-popover__PopoverContainer",
  componentId: "kz8b88-0"
})(["padding:", ";display:flex;align-items:center;position:relative;border:solid ", " ", ";box-sizing:border-box;max-width:", ";flex-basis:100%;margin-bottom:", ";background-color:", ";opacity:1;visibility:visible;transition:opacity 0.3s ease,visibility 0s ease;transition-delay:0s,0s;@media (min-width:", "){padding:", " ", ";}&[aria-hidden='true']{opacity:0;visibility:hidden;transition-delay:0s,0.3s;}"], pxToRem(40), COLORS.line1, pxToRem(borderSize), pxToRem(555), pxToRem(CONTAINER_PADDING_THIN), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(40));
var IconContainer = styled.div.withConfig({
  displayName: "simple-popover__IconContainer",
  componentId: "kz8b88-1"
})(["display:none;min-width:", ";min-height:", ";margin-right:", ";border-radius:100%;align-items:center;justify-content:center;background-color:", ";@media (min-width:", "px){display:flex;}"], pxToRem(80), pxToRem(80), pxToRem(40), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, ScreenConfig.S.min);
var CrossIconButton = styled(Button).withConfig({
  displayName: "simple-popover__CrossIconButton",
  componentId: "kz8b88-2"
})(["position:absolute;top:-", ";right:-", ";transition:background-color 0.2s,color 0.2s,border-color 0.2s;"], pxToRem(borderSize), pxToRem(borderSize));
var ButtonsContainer = styled(Marger).withConfig({
  displayName: "simple-popover__ButtonsContainer",
  componentId: "kz8b88-3"
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
      simplePopoverProps = _objectWithoutProperties(_ref2, ["isVisible", "onCloseClick", "titleId", "closeButtonLabel", "title", "text", "illustration", "illustrationBackground", "buttons"]);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isDisplayedInDOM = _useState2[0],
      displayInDom = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAriaVisible = _useState4[0],
      setAriaVisible = _useState4[1];

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
    modifier: "beryllium",
    tiny: true,
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
    margin: false,
    tag: "h2"
  }, title)), /*#__PURE__*/React.createElement(Marger, {
    top: ".5",
    bottom: "1"
  }, /*#__PURE__*/React.createElement(Paragraph, {
    modifier: "quaternary"
  }, text)), buttons.length > 0 && /*#__PURE__*/React.createElement(ButtonsContainer, {
    top: "3"
  }, buttons.map(function (_ref3, i) {
    var label = _ref3.label,
        clickOptions = _ref3.clickOptions,
        buttonProps = _objectWithoutProperties(_ref3, ["label", "clickOptions"]);

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