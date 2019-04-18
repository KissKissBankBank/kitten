"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithLimit = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInput = require("../../components/form/text-input");

var TextInputWithLimit =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TextInputWithLimit, _Component);

  function TextInputWithLimit(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TextInputWithLimit);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextInputWithLimit).call(this, props));
    _this.state = {
      value: _this.props.defaultValue
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(TextInputWithLimit, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
      this.props.onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          limit = _this$props.limit,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["limit", "defaultValue", "onChange", "disabled"]);
      var length = this.state.value ? this.state.value.length : 0;
      var textInputLimitClassName = (0, _classnames.default)('k-TextInputLimit', {
        'is-disabled': disabled
      });
      var counterClassName = (0, _classnames.default)('k-TextInputLimit__counter', {
        'is-error': length > limit
      });
      return _react.default.createElement("div", {
        className: textInputLimitClassName
      }, _react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
        className: "k-TextInputLimit__input",
        value: this.state.value,
        onChange: this.handleChange,
        disabled: disabled
      }, others)), _react.default.createElement("div", {
        className: counterClassName
      }, limit - length));
    }
  }]);
  return TextInputWithLimit;
}(_react.Component);

exports.TextInputWithLimit = TextInputWithLimit;
TextInputWithLimit.defaultProps = {
  tag: 'input',
  limit: 80,
  defaultValue: '',
  disabled: false,
  onChange: function onChange() {}
};