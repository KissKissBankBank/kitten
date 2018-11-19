"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderWithTooltipAndPower = void 0;

var _react = _interopRequireDefault(require("react"));

var _sliderBar = require("kitten/components/sliders/slider-bar");

var _sliderKeyDownHandler = require("kitten/handlers/sliders/slider-key-down-handler");

var _sliderTooltip = require("kitten/components/sliders/slider-tooltip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var SliderWithTooltipAndPower =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SliderWithTooltipAndPower, _React$Component);

  function SliderWithTooltipAndPower(props) {
    var _this;

    _classCallCheck(this, SliderWithTooltipAndPower);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SliderWithTooltipAndPower).call(this, props));
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyDown = _sliderKeyDownHandler.sliderKeyDownHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // Allow other components to focus


  _createClass(SliderWithTooltipAndPower, [{
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
      var powerRatio = this.computePowerRatio(ratio);
      var value = Math.round(powerRatio * (max - min) + min);
      this.move(value);
    }
  }, {
    key: "ratio",
    value: function ratio() {
      return this.ratioForValue(this.props.value);
    }
  }, {
    key: "move",
    value: function move(to) {
      var value = this.valueInBounds(to);
      var ratio = this.ratioForValue(value);
      this.setState({
        ratio: ratio
      });
      this.props.onChange(value, ratio);
    } // Turns a normal ratio (between 0 and 1) into a ratio with a different
    // distribution based on the power.
    //
    // Example:
    //   computePowerRatio(0) # => 0
    //   computePowerRatio(0.5) # => 0.76534543
    //   computePowerRatio(1) # => 1

  }, {
    key: "computePowerRatio",
    value: function computePowerRatio(ratio) {
      return ratio < 0 ? 0 : Math.pow(ratio, this.props.power);
    } // Inverse of computePowerRatio. Turns a powered ratio (between 0 and 1) into
    // the ratio where we should place the slider.
    //
    // Example:
    //   computeRatio(0) # => 0
    //   computeRatio(0.76534543) # => 0.5
    //   computeRatio(1) # => 1

  }, {
    key: "computeRatio",
    value: function computeRatio(powerRatio) {
      return Math.pow(powerRatio, 1 / this.props.power);
    }
  }, {
    key: "ratioForValue",
    value: function ratioForValue(value) {
      var _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max;
      if (value === null || isNaN(value)) return 0;
      var powerRatio = (value - min) / (max - min);
      return this.ratioInBounds(this.computeRatio(powerRatio));
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
      var _React$createElement;

      return _react.default.createElement("div", null, _react.default.createElement(_sliderTooltip.SliderTooltip, {
        className: this.props.tooltipClass,
        percentage: this.ratio() * 100 + '%'
      }, this.props.tooltipText), _react.default.createElement(_sliderBar.SliderBar, (_React$createElement = {
        onAction: this.props.onAction,
        onMove: this.props.onMove,
        name: this.props.name,
        value: this.props.value,
        min: this.props.min,
        max: this.props.max,
        ratio: this.ratio()
      }, _defineProperty(_React$createElement, "onMove", this.handleMove), _defineProperty(_React$createElement, "onStart", this.handleStart), _defineProperty(_React$createElement, "onClick", this.handleClick), _defineProperty(_React$createElement, "onAction", this.props.onAction), _defineProperty(_React$createElement, "onKeyDown", this.handleKeyDown), _React$createElement)));
    }
  }]);

  return SliderWithTooltipAndPower;
}(_react.default.Component);

exports.SliderWithTooltipAndPower = SliderWithTooltipAndPower;
SliderWithTooltipAndPower.defaultProps = {
  value: null,
  min: 0,
  max: 100,
  step: 1,
  power: 1,
  onChange: function onChange() {},
  onChangeEnd: function onChangeEnd() {}
};