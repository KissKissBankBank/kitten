"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RadioButton =
/*#__PURE__*/
function (_Component) {
  _inherits(RadioButton, _Component);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioButton).apply(this, arguments));
  }

  _createClass(RadioButton, [{
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
          inputProps = _objectWithoutProperties(_this$props3, ["className", "id", "children", "inputClassName", "large", "largeContent", "text", "error"]);

      var radioButtonInputClassNames = (0, _classnames.default)('k-RadioButton__input', inputClassName, {
        'is-error': error
      });
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('k-RadioButton', className)
      }, _react.default.createElement("input", _extends({
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