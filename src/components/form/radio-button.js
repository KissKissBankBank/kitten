"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RadioButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(RadioButton, _Component);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    (0, _classCallCheck2.default)(this, RadioButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(RadioButton, [{
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          children = _this$props.children,
          largeContent = _this$props.largeContent;
      if (!children) return;
      var labelContentsClassNames = (0, _classnames.default)('k-RadioButton__labelContents', {
        'k-RadioButton__labelContents--large': largeContent
      });
      return _react.default.createElement("div", {
        className: labelContentsClassNames
      }, children);
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          id = _this$props2.id,
          large = _this$props2.large,
          text = _this$props2.text;
      var radioButtonLabelClassNames = (0, _classnames.default)('k-RadioButton__label', {
        'k-RadioButton__label--large': large
      }, {
        'k-RadioButton__label--withContents': !!children
      });
      return _react.default.createElement("label", {
        htmlFor: id,
        className: radioButtonLabelClassNames
      }, text);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          id = _this$props3.id,
          children = _this$props3.children,
          inputClassName = _this$props3.inputClassName,
          large = _this$props3.large,
          largeContent = _this$props3.largeContent,
          text = _this$props3.text,
          error = _this$props3.error,
          style = _this$props3.style,
          inputProps = (0, _objectWithoutProperties2.default)(_this$props3, ["className", "id", "children", "inputClassName", "large", "largeContent", "text", "error", "style"]);
      var radioButtonInputClassNames = (0, _classnames.default)('k-RadioButton__input', inputClassName, {
        'is-error': error
      });
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('k-RadioButton', className),
        style: style
      }, _react.default.createElement("input", (0, _extends2.default)({
        id: id,
        type: "radio",
        className: radioButtonInputClassNames
      }, inputProps)), this.renderLabel(), this.renderContent());
    }
  }]);
  return RadioButton;
}(_react.Component);

exports.RadioButton = RadioButton;
RadioButton.defaultProps = {
  text: null,
  large: false,
  largeContent: false
};