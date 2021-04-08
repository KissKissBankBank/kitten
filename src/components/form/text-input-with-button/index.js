"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _modifierStyles = require("../../../components/buttons/button/helpers/modifier-styles");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var StyledTextInputWithButton = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-button__StyledTextInputWithButton",
  componentId: "sc-1yqni7d-0"
})(["display:flex;.k-Form-TextInputWithButton__input{border-right:0;}.k-Form-TextInputWithButton__button{", ";font-size:", ";line-height:1.3;flex:1 0 auto;appearance:none;cursor:pointer;padding:0 ", ";border-radius:0;", ";}&.k-Form-TextInputWithButton__button--valid{background-color:", ";border-color:", ";}&.k-Form-TextInputWithButton__button--error{cursor:not-allowed;background-color:", ";border-color:", ";input:invalid:not(:focus) + &{background-color:", ";border-color:", ";}}"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(30), function (_ref) {
  var modifier = _ref.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
}, _colorsConfig.default.valid, _colorsConfig.default.valid, _colorsConfig.default.error, _colorsConfig.default.error, _colorsConfig.default.error, _colorsConfig.default.error);

var TextInputWithButton = function TextInputWithButton(_ref2) {
  var valid = _ref2.valid,
      error = _ref2.error,
      disabled = _ref2.disabled,
      size = _ref2.size,
      value = _ref2.value,
      buttonValue = _ref2.buttonValue,
      modifier = _ref2.modifier,
      buttonProps = _ref2.buttonProps,
      inputValue = _ref2.inputValue,
      className = _ref2.className,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["valid", "error", "disabled", "size", "value", "buttonValue", "modifier", "buttonProps", "inputValue", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledTextInputWithButton, {
    className: "k-Form-TextInputWithButton",
    modifier: modifier
  }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-TextInputWithButton__input', className)
  }, others, {
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    value: inputValue
  })), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({}, buttonProps, {
    className: (0, _classnames.default)('k-Form-TextInputWithButton__button', {
      'k-Form-TextInputWithButton__button--valid': valid,
      'k-Form-TextInputWithButton__button--error': error,
      'k-Form-TextInputWithButton__button--disabled': disabled
    }),
    type: "button",
    disabled: disabled
  }), value || buttonValue));
};

exports.TextInputWithButton = TextInputWithButton;
TextInputWithButton.propTypes = {
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.string,
  modifier: _propTypes.default.string,
  inputValue: _propTypes.default.string,
  // DEPRECATED: do not use prop `value`. Use `buttonValue` instead.
  value: (0, _deprecated.default)(_propTypes.default.node, 'Use `buttonValue` instead.'),
  buttonValue: _propTypes.default.node
};
TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  size: 'regular',
  buttonValue: 'Button',
  modifier: 'beryllium'
};