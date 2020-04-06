"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderWithTooltipAndPower = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _sliderBar = require("../../components/sliders/slider-bar");

var _sliderKeyDownHandler = require("../../handlers/sliders/slider-key-down-handler");

var _sliderTooltip = require("../../components/sliders/slider-tooltip");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SliderWithTooltipAndPower = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SliderWithTooltipAndPower, _React$Component);

  var _super = _createSuper(SliderWithTooltipAndPower);

  function SliderWithTooltipAndPower(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SliderWithTooltipAndPower);
    _this = _super.call(this, props);
    _this.handleMove = _this.handleMove.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _sliderKeyDownHandler.sliderKeyDownHandler.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  } // Allow other components to focus


  (0, _createClass2.default)(SliderWithTooltipAndPower, [{
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

      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_sliderTooltip.SliderTooltip, {
        className: this.props.tooltipClass,
        percentage: this.ratio() * 100 + '%'
      }, this.props.tooltipText), /*#__PURE__*/_react.default.createElement(_sliderBar.SliderBar, (_React$createElement = {
        onAction: this.props.onAction,
        onMove: this.props.onMove,
        name: this.props.name,
        value: this.props.value,
        min: this.props.min,
        max: this.props.max,
        ratio: this.ratio()
      }, (0, _defineProperty2.default)(_React$createElement, "onMove", this.handleMove), (0, _defineProperty2.default)(_React$createElement, "onStart", this.handleStart), (0, _defineProperty2.default)(_React$createElement, "onClick", this.handleClick), (0, _defineProperty2.default)(_React$createElement, "onAction", this.props.onAction), (0, _defineProperty2.default)(_React$createElement, "onKeyDown", this.handleKeyDown), _React$createElement)));
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