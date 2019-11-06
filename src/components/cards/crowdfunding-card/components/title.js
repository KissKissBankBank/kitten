"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../../components/typography/text");

var _title = require("../../../../components/typography/title");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);
var StyledTruncate = (0, _styledComponents.default)(_reactTruncate.default).withConfig({
  displayName: "title__StyledTruncate",
  componentId: "sc-1wv1kzg-0"
})(["white-space:nowrap;"]);

var StyledTitle = _styledComponents.default.div.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-1wv1kzg-1"
})(["flex:1;padding:0 ", ";line-height:1;"], COMPONENT_GUTTER);

var StyledWidgetTitle = (0, _styledComponents.default)(StyledTitle).withConfig({
  displayName: "title__StyledWidgetTitle",
  componentId: "sc-1wv1kzg-2"
})(["padding:0;"]);

var StyledTitleLoading = _styledComponents.default.span.withConfig({
  displayName: "title__StyledTitleLoading",
  componentId: "sc-1wv1kzg-3"
})(["display:block;background-color:", ";border-bottom:", " solid ", ";height:", ";"], _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(24));

var StyledTitleSmallLoading = (0, _styledComponents.default)(StyledTitleLoading).withConfig({
  displayName: "title__StyledTitleSmallLoading",
  componentId: "sc-1wv1kzg-4"
})(["width:70%;border-top:", " solid ", ";border-bottom:0;"], (0, _typography.pxToRem)(1), _colorsConfig.default.background1);

var StyledWidgetContainer = _styledComponents.default.div.withConfig({
  displayName: "title__StyledWidgetContainer",
  componentId: "sc-1wv1kzg-5"
})(["display:flex;"]);

var StyledDayCounter = _styledComponents.default.div.withConfig({
  displayName: "title__StyledDayCounter",
  componentId: "sc-1wv1kzg-6"
})(["line-height:1;margin-left:calc(2 * ", ");"], COMPONENT_GUTTER);

var StyledStateDay = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "title__StyledStateDay",
  componentId: "sc-1wv1kzg-7"
})(["display:flex;"]);

var TitleComponent =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TitleComponent, _PureComponent);

  function TitleComponent() {
    (0, _classCallCheck2.default)(this, TitleComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TitleComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(TitleComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          titleTruncate = _this$props.titleTruncate,
          titleProps = _this$props.titleProps,
          loading = _this$props.loading,
          widgetTitle = _this$props.widgetTitle,
          dayCounter = _this$props.dayCounter,
          stateDay = _this$props.stateDay;
      return _react.default.createElement(_react.default.Fragment, null, title && this.renderTitle(), widgetTitle && this.renderWidgetTitle());
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          titleProps = _this$props2.titleProps,
          titleTruncate = _this$props2.titleTruncate,
          title = _this$props2.title;
      return _react.default.createElement(StyledTitle, null, !loading && _react.default.createElement(_title.Title, (0, _extends2.default)({
        tag: "p",
        modifier: "senary",
        margin: false,
        className: "k-Card__title"
      }, titleProps), titleTruncate && _react.default.createElement(StyledTruncate, {
        lines: 2
      }, title), !titleTruncate && title), loading && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledTitleLoading, null), _react.default.createElement(StyledTitleSmallLoading, null)));
    }
  }, {
    key: "renderWidgetTitle",
    value: function renderWidgetTitle() {
      var _this$props3 = this.props,
          widgetTitle = _this$props3.widgetTitle,
          dayCounter = _this$props3.dayCounter,
          stateDay = _this$props3.stateDay,
          loading = _this$props3.loading,
          titleTruncate = _this$props3.titleTruncate;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledWidgetContainer, null, _react.default.createElement(StyledWidgetTitle, null, !loading && _react.default.createElement(_text.Text, {
        tag: "span",
        color: "font1",
        size: "default",
        weight: "bold",
        lineHeight: "normal",
        className: "k-Card__title"
      }, titleTruncate && _react.default.createElement(_reactTruncate.default, {
        lines: 2
      }, widgetTitle), !titleTruncate && widgetTitle)), !loading && _react.default.createElement(StyledDayCounter, null, _react.default.createElement(_text.Text, {
        size: "tiny",
        color: "font1",
        weight: "bold",
        lineHeight: "normal"
      }, dayCounter, _react.default.createElement(StyledStateDay, {
        size: "micro",
        color: "font1",
        weight: "light",
        lineHeight: "normal"
      }, stateDay)))), loading && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledTitleLoading, null), _react.default.createElement(StyledTitleSmallLoading, null)));
    }
  }]);
  return TitleComponent;
}(_react.PureComponent);

TitleComponent.propTypes = {
  title: _propTypes.default.string,
  titleTruncate: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  widgetTitle: _propTypes.default.string,
  dayCounter: _propTypes.default.string,
  stateDay: _propTypes.default.string,
  titleProps: _propTypes.default.shape()
};
TitleComponent.defaultProps = {
  title: '',
  titleTruncate: true,
  loading: false,
  widgetTitle: '',
  dayCounter: '',
  stateDay: '',
  titleProps: {}
};
var _default = TitleComponent;
exports.default = _default;