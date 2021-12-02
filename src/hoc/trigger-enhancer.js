"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.triggerEnhancer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _elementHelper = require("../helpers/dom/element-helper");

var triggerEnhancer = function triggerEnhancer(WrappedComponent, wrappedComponentProps) {
  var TriggerWrapper = /*#__PURE__*/function (_React$Component) {
    (0, _inheritsLoose2.default)(TriggerWrapper, _React$Component);

    function TriggerWrapper(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        play: false
      };
      _this.handleStop = _this.handleStop.bind((0, _assertThisInitialized2.default)(_this));
      return _this;
    }

    var _proto = TriggerWrapper.prototype;

    _proto.componentDidMount = function componentDidMount() {
      if (this.shouldStart()) {
        this.start();
      }
    };

    _proto.handleStop = function handleStop() {
      this.stop();
      this.dispatchEvent(this.props.stopEventName);
    };

    _proto.dispatchEvent = function dispatchEvent(eventLabel) {
      if (!_elementHelper.domElementHelper.canUseDom()) return;
      var event = document.createEvent('Event');
      event.initEvent(eventLabel, true, true);
      window.dispatchEvent(event);
    };

    _proto.hasPlayed = function hasPlayed() {
      // TODO: better implementation of localStorage as state store for React
      // component.
      var componentState = JSON.parse(localStorage.getItem(this.props.storeName));
      return componentState && componentState.hasPlayed;
    };

    _proto.shouldStart = function shouldStart() {
      if (!_elementHelper.domElementHelper.canUseDom()) {
        return false;
      }

      if (!this.props.verifyStorageOnStart) {
        return true;
      }

      return this.props.autorun && !this.hasPlayed();
    };

    _proto.start = function start() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.setState({
          play: true
        });
      }, 10);
      setTimeout(function () {
        var componentState = JSON.stringify({
          hasPlayed: true
        });
        var storeName = _this2.props.storeName;
        localStorage.setItem(storeName, componentState);
      }, 1000);
    };

    _proto.stop = function stop() {
      this.setState({
        play: false
      });
    };

    _proto.handlerProps = function handlerProps() {
      var handlerProps = {};

      if (this.props.stopHandlerName) {
        handlerProps[this.props.stopHandlerName] = this.handleStop;
      }

      return handlerProps;
    };

    _proto.render = function render() {
      if (!this.state.play) return null;
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({}, this.handlerProps(), wrappedComponentProps));
    };

    return TriggerWrapper;
  }(_react.default.Component);

  TriggerWrapper.defaultProps = {
    autorun: true,
    stopEventName: 'k:auto-trigger:stop',
    stopHandlerName: null,
    storeName: 'kitten.AutoTrigger',
    verifyStorageOnStart: true
  };
  return TriggerWrapper;
};

exports.triggerEnhancer = triggerEnhancer;