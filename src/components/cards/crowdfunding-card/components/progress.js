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

var _typography = require("../../../../helpers/utils/typography");

var _progress = require("../../../../components/meters/progress");

var _text = require("../../../../components/typography/text");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "progress__StyledContainer",
  componentId: "sc-4iuf3q-0"
})(["display:flex;flex-direction:row;align-items:center;padding:0;margin-top:", ";margin-bottom:", ";@media (min-width:", "){padding:0 ", ";}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), COMPONENT_GUTTER);

var StyledProgress = (0, _styledComponents.default)(_progress.Progress).withConfig({
  displayName: "progress__StyledProgress",
  componentId: "sc-4iuf3q-1"
})(["flex:1;"]);
var StyledPercent = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "progress__StyledPercent",
  componentId: "sc-4iuf3q-2"
})(["flex-shrink:0;margin-left:calc(2 * ", ");"], COMPONENT_GUTTER);

var StyledLoading = _styledComponents.default.span.withConfig({
  displayName: "progress__StyledLoading",
  componentId: "sc-4iuf3q-3"
})(["display:block;background-color:", ";border-bottom:", " solid ", ";width:", ";height:", ";"], _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(16));

var ProgressBar =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ProgressBar, _PureComponent);

  function ProgressBar() {
    (0, _classCallCheck2.default)(this, ProgressBar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProgressBar).apply(this, arguments));
  }

  (0, _createClass2.default)(ProgressBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          progress = _this$props.progress,
          progressColor = _this$props.progressColor,
          loading = _this$props.loading;
      if (progress === false) return null;
      var progressValue = loading ? 65 : progress;
      return _react.default.createElement(StyledContainer, null, _react.default.createElement(StyledProgress, {
        value: progressValue,
        className: loading && 'is-disabled',
        color: progressColor,
        rampProps: {
          style: {
            height: '4px'
          }
        }
      }), _react.default.createElement(StyledPercent, {
        weight: "regular",
        size: "micro",
        color: "font1",
        className: "k-u-hidden@s-down"
      }, loading && _react.default.createElement(StyledLoading, null), !loading && "".concat(progress, " %")));
    }
  }]);
  return ProgressBar;
}(_react.PureComponent);

ProgressBar.propTypes = {
  progress: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  progressColor: _propTypes.default.string,
  loading: _propTypes.default.bool
};
ProgressBar.defaultProps = {
  progress: 0,
  progressColor: '',
  loading: false
};
var _default = ProgressBar;
exports.default = _default;