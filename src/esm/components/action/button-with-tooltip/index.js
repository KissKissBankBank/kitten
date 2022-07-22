import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { ArrowContainer } from '../../information/boxes/arrow-container';
import { Button } from '../../action/button';
import { Text } from '../../typography/text';
const ARROW_SIZE = 7;
const ARROW_DISTANCE = 10;
const zoomInAndOpacity = keyframes(["from{transform:translateX(var(--ButtonWithTooltip-translate)) translateY(0) scale(.66);opacity:0;}to{transform:translateX(var(--ButtonWithTooltip-translate)) translateY(", ") scale(1);opacity:1;}"], pxToRem(ARROW_SIZE));
const StyledButtonWithTooltip = styled.div.withConfig({
  displayName: "button-with-tooltip__StyledButtonWithTooltip",
  componentId: "sc-8udghs-0"
})(["--ButtonWithTooltip-translate:-50%;--ButtonWithTooltip-origin:50%;display:inline-block;position:relative;.k-ButtonWithTooltip__tooltip{position:absolute;top:100%;left:50%;transform:translateX(var(--ButtonWithTooltip-translate)) translateY(0) scale(0.66);transform-origin:var(--ButtonWithTooltip-origin) ", ";opacity:0;width:max-content;max-width:", ";display:block;}.k-ButtonWithTooltip__button{&:hover + .k-ButtonWithTooltip__tooltip,&:focus + .k-ButtonWithTooltip__tooltip{animation:0.16s ease ", ";transform:translateX(var(--ButtonWithTooltip-translate)) translateY(", ") scale(1);opacity:1;}}&.k-ButtonWithTooltip--left{--ButtonWithTooltip-translate:calc( -100% + ", " );--ButtonWithTooltip-origin:calc( 100% - ", " );}&.k-ButtonWithTooltip--right{--ButtonWithTooltip-translate:calc( 0% - ", " );--ButtonWithTooltip-origin:", ";}"], pxToRem(ARROW_SIZE), pxToRem(250), zoomInAndOpacity, pxToRem(ARROW_SIZE), pxToRem(ARROW_SIZE + ARROW_DISTANCE), pxToRem(ARROW_SIZE + ARROW_DISTANCE), pxToRem(ARROW_SIZE + ARROW_DISTANCE), pxToRem(ARROW_SIZE + ARROW_DISTANCE));
export const ButtonWithTooltip = _ref => {
  let {
    className,
    children,
    tooltipText,
    buttonProps,
    tooltipProps,
    position = 'center',
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledButtonWithTooltip, _extends({}, props, {
    className: classNames('k-ButtonWithTooltip', className, "k-ButtonWithTooltip--" + position)
  }), /*#__PURE__*/React.createElement(Button, _extends({
    "aria-label": tooltipText
  }, buttonProps, {
    className: classNames('k-ButtonWithTooltip__button', buttonProps == null ? void 0 : buttonProps.className)
  }), children), /*#__PURE__*/React.createElement(ArrowContainer, _extends({
    color: COLORS.line1,
    size: ARROW_SIZE,
    padding: 8,
    borderRadius: 4,
    position: "top",
    "aria-hidden": true,
    centered: position === 'center' || null,
    distance: position !== 'center' ? ARROW_DISTANCE : null,
    distanceIsReverse: position === 'left' || null
  }, tooltipProps, {
    className: classNames('k-ButtonWithTooltip__tooltip', tooltipProps == null ? void 0 : tooltipProps.className)
  }), /*#__PURE__*/React.createElement(Text, {
    size: "small",
    color: "font1",
    weight: "500"
  }, tooltipText)));
};
ButtonWithTooltip.protoTypes = {
  tooltipText: PropTypes.string.isRequired,
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'center', 'right'])
};