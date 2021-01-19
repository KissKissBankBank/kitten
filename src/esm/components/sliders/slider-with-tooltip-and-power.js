import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { SliderBar } from '../../components/sliders/slider-bar';
import { sliderKeyDownHandler } from '../../handlers/sliders/slider-key-down-handler';
import { SliderTooltip } from '../../components/sliders/slider-tooltip';
export var SliderWithTooltipAndPower = /*#__PURE__*/function (_React$Component) {
  _inherits(SliderWithTooltipAndPower, _React$Component);

  var _super = _createSuper(SliderWithTooltipAndPower);

  function SliderWithTooltipAndPower(props) {
    var _this;

    _classCallCheck(this, SliderWithTooltipAndPower);

    _this = _super.call(this, props);
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = sliderKeyDownHandler.bind(_assertThisInitialized(_this));
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

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SliderTooltip, {
        className: this.props.tooltipClass,
        percentage: this.ratio() * 100 + '%'
      }, this.props.tooltipText), /*#__PURE__*/React.createElement(SliderBar, (_React$createElement = {
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
}(React.Component);
SliderWithTooltipAndPower.defaultProps = {
  value: null,
  min: 0,
  max: 100,
  step: 1,
  power: 1,
  onChange: function onChange() {},
  onChangeEnd: function onChangeEnd() {}
};