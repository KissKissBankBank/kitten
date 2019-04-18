"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerEnhancer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _elementHelper = require("../helpers/dom/element-helper");

var triggerEnhancer = function triggerEnhancer(WrappedComponent, wrappedComponentProps) {
  var TriggerWrapper =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(TriggerWrapper, _React$Component);

    function TriggerWrapper(props) {
      var _this;

      (0, _classCallCheck2.default)(this, TriggerWrapper);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TriggerWrapper).call(this, props));
      _this.state = {
        play: false
      };
      _this.handleStop = _this.handleStop.bind((0, _assertThisInitialized2.default)(_this));
      return _this;
    }

    (0, _createClass2.default)(TriggerWrapper, [{
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
        if (!_elementHelper.domElementHelper.canUseDom()) return;
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
        if (!_elementHelper.domElementHelper.canUseDom()) {
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
        return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, this.handlerProps(), wrappedComponentProps));
      }
    }]);
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