"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slider = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sliderBar = require("../../components/sliders/slider-bar");

var _sliderKeyDownHandler = require("../../handlers/sliders/slider-key-down-handler");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Slider input to choose an integer value between two bounds
var Slider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Slider);
    _this = _super.call(this, props);
    _this.handleMove = _this.handleMove.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _sliderKeyDownHandler.sliderKeyDownHandler.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  } // Allow other components to focus


  (0, _createClass2.default)(Slider, [{
    key: "focus",
    value: function focus() {
      this.refs.focus();
    }
  }, {
    key: "handleMove",
    value: function handleMove(ratio) {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max;
      var value = Math.round(ratio * (max - min) + min);
      this.move(value);
    }
  }, {
    key: "ratio",
    value: function ratio() {
      return this.ratioForValue(this.props.value);
    }
  }, {
    key: "ratioForValue",
    value: function ratioForValue(value) {
      var _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max;
      return value === null ? min : this.ratioInBounds((value - min) / (max - min));
    }
  }, {
    key: "move",
    value: function move(to) {
      var value = this.valueInBounds(to);
      this.props.onChange(value, this.ratioForValue(value));
    }
  }, {
    key: "ratioInBounds",
    value: function ratioInBounds(ratio) {
      return ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
    }
  }, {
    key: "valueInBounds",
    value: function valueInBounds(value) {
      var _this$props3 = this.props,
          min = _this$props3.min,
          max = _this$props3.max,
          step = _this$props3.step;
      if (value === null) return min < max ? min : max;

      if (min < max) {
        if (value < min) return min;else if (value > max) return max;
      } else {
        if (value > min) return min;else if (value < max) return max;
      }

      return Math.round(value / step) * step;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_sliderBar.SliderBar, (0, _extends2.default)({
        ref: "contents"
      }, this.props, this.state, {
        onMove: this.handleMove,
        onStart: this.handleStart,
        onClick: this.handleClick,
        onAction: this.props.onAction,
        ratio: this.ratio()
      }));
    }
  }]);
  return Slider;
}(_react.default.Component);

exports.Slider = Slider;
Slider.propTypes = {
  // Starting value (e.g. 50)
  initialValue: _propTypes.default.number,
  // Minimum possible value (e.g. 0)
  min: _propTypes.default.number,
  // Maximum possible value (e.g. 100)
  max: _propTypes.default.number,
  // Space between each possible value when updated by keyboard (e.g. 1)
  step: _propTypes.default.number,
  // Input name, if needed (e.g. "amount")
  name: _propTypes.default.string,
  // Callback when the value changes (clicked or while dragging)
  // passes the current value and percentage as an argument
  //
  // You should use the given value and pass it back to the Slider props
  // to re-render the Slider value at the correct position.
  onChange: _propTypes.default.func,
  // Callback when we click, touch or focus
  onAction: _propTypes.default.func
};
Slider.defaultProps = {
  value: null,
  min: 0,
  max: 100,
  step: 1,
  onChange: function onChange() {},
  onChangeEnd: function onChangeEnd() {}
}; // DEPRECATED: do not use default export.

var _default = Slider;
exports.default = _default;