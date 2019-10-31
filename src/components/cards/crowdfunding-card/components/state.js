"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../../components/typography/text");

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);

var StyledState = _styledComponents.default.div.withConfig({
  displayName: "state__StyledState",
  componentId: "colp6f-0"
})(["position:absolute;top:0;right:0;display:inline-flex;align-items:center;background-color:", ";padding:", ";line-height:1;"], _colorsConfig.default.background1, COMPONENT_GUTTER);

var StyledWidgetContainer = _styledComponents.default.div.withConfig({
  displayName: "state__StyledWidgetContainer",
  componentId: "colp6f-1"
})(["display:flex;position:absolute;background:", ";border-radius:", ";margin:", " ", " 0 0;right:0;top:0;padding:", " ", ";"], _colorsConfig.default.font1, (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20));

var State =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(State, _PureComponent);

  function State() {
    (0, _classCallCheck2.default)(this, State);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(State).apply(this, arguments));
  }

  (0, _createClass2.default)(State, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          state = _this$props.state,
          widgetState = _this$props.widgetState;
      return _react.default.createElement(_react.default.Fragment, null, state && this.renderState(), widgetState && this.renderWidgetState());
    }
  }, {
    key: "renderState",
    value: function renderState() {
      var _this$props2 = this.props,
          state = _this$props2.state,
          loading = _this$props2.loading;
      return _react.default.createElement(_react.default.Fragment, null, !loading && _react.default.createElement(StyledState, null, _react.default.createElement(_text.Text, {
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
      return _react.default.createElement(_react.default.Fragment, null, !loading && _react.default.createElement(StyledWidgetContainer, null, widgetState));
    }
  }]);
  return State;
}(_react.PureComponent);

State.propTypes = {
  state: _propTypes.default.string,
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