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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../../components/typography/text");

var _title = require("../../../../components/typography/title");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var _screenConfig = require("../../../../constants/screen-config");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);
var StyledTruncate = (0, _styledComponents.default)(_reactTruncate.default).withConfig({
  displayName: "title__StyledTruncate",
  componentId: "sc-1wv1kzg-0"
})(["white-space:nowrap;"]);

var StyledTitleContainer = _styledComponents.default.div.withConfig({
  displayName: "title__StyledTitleContainer",
  componentId: "sc-1wv1kzg-1"
})(["flex:1;padding:0;line-height:1;margin-top:", ";@media (min-width:", "){padding:0 ", ";}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), COMPONENT_GUTTER);

var StyledTitle = (0, _styledComponents.default)(_title.Title).withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-1wv1kzg-2"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.stepToRem)(2));
var StyledWidgetTitle = (0, _styledComponents.default)(StyledTitleContainer).withConfig({
  displayName: "title__StyledWidgetTitle",
  componentId: "sc-1wv1kzg-3"
})(["padding:0;@media (min-width:", "){padding-left:0;}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min));

var StyledTitleLoading = _styledComponents.default.span.withConfig({
  displayName: "title__StyledTitleLoading",
  componentId: "sc-1wv1kzg-4"
})(["display:block;background-color:", ";border-bottom:", " solid ", ";height:", ";"], _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(24));

var StyledTitleSmallLoading = (0, _styledComponents.default)(StyledTitleLoading).withConfig({
  displayName: "title__StyledTitleSmallLoading",
  componentId: "sc-1wv1kzg-5"
})(["width:70%;border-top:", " solid ", ";border-bottom:0;"], (0, _typography.pxToRem)(1), _colorsConfig.default.background1);

var StyledWidgetContainer = _styledComponents.default.div.withConfig({
  displayName: "title__StyledWidgetContainer",
  componentId: "sc-1wv1kzg-6"
})(["display:flex;"]);

var StyledDayCounter = _styledComponents.default.div.withConfig({
  displayName: "title__StyledDayCounter",
  componentId: "sc-1wv1kzg-7"
})(["line-height:1;margin-left:calc(2 * ", ");margin-top:", ";"], COMPONENT_GUTTER, (0, _typography.pxToRem)(10));

var TitleComponent = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TitleComponent, _PureComponent);

  var _super = _createSuper(TitleComponent);

  function TitleComponent() {
    (0, _classCallCheck2.default)(this, TitleComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TitleComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          widgetTitle = _this$props.widgetTitle;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title && this.renderTitle(), widgetTitle && this.renderWidgetTitle());
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          titleProps = _this$props2.titleProps,
          titleTruncate = _this$props2.titleTruncate,
          title = _this$props2.title;
      return /*#__PURE__*/_react.default.createElement(StyledTitleContainer, null, !loading && /*#__PURE__*/_react.default.createElement(StyledTitle, (0, _extends2.default)({
        tag: "p",
        margin: false,
        className: "k-Card__title"
      }, titleProps), titleTruncate && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledTruncate, {
        lines: 2,
        className: "k-u-hidden@s-down"
      }, title), /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
        lines: 3,
        className: "k-u-hidden@m-up"
      }, title)), !titleTruncate && title), loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledTitleLoading, null), /*#__PURE__*/_react.default.createElement(StyledTitleSmallLoading, null)));
    }
  }, {
    key: "renderWidgetTitle",
    value: function renderWidgetTitle() {
      var _this$props3 = this.props,
          widgetTitle = _this$props3.widgetTitle,
          dayCounter = _this$props3.dayCounter,
          loading = _this$props3.loading,
          titleTruncate = _this$props3.titleTruncate;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledWidgetContainer, null, /*#__PURE__*/_react.default.createElement(StyledWidgetTitle, null, !loading && /*#__PURE__*/_react.default.createElement(_text.Text, {
        tag: "span",
        color: "font1",
        size: "default",
        weight: "bold",
        lineHeight: "normal",
        className: "k-Card__title"
      }, titleTruncate && /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
        lines: 2
      }, widgetTitle), !titleTruncate && widgetTitle)), !loading && /*#__PURE__*/_react.default.createElement(StyledDayCounter, null, /*#__PURE__*/_react.default.createElement(_text.Text, {
        size: "tiny",
        color: "font1",
        weight: "regular",
        lineHeight: "normal"
      }, dayCounter))), loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledTitleLoading, null), /*#__PURE__*/_react.default.createElement(StyledTitleSmallLoading, null)));
    }
  }]);
  return TitleComponent;
}(_react.PureComponent);

TitleComponent.propTypes = {
  title: _propTypes.default.string,
  titleTruncate: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  widgetTitle: _propTypes.default.string,
  dayCounter: _propTypes.default.element,
  titleProps: _propTypes.default.shape()
};
TitleComponent.defaultProps = {
  title: '',
  titleTruncate: true,
  loading: false,
  widgetTitle: '',
  dayCounter: null,
  titleProps: {}
};
var _default = TitleComponent;
exports.default = _default;