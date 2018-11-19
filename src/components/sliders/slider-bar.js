"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementHelper = require("kitten/helpers/dom/element-helper");

var _grabberIcon = require("kitten/components/icons/grabber-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// DOM for the Slider component. See Slider for state and
var SliderBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SliderBar, _React$Component);

  function SliderBar(props) {
    var _this;

    _classCallCheck(this, SliderBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SliderBar).call(this, props));
    _this.state = {
      grabbing: false
    };
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleStart = _this.handleStart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleEnd = _this.handleEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // Allow other components to focus


  _createClass(SliderBar, [{
    key: "focus",
    value: function focus() {
      this.refs.thumb.focus();
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      this.props.onAction(e);
      this.setState({
        grabbing: false
      });
      this.handleMove(e);
    }
  }, {
    key: "handleStart",
    value: function handleStart(e) {
      this.props.onAction(e);
      e.stopPropagation();
      e.preventDefault();

      if (_elementHelper.domElementHelper.canUseDom()) {
        document.addEventListener('mousemove', this.handleMove);
        document.addEventListener('touchmove', this.handleMove);
        document.addEventListener('mouseup', this.handleEnd);
        document.addEventListener('touchend', this.handleEnd);
      }

      this.setState({
        grabbing: true
      });
    }
  }, {
    key: "handleEnd",
    value: function handleEnd() {
      if (_elementHelper.domElementHelper.canUseDom()) {
        document.removeEventListener('mousemove', this.handleMove);
        document.removeEventListener('touchmove', this.handleMove);
        document.removeEventListener('mouseup', this.handleEnd);
        document.removeEventListener('touchend', this.handleEnd);
      }

      this.setState({
        grabbing: false
      });
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      e.stopPropagation();
      e.preventDefault();
      var coordinate = e.touches ? e.touches[0].clientX : e.clientX;
      var trackPosition = this.refs.track.getBoundingClientRect();
      var ratio = (coordinate - trackPosition.left) / trackPosition.width;
      this.props.onMove(ratio);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      if (this.props.name) return _react.default.createElement("input", {
        type: "hidden",
        name: this.props.name,
        value: this.props.value || ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var percentage = this.props.ratio * 100 + '%';
      var trackStyles = {
        width: percentage
      };
      var thumbStyles = {
        left: percentage
      };
      var grabbingClass = this.state.grabbing ? 'is-grabbing' : null;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('k-Slider', grabbingClass),
        onClick: this.handleClick
      }, _react.default.createElement("div", {
        className: "k-Slider__ramp",
        ref: "track"
      }, _react.default.createElement("div", {
        className: "k-Slider__progress",
        style: trackStyles
      }), _react.default.createElement("div", {
        className: "k-Slider__handle",
        ref: "thumb",
        style: thumbStyles,
        role: "slider",
        tabIndex: "0",
        "aria-valuemin": this.props.min,
        "aria-valuemax": this.props.max,
        "aria-valuenow": this.props.value,
        onKeyDown: this.props.onKeyDown,
        onMouseDown: this.handleStart,
        onTouchStart: this.handleStart,
        onClick: this.handleClick,
        onFocus: this.props.onAction
      }, _react.default.createElement(_grabberIcon.GrabberIcon, {
        className: "k-Slider__handleIcon",
        width: "32",
        height: "32"
      }))), this.renderInput());
    }
  }]);

  return SliderBar;
}(_react.default.Component);

exports.SliderBar = SliderBar;