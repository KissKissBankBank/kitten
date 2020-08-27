import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { domElementHelper } from '../helpers/dom/element-helper';
export var triggerEnhancer = function triggerEnhancer(WrappedComponent, wrappedComponentProps) {
  var TriggerWrapper = /*#__PURE__*/function (_React$Component) {
    _inherits(TriggerWrapper, _React$Component);

    var _super = _createSuper(TriggerWrapper);

    function TriggerWrapper(props) {
      var _this;

      _classCallCheck(this, TriggerWrapper);

      _this = _super.call(this, props);
      _this.state = {
        play: false
      };
      _this.handleStop = _this.handleStop.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(TriggerWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.shouldStart()) {
          this.start();
        }
      }
    }, {
      key: "handleStop",
      value: function handleStop() {
        this.stop();
        this.dispatchEvent(this.props.stopEventName);
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(eventLabel) {
        if (!domElementHelper.canUseDom()) return;
        var event = document.createEvent('Event');
        event.initEvent(eventLabel, true, true);
        window.dispatchEvent(event);
      }
    }, {
      key: "hasPlayed",
      value: function hasPlayed() {
        // TODO: better implementation of localStorage as state store for React
        // component.
        var componentState = JSON.parse(localStorage.getItem(this.props.storeName));
        return componentState && componentState.hasPlayed;
      }
    }, {
      key: "shouldStart",
      value: function shouldStart() {
        if (!domElementHelper.canUseDom()) {
          return false;
        }

        if (!this.props.verifyStorageOnStart) {
          return true;
        }

        return this.props.autorun && !this.hasPlayed();
      }
    }, {
      key: "start",
      value: function start() {
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
      }
    }, {
      key: "stop",
      value: function stop() {
        this.setState({
          play: false
        });
      }
    }, {
      key: "handlerProps",
      value: function handlerProps() {
        var handlerProps = {};

        if (this.props.stopHandlerName) {
          handlerProps[this.props.stopHandlerName] = this.handleStop;
        }

        return handlerProps;
      }
    }, {
      key: "render",
      value: function render() {
        if (!this.state.play) return null;
        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.handlerProps(), wrappedComponentProps));
      }
    }]);

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