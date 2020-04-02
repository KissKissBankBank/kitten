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

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
})(["", ";font-size:", ";line-height:1.3;flex:1 0 auto;outline:none;appearance:none;cursor:pointer;padding:0 ", ";border-radius:0;", ";", " ", " input:invalid:not(:focus) + &{background-color:", ";border-color:", ";}", ""], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(30), function (_ref) {
  var modifier = _ref.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
}, function (_ref2) {
  var valid = _ref2.valid;
  return valid && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.valid, _colorsConfig.default.valid);
}, function (_ref3) {
  var error = _ref3.error;
  return error && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.error, _colorsConfig.default.error);
}, _colorsConfig.default.error, _colorsConfig.default.error, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && (0, _styledComponents.css)(["cursor:not-allowed;"]);
});

var TextInputWithButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TextInputWithButton, _PureComponent);

  var _super = _createSuper(TextInputWithButton);

  function TextInputWithButton() {
    (0, _classCallCheck2.default)(this, TextInputWithButton);
    return _super.apply(this, arguments);
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
          buttonValue = _this$props.buttonValue,
          modifier = _this$props.modifier,
          buttonProps = _this$props.buttonProps,
          inputValue = _this$props.inputValue,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "error", "disabled", "tiny", "value", "buttonValue", "modifier", "buttonProps", "inputValue"]);
      return _react.default.createElement(StyledTextInputWithButton, null, _react.default.createElement(StyledTextInput, (0, _extends2.default)({}, others, {
        valid: valid,
        error: error,
        disabled: disabled,
        tiny: tiny,
        value: inputValue
      })), _react.default.createElement(StyledButton, (0, _extends2.default)({
        type: "button",
        modifier: modifier,
        valid: valid,
        error: error,
        disabled: disabled
      }, buttonProps), value || buttonValue));
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
  inputValue: _propTypes.default.string,
  // DEPRECATED: do not use prop `value`. Use `buttonValue` instead.
  value: (0, _deprecated.default)(_propTypes.default.node, 'Use `buttonValue` instead.'),
  buttonValue: _propTypes.default.node
};
TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  tiny: false,
  buttonValue: 'Button',
  modifier: 'beryllium'
};