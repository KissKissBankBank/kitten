"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderBar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementHelper = require("../../helpers/dom/element-helper");

var _grabberIcon = require("../../components/icons/grabber-icon");

// DOM for the Slider component. See Slider for state and
var SliderBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SliderBar, _React$Component);

  function SliderBar(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SliderBar);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SliderBar).call(this, props));
    _this.state = {
      grabbing: false
    };
    _this.handleMove = _this.handleMove.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleStart = _this.handleStart.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEnd = _this.handleEnd.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  } // Allow other components to focus


  (0, _createClass2.default)(SliderBar, [{
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