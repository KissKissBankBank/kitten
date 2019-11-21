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

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../../components/typography/text");

var _title = require("../../../../components/typography/title");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _horizontalStroke = require("../../../../components/layout/horizontal-stroke");

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var _screenConfig = require("../../../../constants/screen-config");

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);
var StyledTruncate = (0, _styledComponents.default)(_reactTruncate.default).withConfig({
  displayName: "subtitle__StyledTruncate",
  componentId: "hzl57w-0"
})(["white-space:nowrap;"]);

var StyledContainerSubtitle = _styledComponents.default.div.withConfig({
  displayName: "subtitle__StyledContainerSubtitle",
  componentId: "hzl57w-1"
})(["display:none;@media (min-width:", "){display:flex;align-items:center;line-height:1;padding:0 ", ";margin-top:", ";}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), COMPONENT_GUTTER, (0, _typography.pxToRem)(10));

var StyledHorizontalStroke = (0, _styledComponents.default)(function (_ref) {
  var loading = _ref.loading,
      others = (0, _objectWithoutProperties2.default)(_ref, ["loading"]);
  return _react.default.createElement(_horizontalStroke.HorizontalStroke, others);
}).withConfig({
  displayName: "subtitle__StyledHorizontalStroke",
  componentId: "hzl57w-2"
})(["flex-shrink:0;margin:", " ", " ", " 0;", ""], (0, _typography.pxToRem)(5), COMPONENT_GUTTER, (0, _typography.pxToRem)(5), function (_ref2) {
  var loading = _ref2.loading;
  return loading && (0, _styledComponents.css)(["background-color:", ";"], _colorsConfig.default.line2);
});
var StyledSubtitle = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "subtitle__StyledSubtitle",
  componentId: "hzl57w-3"
})(["line-height:1;flex:1;", ""], function (_ref3) {
  var subTitleTruncate = _ref3.subTitleTruncate;
  return subTitleTruncate && (0, _styledComponents.css)(["white-space:nowrap;overflow:hidden;"]);
});

var StyledSubtitleLoading = _styledComponents.default.span.withConfig({
  displayName: "subtitle__StyledSubtitleLoading",
  componentId: "hzl57w-4"
})(["display:block;background-color:", ";width:", ";height:", ";"], _colorsConfig.default.line2, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(12));

var StyledWidgetSubtitle = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "subtitle__StyledWidgetSubtitle",
  componentId: "hzl57w-5"
})(["margin:", " 0 ", " 0;"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(20));

var Subtitle =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Subtitle, _PureComponent);

  function Subtitle() {
    (0, _classCallCheck2.default)(this, Subtitle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Subtitle).apply(this, arguments));
  }

  (0, _createClass2.default)(Subtitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loading = _this$props.loading,
          subTitle = _this$props.subTitle,
          subTitleTruncate = _this$props.subTitleTruncate,
          widgetSubtitle = _this$props.widgetSubtitle;
      return _react.default.createElement(_react.default.Fragment, null, subTitle && this.renderSubtitle(), widgetSubtitle && this.renderWidgetSubtitle());
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          subTitle = _this$props2.subTitle,
          subTitleTruncate = _this$props2.subTitleTruncate;
      return _react.default.createElement(StyledContainerSubtitle, null, _react.default.createElement(StyledHorizontalStroke, {
        size: "tiny",
        loading: loading
      }), subTitle && !loading && _react.default.createElement(StyledSubtitle, {
        size: "micro",
        weight: "regular",
        tag: "p",
        color: "font1"
      }, subTitleTruncate && _react.default.createElement(StyledTruncate, null, subTitle), !subTitleTruncate && subTitle), loading && _react.default.createElement(StyledSubtitleLoading, null));
    }
  }, {
    key: "renderWidgetSubtitle",
    value: function renderWidgetSubtitle() {
      var _this$props3 = this.props,
          widgetSubtitle = _this$props3.widgetSubtitle,
          subTitleTruncate = _this$props3.subTitleTruncate,
          loading = _this$props3.loading;
      return _react.default.createElement(_react.default.Fragment, null, StyledWidgetSubtitle && !loading && _react.default.createElement(StyledWidgetSubtitle, {
        tag: "p",
        size: "micro",
        color: "font1",
        lineHeight: "normal",
        weight: "light"
      }, subTitleTruncate && _react.default.createElement(StyledTruncate, {
        lines: 2
      }, widgetSubtitle), !subTitleTruncate && widgetSubtitle), loading && _react.default.createElement(StyledSubtitleLoading, null));
    }
  }]);
  return Subtitle;
}(_react.PureComponent);

Subtitle.propTypes = {
  subTitle: _propTypes.default.string,
  widgetSubtitle: _propTypes.default.string,
  subTitleTruncate: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  titleProps: _propTypes.default.shape()
};
Subtitle.defaultProps = {
  subTitle: '',
  widgetSubtitle: '',
  subTitleTruncate: true,
  loading: false,
  titleProps: {}
};
var _default = Subtitle;
exports.default = _default;