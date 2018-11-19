"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerEnhancer = void 0;

var _react = _interopRequireDefault(require("react"));

var _elementHelper = require("kitten/helpers/dom/element-helper");

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

var triggerEnhancer = function triggerEnhancer(WrappedComponent, wrappedComponentProps) {
  var TriggerWrapper =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(TriggerWrapper, _React$Component);

    function TriggerWrapper(props) {
      var _this;

      _classCallCheck(this, TriggerWrapper);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TriggerWrapper).call(this, props));
      _this.state = {
        play: false
      };
      _this.handleStop = _this.handleStop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
        return _react.default.createElement(WrappedComponent, _extends({}, this.handlerProps(), wrappedComponentProps));
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