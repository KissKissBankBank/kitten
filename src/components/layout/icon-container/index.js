"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconContainer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _container = require("../../grid/container");

var _typography = require("../../../helpers/utils/typography");

var _visuallyHidden = require("../../accessibility/visually-hidden");

var StyledContainer = (0, _styledComponents.default)(_container.Container).withConfig({
  displayName: "icon-container__StyledContainer",
  componentId: "x0wgk3-0"
})(["position:relative;padding:", ";background-color:", ";margin-left:", ";margin-right:", ";margin-top:", ";margin-bottom:", ";"], (0, _typography.pxToRem)(20), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var position = _ref2.position,
      halfWidth = _ref2.halfWidth;
  return position === 'left' ? (0, _typography.pxToRem)(halfWidth) : 'auto';
}, function (_ref3) {
  var position = _ref3.position,
      halfWidth = _ref3.halfWidth;
  return position === 'right' ? (0, _typography.pxToRem)(halfWidth) : 'auto';
}, function (_ref4) {
  var position = _ref4.position,
      halfHeight = _ref4.halfHeight;
  return position === 'top' ? (0, _typography.pxToRem)(halfHeight) : 'auto';
}, function (_ref5) {
  var position = _ref5.position,
      halfHeight = _ref5.halfHeight;
  return position === 'bottom' ? (0, _typography.pxToRem)(halfHeight) : 'auto';
});

var IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "icon-container__IconWrapper",
  componentId: "x0wgk3-1"
})(["position:absolute;", ""], function (_ref6) {
  var position = _ref6.position,
      marginHeight = _ref6.marginHeight,
      marginWidth = _ref6.marginWidth;

  if (position === 'top') {
    return (0, _styledComponents.css)(["left:50%;margin-left:", ";top:", ";"], (0, _typography.pxToRem)(-marginWidth), (0, _typography.pxToRem)(-marginHeight));
  }

  if (position === 'bottom') {
    return (0, _styledComponents.css)(["left:50%;margin-left:", ";bottom:", ";"], (0, _typography.pxToRem)(-marginWidth), (0, _typography.pxToRem)(-marginHeight));
  }

  if (position === 'left') {
    return (0, _styledComponents.css)(["top:50%;margin-top:", ";left:", ";"], (0, _typography.pxToRem)(-marginHeight), (0, _typography.pxToRem)(-marginWidth));
  }

  if (position === 'right') {
    return (0, _styledComponents.css)(["top:50%;margin-top:", ";right:", ";"], (0, _typography.pxToRem)(-marginHeight), (0, _typography.pxToRem)(-marginWidth));
  }
});

var IconContainer = function IconContainer(_ref7) {
  var icon = _ref7.icon,
      children = _ref7.children,
      color = _ref7.color,
      iconWidth = _ref7.iconWidth,
      iconHeight = _ref7.iconHeight,
      position = _ref7.position,
      className = _ref7.className,
      iconDescription = _ref7.iconDescription;
  var height = iconHeight || iconWidth;
  return _react.default.createElement(StyledContainer, {
    className: className,
    color: color,
    position: position,
    halfWidth: iconWidth / 2,
    halfHeight: height / 2
  }, iconDescription && _react.default.createElement(_visuallyHidden.VisuallyHidden, null, iconDescription), children, _react.default.createElement(IconWrapper, {
    marginHeight: height / 2,
    marginWidth: iconWidth / 2,
    position: position
  }, _react.default.cloneElement(icon, (0, _defineProperty2.default)({
    width: iconWidth,
    height: height
  }, 'aria-hidden', true))));
};

exports.IconContainer = IconContainer;
IconContainer.propTypes = {
  icon: _propTypes.default.node.isRequired,
  iconDescription: _propTypes.default.string,
  color: _propTypes.default.string,
  iconWidth: _propTypes.default.number,
  iconHeight: _propTypes.default.number,
  position: _propTypes.default.oneOf(['top', 'left', 'bottom', 'right'])
};
IconContainer.defaultProps = {
  iconWidth: 25,
  color: '#fff',
  iconDescription: undefined,
  iconHeight: undefined,
  position: 'top'
};