"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _modifierStyles = require("../../../components/buttons/button/helpers/modifier-styles");

var StyledTextInputWithButton = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-button__StyledTextInputWithButton",
  componentId: "sc-1yqni7d-0"
})(["display:flex;"]);

var StyledTextInput = (0, _styledComponents.default)(_textInput.TextInput).withConfig({
  displayName: "text-input-with-button__StyledTextInput",
  componentId: "sc-1yqni7d-1"
})(["border-right:0;"]);

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "text-input-with-button__StyledButton",
  componentId: "sc-1yqni7d-2"
})(["", ";font-size:", ";line-height:1.3;flex:1 0 auto;outline:none;appearance:none;cursor:pointer;padding:0 ", ";border-radius:0;", ";", " ", " ", ""], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(30), function (_ref) {
  var modifier = _ref.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
}, function (_ref2) {
  var valid = _ref2.valid;
  return valid && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.valid, _colorsConfig.default.valid);
}, function (_ref3) {
  var error = _ref3.error;
  return error && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.error, _colorsConfig.default.error);
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && (0, _styledComponents.css)(["cursor:not-allowed;"]);
});

var TextInputWithButton =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextInputWithButton, _PureComponent);

  function TextInputWithButton() {
    (0, _classCallCheck2.default)(this, TextInputWithButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextInputWithButton).apply(this, arguments));
  }

  (0, _createClass2.default)(TextInputWithButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          valid = _this$props.valid,
          error = _this$props.error,
          disabled = _this$props.disabled,
          tiny = _this$props.tiny,
          value = _this$props.value,
          textInputProps = _this$props.textInputProps,
          modifier = _this$props.modifier,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "error", "disabled", "tiny", "value", "textInputProps", "modifier"]);
      return _react.default.createElement(StyledTextInputWithButton, null, _react.default.createElement(StyledTextInput, (0, _extends2.default)({}, textInputProps, {
        valid: valid,
        error: error,
        disabled: disabled,
        tiny: tiny
      })), _react.default.createElement(StyledButton, {
        type: "button",
        modifier: modifier,
        valid: valid,
        error: error,
        disabled: disabled
      }, value));
    }
  }]);
  return TextInputWithButton;
}(_react.PureComponent);

exports.TextInputWithButton = TextInputWithButton;
TextInputWithButton.propTypes = {
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  tiny: _propTypes.default.bool,
  modifier: _propTypes.default.string,
  value: _propTypes.default.string,
  textInputProps: _propTypes.default.shape({
    tag: _propTypes.default.string,
    name: _propTypes.default.string
  })
};
TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  tiny: false,
  value: 'Button',
  modifier: 'beryllium',
  textInputProps: {
    tag: 'input',
    name: 'text'
  }
};