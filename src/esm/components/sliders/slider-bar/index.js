import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import classNames from 'classnames';
import { domElementHelper } from '../../../helpers/dom/element-helper';
import { GrabberIcon } from '../../../components/icons/grabber-icon'; // DOM for the Slider component. See Slider for state and

export var SliderBar = /*#__PURE__*/function (_React$Component) {
  _inherits(SliderBar, _React$Component);

  var _super = _createSuper(SliderBar);

  function SliderBar(props) {
    var _this;

    _classCallCheck(this, SliderBar);

    _this = _super.call(this, props);
    _this.state = {
      grabbing: false
    };
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_this));
    _this.handleStart = _this.handleStart.bind(_assertThisInitialized(_this));
    _this.handleEnd = _this.handleEnd.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
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

      if (domElementHelper.canUseDom()) {
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
      if (domElementHelper.canUseDom()) {
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
      if (this.props.name) return /*#__PURE__*/React.createElement("input", {
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
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('k-Slider', grabbingClass),
        onClick: this.handleClick
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-Slider__ramp",
        ref: "track"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-Slider__progress",
        style: trackStyles
      }), /*#__PURE__*/React.createElement("div", {
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
      }, /*#__PURE__*/React.createElement(GrabberIcon, {
        className: "k-Slider__handleIcon",
        width: "32",
        height: "32"
      }))), this.renderInput());
    }
  }]);

  return SliderBar;
}(React.Component);