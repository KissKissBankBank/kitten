"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slider = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sliderBar = require("kitten/components/sliders/slider-bar");

var _sliderKeyDownHandler = require("kitten/handlers/sliders/slider-key-down-handler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Slider input to choose an integer value between two bounds
var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyDown = _sliderKeyDownHandler.sliderKeyDownHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
      return _react.default.createElement(_sliderBar.SliderBar, _extends({
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
  onChangeEnd: function onChangeEnd() {} // DEPRECATED: do not use default export.

};
var _default = Slider;
exports.default = _default;