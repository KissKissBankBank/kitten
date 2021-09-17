import _extends from "@babel/runtime/helpers/extends";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import { domElementHelper } from '../helpers/dom/element-helper';
export var triggerEnhancer = function triggerEnhancer(WrappedComponent, wrappedComponentProps) {
  var TriggerWrapper = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(TriggerWrapper, _React$Component);

    function TriggerWrapper(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        play: false
      };
      _this.handleStop = _this.handleStop.bind(_assertThisInitialized(_this));
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
      if (!domElementHelper.canUseDom()) return;
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
      if (!domElementHelper.canUseDom()) {
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
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.handlerProps(), wrappedComponentProps));
    };

    return TriggerWrapper;
  }(React.Component);

  TriggerWrapper.defaultProps = {
    autorun: true,
    stopEventName: 'k:auto-trigger:stop',
    stopHandlerName: null,
    storeName: 'kitten.AutoTrigger',
    verifyStorageOnStart: true
  };
  return TriggerWrapper;
};