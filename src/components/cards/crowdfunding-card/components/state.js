"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var State = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(State, _PureComponent);

  var _super = _createSuper(State);

  function State() {
    (0, _classCallCheck2.default)(this, State);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(State, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          state = _this$props.state,
          widgetState = _this$props.widgetState;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, state && this.renderState(), widgetState && this.renderWidgetState());
    }
  }, {
    key: "renderState",
    value: function renderState() {
      var _this$props2 = this.props,
          state = _this$props2.state,
          loading = _this$props2.loading;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading && /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__state"
      }, /*#__PURE__*/_react.default.createElement(_text.Text, {
        size: "micro",
        lineHeight: "normal",
        weight: "regular",
        color: "font1"
      }, state)));
    }
  }, {
    key: "renderWidgetState",
    value: function renderWidgetState() {
      var _this$props3 = this.props,
          widgetState = _this$props3.widgetState,
          loading = _this$props3.loading;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading && /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__widgetState"
      }, widgetState));
    }
  }]);
  return State;
}(_react.PureComponent);

State.propTypes = {
  state: _propTypes.default.node,
  widgetState: _propTypes.default.node,
  loading: _propTypes.default.bool
};
State.defaultProps = {
  state: '',
  widgetState: '',
  loading: false
};
var _default = State;
exports.default = _default;