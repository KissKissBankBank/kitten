"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _passwordIcon = require("../../../components/icons/password-icon");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var StyledPasswordInput = _styledComponents.default.div.withConfig({
  displayName: "password-input__StyledPasswordInput",
  componentId: "sc-1futz46-0"
})(["position:relative;display:flex;.k-Form-PasswordInput__input{padding-right:", ";}.k-Form-PasswordInput__icon{display:flex;position:absolute;z-index:1;padding:0 ", ";right:0;top:0;bottom:0;cursor:pointer;align-items:center;&[aria-pressed='true']{svg{fill:", ";transition:all 0.2s;}}}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(11), _colorsConfig.default.primary1);

var PasswordInput = function PasswordInput(_ref) {
  var name = _ref.name,
      iconLabel = _ref.iconLabel,
      hiddenIconLabel = _ref.hiddenIconLabel,
      others = (0, _objectWithoutProperties2.default)(_ref, ["name", "iconLabel", "hiddenIconLabel"]);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isHidden = _useState2[0],
      setIsHidden = _useState2[1];

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