import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Container } from '../../grid/container';
import { pxToRem } from '../../../helpers/utils/typography';
import { VisuallyHidden } from '../../accessibility/visually-hidden';
var StyledContainer = styled(Container).withConfig({
  displayName: "icon-container__StyledContainer",
  componentId: "x0wgk3-0"
})(["position:relative;padding:", ";background-color:", ";margin-left:", ";margin-right:", ";margin-top:", ";margin-bottom:", ";"], pxToRem(20), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var position = _ref2.position,
      halfWidth = _ref2.halfWidth;
  return position === 'left' ? pxToRem(halfWidth) : 'auto';
}, function (_ref3) {
  var position = _ref3.position,
      halfWidth = _ref3.halfWidth;
  return position === 'right' ? pxToRem(halfWidth) : 'auto';
}, function (_ref4) {
  var position = _ref4.position,
      halfHeight = _ref4.halfHeight;
  return position === 'top' ? pxToRem(halfHeight) : 'auto';
}, function (_ref5) {
  var position = _ref5.position,
      halfHeight = _ref5.halfHeight;
  return position === 'bottom' ? pxToRem(halfHeight) : 'auto';
});
var IconWrapper = styled.div.withConfig({
  displayName: "icon-container__IconWrapper",
  componentId: "x0wgk3-1"
})(["position:absolute;", ""], function (_ref6) {
  var position = _ref6.position,
      marginHeight = _ref6.marginHeight,
      marginWidth = _ref6.marginWidth;

  if (position === 'top') {
    return css(["left:50%;margin-left:", ";top:", ";"], pxToRem(-marginWidth), pxToRem(-marginHeight));
  }

  if (position === 'bottom') {
    return css(["left:50%;margin-left:", ";bottom:", ";"], pxToRem(-marginWidth), pxToRem(-marginHeight));
  }

  if (position === 'left') {
    return css(["top:50%;margin-top:", ";left:", ";"], pxToRem(-marginHeight), pxToRem(-marginWidth));
  }

  if (position === 'right') {
    return css(["top:50%;margin-top:", ";right:", ";"], pxToRem(-marginHeight), pxToRem(-marginWidth));
  }
});
export var IconContainer = function IconContainer(_ref7) {
  var icon = _ref7.icon,
      children = _ref7.children,
      color = _ref7.color,
      iconWidth = _ref7.iconWidth,
      iconHeight = _ref7.iconHeight,
      position = _ref7.position,
      className = _ref7.className,
      iconDescription = _ref7.iconDescription;
  var height = iconHeight || iconWidth;
  return /*#__PURE__*/React.createElement(StyledContainer, {
    className: className,
    color: color,
    position: position,
    halfWidth: iconWidth / 2,
    halfHeight: height / 2
  }, iconDescription && /*#__PURE__*/React.createElement(VisuallyHidden, null, iconDescription), children, /*#__PURE__*/React.createElement(IconWrapper, {
    marginHeight: height / 2,
    marginWidth: iconWidth / 2,
    position: position
  }, React.cloneElement(icon, _defineProperty({
    width: iconWidth,
    height: height
  }, 'aria-hidden', true))));
};
IconContainer.propTypes = {
  icon: PropTypes.node.isRequired,
  iconDescription: PropTypes.string,
  color: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right'])
};
IconContainer.defaultProps = {
  iconWidth: 25,
  color: '#fff',
  iconDescription: undefined,
  iconHeight: undefined,
  position: 'top'
};