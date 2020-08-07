"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithUnit = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledTextInputWithUnit = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-unit__StyledTextInputWithUnit",
  componentId: "gjmccx-0"
})(["display:flex;width:1%;", ""], function (_ref) {
  var digits = _ref.digits;
  return !digits && (0, _styledComponents.css)(["width:100%;"]);
});

var StyledTextInput = (0, _styledComponents.default)(_textInput.TextInput).withConfig({
  displayName: "text-input-with-unit__StyledTextInput",
  componentId: "gjmccx-1"
})(["transition:all 0.2s;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{margin:0;-webkit-appearance:none;}"]);

var StyledInputUnit = _styledComponents.default.span.withConfig({
  displayName: "text-input-with-unit__StyledInputUnit",
  componentId: "gjmccx-2"
})(["display:flex;align-items:center;justify-content:center;background-color:", ";border:", " solid ", ";border-left:0;border-radius:0;box-sizing:border-box;padding:0 ", ";color:", ";white-space:nowrap;transition:all .2s;font-size:", ";", ";:focus{border-color:", ";color:", ";}", " ", " ", " ", " ", " ", " ", " ", ":focus + &{border-color:", ";color:", ";}"], _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(15), _colorsConfig.default.font1, (0, _typography.stepToRem)(0), _typographyConfig.default.fontStyles.regular, _colorsConfig.default.line2, _colorsConfig.default.font1, function (_ref2) {
  var valid = _ref2.valid;
  return valid && (0, _styledComponents.css)(["border-color:", ";color:", ";"], _colorsConfig.default.tertiary2, _colorsConfig.default.valid);
}, function (_ref3) {
  var error = _ref3.error;
  return error && (0, _styledComponents.css)(["border-color:", ";color:", ";"], _colorsConfig.default.error3, _colorsConfig.default.error);
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && (0, _styledComponents.css)(["color:", ";background-color:", ";"], _colorsConfig.default.font2, _colorsConfig.default.line1);
}, function (_ref5) {
  var tiny = _ref5.tiny;
  return tiny && (0, _styledComponents.css)(["padding:0 ", ";"], (0, _typography.pxToRem)(10));
}, function (_ref6) {
  var huge = _ref6.huge;
  return huge && (0, _styledComponents.css)(["padding:0 ", ";"], (0, _typography.pxToRem)(20));
}, function (_ref7) {
  var giant = _ref7.giant;
  return giant && (0, _styledComponents.css)(["padding:0 ", ";"], (0, _typography.pxToRem)(25));
}, function (_ref8) {
  var unitWord = _ref8.unitWord;
  return unitWord && (0, _styledComponents.css)(["font-size:", ";"], (0, _typography.stepToRem)(-1));
}, StyledTextInput, _colorsConfig.default.line2, _colorsConfig.default.font1);

var TextInputWithUnit = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TextInputWithUnit, _PureComponent);

  var _super = _createSuper(TextInputWithUnit);

  function TextInputWithUnit(props) {
    (0, _classCallCheck2.default)(this, TextInputWithUnit);
    return _super.call(this, props);
  }

  (0, _createClass2.default)(TextInputWithUnit, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          type = _this$props.type,
          valid = _this$props.valid,
          error = _this$props.error,
          tiny = _this$props.tiny,
          huge = _this$props.huge,
          giant = _this$props.giant,
          center = _this$props.center,
          disabled = _this$props.disabled,
          unit = _this$props.unit,
          unitWord = _this$props.unitWord,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["type", "valid", "error", "tiny", "huge", "giant", "center", "disabled", "unit", "unitWord"]);
      return /*#__PURE__*/_react.default.createElement(StyledTextInputWithUnit, null, /*#__PURE__*/_react.default.createElement(StyledTextInput, (0, _extends2.default)({
        ref: function ref(input) {
          _this.input = input;
        },
        type: type,
        valid: valid,
        error: error,
        tiny: tiny,
        huge: huge,
        giant: giant,
        center: center,
        disabled: disabled
      }, others)), /*#__PURE__*/_react.default.createElement(StyledInputUnit, {
        valid: valid,
        error: error,
        disabled: disabled,
        tiny: tiny,
        huge: huge,
        giant: giant
      }, unit || unitWord));
    }
  }]);
  return TextInputWithUnit;
}(_react.PureComponent);

exports.TextInputWithUnit = TextInputWithUnit;
TextInputWithUnit.propTypes = {
  type: _propTypes.default.string,
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  tiny: _propTypes.default.bool,
  huge: _propTypes.default.bool,
  giant: _propTypes.default.bool,
  center: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  unit: _propTypes.default.string,
  unitWord: _propTypes.default.bool,
  digits: _propTypes.default.number
};
TextInputWithUnit.defaultProps = {
  unit: 'λ',
  unitWord: false,
  type: 'number',
  valid: false,
  error: false,
  tiny: false,
  huge: false,
  giant: false,
  center: false,
  disabled: false,
  digits: null
};