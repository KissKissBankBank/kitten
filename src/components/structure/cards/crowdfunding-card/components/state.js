"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../typography/text");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var State = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(State, _PureComponent);

  function State() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = State.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        state = _this$props.state,
        widgetState = _this$props.widgetState;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, state && this.renderState(), widgetState && this.renderWidgetState());
  };

  _proto.renderState = function renderState() {
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
  };

  _proto.renderWidgetState = function renderWidgetState() {
    var _this$props3 = this.props,
        widgetState = _this$props3.widgetState,
        loading = _this$props3.loading;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading && /*#__PURE__*/_react.default.createElement("div", {
      className: "k-CrowdfundingCard__widgetState"
    }, widgetState));
  };

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