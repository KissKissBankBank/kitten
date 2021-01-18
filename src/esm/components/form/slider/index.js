import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// TODO move to the "sliders" group (breaking change)
import React from 'react';
import PropTypes from 'prop-types';
import { SliderBar } from '../../../components/sliders/slider-bar';
import { sliderKeyDownHandler } from '../../../handlers/sliders/slider-key-down-handler'; // Slider input to choose an integer value between two bounds

export var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = sliderKeyDownHandler.bind(_assertThisInitialized(_this));
    return _this;
  } // Allow other components to focus


  _createClass(Slider, [{
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
      return /*#__PURE__*/React.createElement(SliderBar, _extends({
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
}(React.Component);
Slider.propTypes = {
  // Starting value (e.g. 50)
  initialValue: PropTypes.number,
  // Minimum possible value (e.g. 0)
  min: PropTypes.number,
  // Maximum possible value (e.g. 100)
  max: PropTypes.number,
  // Space between each possible value when updated by keyboard (e.g. 1)
  step: PropTypes.number,
  // Input name, if needed (e.g. "amount")
  name: PropTypes.string,
  // Callback when the value changes (clicked or while dragging)
  // passes the current value and percentage as an argument
  //
  // You should use the given value and pass it back to the Slider props
  // to re-render the Slider value at the correct position.
  onChange: PropTypes.func,
  // Callback when we click, touch or focus
  onAction: PropTypes.func
};
Slider.defaultProps = {
  value: null,
  min: 0,
  max: 100,
  step: 1,
  onChange: function onChange() {},
  onChangeEnd: function onChangeEnd() {},
  onAction: function onAction() {}
}; // DEPRECATED: do not use default export.

export default Slider;