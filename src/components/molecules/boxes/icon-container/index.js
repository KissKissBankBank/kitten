"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.IconContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _container = require("../../../layout/container");

var _typography = require("../../../../helpers/utils/typography");

var _visuallyHidden = require("../../../accessibility/visually-hidden");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledContainer = (0, _styledComponents.default)(_container.Container).withConfig({
  displayName: "icon-container__StyledContainer",
  componentId: "sc-1f3z7n9-0"
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
  componentId: "sc-1f3z7n9-1"
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
  var _React$cloneElement;

  var icon = _ref7.icon,
      children = _ref7.children,
      color = _ref7.color,
      iconWidth = _ref7.iconWidth,
      iconHeight = _ref7.iconHeight,
      position = _ref7.position,
      className = _ref7.className,
      iconDescription = _ref7.iconDescription;
  var height = iconHeight || iconWidth;
  return /*#__PURE__*/_react.default.createElement(StyledContainer, {
    className: className,
    color: color,
    position: position,
    halfWidth: iconWidth / 2,
    halfHeight: height / 2
  }, iconDescription && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, iconDescription), children, /*#__PURE__*/_react.default.createElement(IconWrapper, {
    marginHeight: height / 2,
    marginWidth: iconWidth / 2,
    position: position
  }, /*#__PURE__*/_react.default.cloneElement(icon, (_React$cloneElement = {
    width: iconWidth,
    height: height
  }, _React$cloneElement['aria-hidden'] = true, _React$cloneElement))));
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