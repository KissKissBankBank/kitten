import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ArrowContainer } from '../../../../components/molecules/boxes/arrow-container';
import { Button } from '../../../../components/molecules/buttons/button';
import { Text } from '../../../../components/atoms/typography/text';
var ARROW_SIZE = 7;
var zoomInAndOpacity = keyframes(["from{transform:translateX(-50%) translateY(0) scale(.66);opacity:0;}to{transform:translateX(-50%) translateY(", ") scale(1);opacity:1;}"], pxToRem(ARROW_SIZE));
var zoomOutAndOpacity = keyframes(["from{transform:translateX(-50%) translateY(", ") scale(1);opacity:1;}to{transform:translateX(-50%) translateY(0) scale(.66);opacity:0;}"], pxToRem(ARROW_SIZE));
var StyledButtonWithTooltip = styled.div.withConfig({
  displayName: "button-with-tooltip__StyledButtonWithTooltip",
  componentId: "gs3c1h-0"
})(["display:inline-block;position:relative;.k-ButtonWithTooltip__container{position:absolute;top:100%;left:50%;transform:translateX(-50%) translateY(0) scale(0.66);transform-origin:50% ", ";width:max-content;max-width:", ";display:block;animation:0.16s ease ", ";opacity:0;}.k-ButtonWithTooltip__button{&:hover + .k-ButtonWithTooltip__container,&:focus + .k-ButtonWithTooltip__container{animation:0.16s ease ", ";transform:translateX(-50%) translateY(", ") scale(1);opacity:1;}}"], pxToRem(ARROW_SIZE), pxToRem(250), zoomOutAndOpacity, zoomInAndOpacity, pxToRem(ARROW_SIZE));
export var ButtonWithTooltip = function ButtonWithTooltip(_ref) {
  var className = _ref.className,
      children = _ref.children,
      tooltipText = _ref.tooltipText,
      buttonProps = _ref.buttonProps,
      tooltipProps = _ref.tooltipProps,
      props = _objectWithoutProperties(_ref, ["className", "children", "tooltipText", "buttonProps", "tooltipProps"]);

  return /*#__PURE__*/React.createElement(StyledButtonWithTooltip, props, /*#__PURE__*/React.createElement(Button, _extends({
    className: classNames('k-ButtonWithTooltip__button', className),
    "aria-label": tooltipText
  }, buttonProps), children), /*#__PURE__*/React.createElement(ArrowContainer, _extends({
    className: classNames('k-ButtonWithTooltip__container'),
    color: COLORS.line1,
    size: ARROW_SIZE,
    padding: 8,
    borderRadius: 4,
    position: "top",
    "aria-hidden": true,
    centered: true
  }, tooltipProps), /*#__PURE__*/React.createElement(Text, {
    size: "tiny",
    color: "font1",
    weight: "regular"
  }, tooltipText)));
};
ButtonWithTooltip.protoTypes = {
  tooltipText: PropTypes.string.isRequired,
  children: PropTypes.node
};