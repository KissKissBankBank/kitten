"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PasswordInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _textInput = require("../../../form/input/text-input");

var _passwordIcon = require("../../../graphics/icons/password-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _excluded = ["name", "iconLabel", "hiddenIconLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledPasswordInput = _styledComponents.default.div.withConfig({
  displayName: "password-input__StyledPasswordInput",
  componentId: "sc-1rvdmh2-0"
})(["position:relative;display:flex;.k-Form-PasswordInput__input{padding-right:", ";}.k-Form-PasswordInput__icon{display:flex;position:absolute;z-index:1;padding:0 ", ";right:0;top:0;bottom:0;cursor:pointer;align-items:center;border-radius:var(--border-radius-s);&[aria-pressed='true']{svg{fill:", ";transition:all 0.2s;}}}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(11), _colorsConfig.default.primary1);

var PasswordInput = function PasswordInput(_ref) {
  var name = _ref.name,
      iconLabel = _ref.iconLabel,
      hiddenIconLabel = _ref.hiddenIconLabel,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(true),
      isHidden = _useState[0],
      setIsHidden = _useState[1];

  var handleClick = function handleClick() {
    setIsHidden(!isHidden);
  };

  return /*#__PURE__*/_react.default.createElement(StyledPasswordInput, {
    className: "k-Form-PasswordInput"
  }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, others, {
    name: name,
    type: isHidden ? 'password' : 'text',
    className: "k-Form-PasswordInput__input"
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "aria-label": isHidden ? iconLabel : hiddenIconLabel,
    onClick: handleClick,
    "aria-pressed": !isHidden,
    className: "k-Form-PasswordInput__icon k-u-reset-button"
  }, /*#__PURE__*/_react.default.createElement(_passwordIcon.PasswordIcon, null)));
};

exports.PasswordInput = PasswordInput;
PasswordInput.propTypes = {
  iconLabel: _propTypes.default.string.isRequired,
  hiddenIconLabel: _propTypes.default.string.isRequired,
  name: _propTypes.default.string
};
PasswordInput.defaultProps = {
  name: 'password'
};