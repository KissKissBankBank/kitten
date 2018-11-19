"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectWithState = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSelect = _interopRequireDefault(require("react-select"));

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

var SelectWithState =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectWithState, _Component);

  function SelectWithState(props) {
    var _this;

    _classCallCheck(this, SelectWithState);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectWithState).call(this, props));
    _this.state = {
      value: props.value
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SelectWithState, [{
    key: "handleChange",
    value: function handleChange(val) {
      var value = val && val.value ? val : {
        value: null,
        label: null
      };
      this.setState({
        value: value
      });
      this.props.onChange(value);
      this.props.onInputChange({
        value: value,
        name: this.props.name
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var enterKeyCode = 13;
      var spaceKeyCode = 32;

      if (event.keyCode === enterKeyCode || event.keyCode === spaceKeyCode) {
        event.preventDefault();
        event.stopPropagation();
        this.onRemove(event);
      }
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      if (!this.props.labelText) return;
      return _react.default.createElement("label", {
        className: "k-Select__label",
        id: this.props.id
      }, this.props.labelText);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange,
          className = _this$props.className,
          tiny = _this$props.tiny,
          error = _this$props.error,
          valid = _this$props.valid,
          disabled = _this$props.disabled,
          other = _objectWithoutProperties(_this$props, ["value", "onChange", "className", "tiny", "error", "valid", "disabled"]);

      var selectClassName = (0, _classnames.default)('k-Select', className, {
        'k-Select--tiny': tiny,
        'is-error': error,
        'is-valid': valid,
        'is-disabled': disabled
      });
      return _react.default.createElement("div", {
        className: selectClassName
      }, this.renderLabel(), _react.default.createElement(SelectWithMultiLevel, _extends({
        value: this.state.value,
        onKeyDown: this.onKeyDown,
        onChange: this.handleChange,
        disabled: disabled
      }, other)));
    }
  }]);

  return SelectWithState;
}(_react.Component);

exports.SelectWithState = SelectWithState;

var SelectWithMultiLevel =
/*#__PURE__*/
function (_Component2) {
  _inherits(SelectWithMultiLevel, _Component2);

  function SelectWithMultiLevel() {
    _classCallCheck(this, SelectWithMultiLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectWithMultiLevel).apply(this, arguments));
  }

  _createClass(SelectWithMultiLevel, [{
    key: "flattenedOptions",
    // Turns a hierarchy of options with `children` into a flat array
    // of options with a `level` of 1, 2 or null.
    value: function flattenedOptions() {
      var options = [];
      this.props.options.map(function (option) {
        if (option.children) {
          option.level = 1;
          options.push(option);
          option.children.map(function (opt) {
            opt.level = 2;
            options.push(opt);
          });
        } else {
          options.push(option);
        }
      });
      return options;
    } // React-Select allows changing the way options are rendered.

  }, {
    key: "optionRenderer",
    value: function optionRenderer(_ref) {
      var level = _ref.level,
          label = _ref.label;
      if (!level) return label;
      return _react.default.createElement("span", {
        className: 'k-Select__option--level' + level
      }, label);
    }
  }, {
    key: "render",
    value: function render() {
      var inputProps = this.props.inputProps;
      if (this.props.labelText && !inputProps['aria-labelledby']) inputProps['aria-labelledby'] = this.props.id;
      return _react.default.createElement(_reactSelect.default, _extends({
        optionRenderer: this.optionRenderer
      }, this.props, {
        inputProps: inputProps,
        options: this.flattenedOptions()
      }));
    }
  }]);

  return SelectWithMultiLevel;
}(_react.Component);

SelectWithState.defaultProps = {
  onChange: function onChange() {},
  onInputChange: function onInputChange() {},
  clearable: false,
  searchable: false,
  deleteRemoves: false,
  multi: false,
  labelText: null,
  error: false,
  valid: false,
  disabled: false,
  tiny: false,
  name: null,
  inputProps: {} // DEPRECATED: do not use default export.

};
var _default = SelectWithState;
exports.default = _default;