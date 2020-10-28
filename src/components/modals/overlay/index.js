"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledOverlay = _styledComponents.default.div.withConfig({
  displayName: "overlay__StyledOverlay",
  componentId: "l2d0zz-0"
})(["position:absolute;left:0;top:0;right:100%;bottom:100%;z-index:", ";visibility:hidden;opacity:0;background:rgba(34,34,34,0.9);transition:visibility 0s ease,opacity 0.2s ease,bottom 0s,right 0s;transition-delay:0.2s,0s,0.2s,0.2s;&.is-active{right:0;bottom:0;visibility:visible;opacity:1;transition-delay:0s,0s,0s,0s;}"], function (_ref) {
  var zIndex = _ref.zIndex;
  return zIndex;
});

var Overlay = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Overlay, _Component);

  var _super = _createSuper(Overlay);

  function Overlay(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Overlay);
    _this = _super.call(this, props);

    _this.toggleActiveState = function () {
      return _this.setState({
        isActive: !_this.state.isActive
      });
    };

    _this.disableActiveState = function () {
      return _this.setState({
        isActive: false
      });
    };

    _this.enableActiveState = function () {
      return _this.setState({
        isActive: true
      });
    };

    _this.state = {
      isActive: props.isActive
    };
    return _this;
  }

  (0, _createClass2.default)(Overlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.toggleEvent && window.addEventListener(this.props.toggleEvent, this.toggleActiveState);
      this.props.closeEvent && window.addEventListener(this.props.closeEvent, this.disableActiveState);
      this.props.openEvent && window.addEventListener(this.props.openEvent, this.enableActiveState);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.toggleEvent && window.removeEventListener(this.props.toggleEvent, this.toggleActiveState);
      this.props.closeEvent && window.removeEventListener(this.props.closeEvent, this.disableActiveState);
      this.props.openEvent && window.removeEventListener(this.props.openEvent, this.enableActiveState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          zIndex = _this$props.zIndex,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["className", "zIndex"]);
      var isActive = this.state.isActive;
      return /*#__PURE__*/_react.default.createElement(StyledOverlay, (0, _extends2.default)({
        zIndex: zIndex,
        className: (0, _classnames.default)(isActive && 'is-active', className)
      }, other));
    }
  }]);
  return Overlay;
}(_react.Component);

exports.Overlay = Overlay;
Overlay.propTypes = {
  zIndex: _propTypes.default.number,
  isActive: _propTypes.default.bool,
  toggleEvent: _propTypes.default.string,
  closeEvent: _propTypes.default.string,
  openEvent: _propTypes.default.string
};
Overlay.defaultProps = {
  zIndex: 100,
  isActive: false,
  toggleEvent: '',
  closeEvent: '',
  openEvent: ''
};