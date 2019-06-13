"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var borderWidth = (0, _typography.pxToRem)(2);
var borderColor = _colorsConfig.default.line1;

var StyledTextInput = _styledComponents.default.input.withConfig({
  displayName: "text-input__StyledTextInput",
  componentId: "sc-11wej6v-0"
})(["font-size:", ";font-style:light;line-height:1.3;box-sizing:border-box;border-width:", ";border-style:solid;border-radius:0 width:100%;height:", ";padding:", " ", ";appearance:none;background-color:", ";color:", ";border-color:", ";:placeholder{color:", ";}:focus{outline:none;border-color:", ";}:disabled{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;}", " ", " ", ""], (0, _typography.stepToRem)(-1), borderWidth, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.line1, _colorsConfig.default.font2, _colorsConfig.default.line2, _colorsConfig.default.font2, _colorsConfig.default.line1, _colorsConfig.default.line1, function (_ref) {
  var valid = _ref.valid;
  return valid && (0, _styledComponents.css)(["color:", ";border-color:", ";:focus{border-color:", ";color:", ";}"], _colorsConfig.default.tertiary2, _colorsConfig.default.tertiary2, _colorsConfig.default.line2, _colorsConfig.default.font1);
}, function (_ref2) {
  var error = _ref2.error;
  return error && (0, _styledComponents.css)(["color:", ";border-color:", ";:focus{border-color:", ";color:", ";}"], _colorsConfig.default.error3, _colorsConfig.default.error3, _colorsConfig.default.line2, _colorsConfig.default.font1);
}, function (_ref3) {
  var tiny = _ref3.tiny;
  return tiny && (0, _styledComponents.css)(["height:", ";"], (0, _typography.pxToRem)(40));
});

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextInput, _PureComponent);

  function TextInput() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TextInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.input = (0, _react.createRef)();
    return _this;
  }

  (0, _createClass2.default)(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          valid = _this$props.valid,
          error = _this$props.error,
          disabled = _this$props.disabled,
          digits = _this$props.digits,
          tiny = _this$props.tiny,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "error", "disabled", "digits", "tiny"]);
      return _react.default.createElement(StyledTextInput, (0, _extends2.default)({
        ref: this.input,
        type: "text",
        name: name
      }, others));
    }
  }]);
  return TextInput;
}(_react.PureComponent);

exports.TextInput = TextInput;
TextInput.propTypes = {
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  tiny: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};