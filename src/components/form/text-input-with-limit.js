"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithLimit = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInput = require("kitten/components/form/text-input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var TextInputWithLimit =
/*#__PURE__*/
function (_Component) {
  _inherits(TextInputWithLimit, _Component);

  function TextInputWithLimit(props) {
    var _this;

    _classCallCheck(this, TextInputWithLimit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInputWithLimit).call(this, props));
    _this.state = {
      value: _this.props.defaultValue
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TextInputWithLimit, [{
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
          others = _objectWithoutProperties(_this$props, ["limit", "defaultValue", "onChange", "disabled"]);

      var length = this.state.value ? this.state.value.length : 0;
      var textInputLimitClassName = (0, _classnames.default)('k-TextInputLimit', {
        'is-disabled': disabled
      });
      var counterClassName = (0, _classnames.default)('k-TextInputLimit__counter', {
        'is-error': length > limit
      });
      return _react.default.createElement("div", {
        className: textInputLimitClassName
      }, _react.default.createElement(_textInput.TextInput, _extends({
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