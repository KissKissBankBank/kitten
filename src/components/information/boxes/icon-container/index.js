"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.IconContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _container = require("../../../layout/container");

var _typography = require("../../../../helpers/utils/typography");

var _visuallyHidden = require("../../../accessibility/visually-hidden");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledContainer = (0, _styledComponents.default)(_container.Container).withConfig({
  displayName: "icon-container__StyledContainer",
  componentId: "sc-dkec80-0"
})(["position:relative;padding:", ";background-color:", ";margin-left:", ";margin-right:", ";margin-top:", ";margin-bottom:", ";"], (0, _typography.pxToRem)(20), _ref => {
  let {
    color
  } = _ref;
  return color;
}, _ref2 => {
  let {
    position,
    halfWidth
  } = _ref2;
  return position === 'left' ? (0, _typography.pxToRem)(halfWidth) : 'auto';
}, _ref3 => {
  let {
    position,
    halfWidth
  } = _ref3;
  return position === 'right' ? (0, _typography.pxToRem)(halfWidth) : 'auto';
}, _ref4 => {
  let {
    position,
    halfHeight
  } = _ref4;
  return position === 'top' ? (0, _typography.pxToRem)(halfHeight) : 'auto';
}, _ref5 => {
  let {
    position,
    halfHeight
  } = _ref5;
  return position === 'bottom' ? (0, _typography.pxToRem)(halfHeight) : 'auto';
});

const IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "icon-container__IconWrapper",
  componentId: "sc-dkec80-1"
})(["position:absolute;", ""], _ref6 => {
  let {
    position,
    marginHeight,
    marginWidth
  } = _ref6;

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

const IconContainer = _ref7 => {
  let {
    icon,
    children,
    color,
    iconWidth,
    iconHeight,
    position,
    className,
    iconDescription
  } = _ref7;
  const height = iconHeight || iconWidth;
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
  }, /*#__PURE__*/_react.default.cloneElement(icon, {
    width: iconWidth,
    height,
    ['aria-hidden']: true
  })));
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