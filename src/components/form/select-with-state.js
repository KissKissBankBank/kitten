"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectWithState = void 0;

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

var _reactSelect = _interopRequireDefault(require("react-select"));

// Select that uses https://github.com/JedWatson/react-select
// with default states and handles the current value as a local state.
//
// Also handles multi-level options. You can give `children: []` to each option
// and fill it with options to represent a hierarchy.
//
// E.g:
//    <SelectWithState options={
//      { label: 'Cat',
//        children: [{ label: 'A' }, { label: 'B' }]
//      } />
//
var SelectWithState =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SelectWithState, _Component);

  function SelectWithState(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SelectWithState);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectWithState).call(this, props));

    _this.handleChange = function (val) {
      var value = val && val.value ? val : {
        value: null,
        label: null
      };

      _this.setState({
        value: value
      });

      _this.props.onChange(value);

      _this.props.onInputChange({
        value: value,
        name: _this.props.name
      });
    };

    _this.handleLightChange = function (e) {
      var value = e.target.value;

      _this.setState({
        value: value
      });

      _this.props.onChange({
        value: value
      });
    };

    _this.onKeyDown = function (event) {
      var enterKeyCode = 13;
      var spaceKeyCode = 32;

      if (event.keyCode === enterKeyCode || event.keyCode === spaceKeyCode) {
        event.preventDefault();
        event.stopPropagation();

        _this.onRemove(event);
      }
    };

    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass2.default)(SelectWithState, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
        this.setState({
          value: this.props.value
        });
      }
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
          labelText = _this$props.labelText,
          autoFill = _this$props.autoFill,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["value", "onChange", "className", "tiny", "error", "valid", "disabled", "labelText", "autoFill"]);
      var selectClassName = (0, _classnames.default)('k-Select', className, {
        'k-Select--tiny': tiny,
        'is-error': error,
        'is-valid': valid,
        'is-disabled': disabled
      });
      return _react.default.createElement("div", {
        className: selectClassName
      }, labelText && _react.default.createElement("label", {
        className: "k-Select__label",
        htmlFor: this.props.id
      }, labelText), autoFill && _react.default.createElement("input", {
        autoComplete: autoFill,
        "x-autocompletetype": autoFill,
        xautocompletetype: autoFill,
        autocompletetype: autoFill,
        name: autoFill,
        style: {
          position: 'absolute',
          zIndex: '-1',
          opacity: '0'
        },
        onChange: this.handleLightChange
      }), _react.default.createElement(SelectWithMultiLevel, (0, _extends2.default)({
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
  (0, _inherits2.default)(SelectWithMultiLevel, _Component2);

  function SelectWithMultiLevel() {
    (0, _classCallCheck2.default)(this, SelectWithMultiLevel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectWithMultiLevel).apply(this, arguments));
  }

  (0, _createClass2.default)(SelectWithMultiLevel, [{
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
      return _react.default.createElement(_reactSelect.default, (0, _extends2.default)({
        optionRenderer: this.optionRenderer
      }, this.props, {
        inputProps: inputProps,
        options: this.flattenedOptions()
      }));
    }
  }]);
  return SelectWithMultiLevel;
}(_react.Component);

SelectWithState.propTypes = {
  autoFill: _propTypes.default.string
};
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
  inputProps: {},
  autoFill: undefined
}; // DEPRECATED: do not use default export.

var _default = SelectWithState;
exports.default = _default;