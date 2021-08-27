"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _status = require("./status");

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("../index");

var _excluded = ["success", "valid", "error", "waiting", "disabled", "statusProps", "children", "className", "variant", "bridge", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Step = function Step(_ref) {
  var success = _ref.success,
      valid = _ref.valid,
      error = _ref.error,
      waiting = _ref.waiting,
      disabled = _ref.disabled,
      statusProps = _ref.statusProps,
      children = _ref.children,
      className = _ref.className,
      variant = _ref.variant,
      bridge = _ref.bridge,
      onClick = _ref.onClick,
      other = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledItem, {
    className: (0, _classnames.default)('k-Steppers--VerticalStepper__item', {
      'k-Steppers--VerticalStepper__item--hasActiveLine': success,
      'k-Steppers--VerticalStepper__item--bridge': bridge
    })
  }, /*#__PURE__*/_react.default.createElement(StyledLink, (0, _extends2.default)({
    as: other.href && !disabled ? 'a' : 'span',
    onClick: disabled ? null : onClick
  }, other, {
    variant: variant
  }), /*#__PURE__*/_react.default.createElement(_status.Status, (0, _extends2.default)({
    success: success,
    valid: valid,
    error: error,
    waiting: waiting,
    disabled: disabled,
    bridge: bridge,
    variant: variant
  }, statusProps)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_index.STEP_CLASSNAME, 'k-Steppers--VerticalStepper__step--link--content', {
      'k-Steppers--VerticalStepper__step--link--content--disabled': disabled
    }, className)
  }, children)));
};

exports.Step = Step;

var StyledItem = _styledComponents.default.li.withConfig({
  displayName: "step__StyledItem",
  componentId: "fltihg-0"
})(["padding:", " 0;&:first-of-type{margin-top:0;padding-top:0;}&:last-of-type{margin-bottom:0;padding-bottom:0;}[role='button']:focus,a:focus,button:focus{outline:", " solid ", ";outline-offset:", ";}[role='button']:focus:not(:focus-visible),a:focus:not(:focus-visible),button:focus:not(:focus-visible){outline-color:transparent;}[role='button']:focus-visible,a:focus-visible,button:focus-visible{outline-color:", ";}li:not(:last-of-type){margin:0 !important;&::after{display:none;}}&.k-Steppers--VerticalStepper__item--bridge{padding:", " 0;}"], (0, _typography.pxToRem)(15), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(8));

var StyledLink = _styledComponents.default.a.withConfig({
  displayName: "step__StyledLink",
  componentId: "fltihg-1"
})(["display:inline-flex;align-items:center;padding-right:", ";", " .k-Steppers--VerticalStepper__step--link--content{display:flex;flex-direction:column;justify-content:center;flex:1;color:", ";&.k-Steppers--VerticalStepper__step--link--content--disabled{color:", ";}}"], (0, _typography.pxToRem)(10), function (_ref2) {
  var as = _ref2.as,
      onClick = _ref2.onClick;
  return (as === 'a' || onClick) && (0, _styledComponents.css)(["cursor:pointer;text-decoration:none;.", "{transition:transform 0.4s;}.", "{transition:color 0.4s;}:hover,:focus,:active{.", "{transform:translateX(", ");}.", "{color:", ";}}"], _index.STEP_CLASSNAME, _index.LINK_CLASSNAME, _index.STEP_CLASSNAME, (0, _typography.pxToRem)(5), _index.LINK_CLASSNAME, _colorsConfig.default.primary3);
}, _colorsConfig.default.font1, _colorsConfig.default.font2);

Step.propTypes = {
  href: _propTypes.default.string,
  valid: _propTypes.default.bool,
  success: _propTypes.default.bool,
  error: _propTypes.default.bool,
  waiting: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  bridge: _propTypes.default.bool
};
Step.defaultProps = {
  href: null,
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
  bridge: false
};