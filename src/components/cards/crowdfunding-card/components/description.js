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

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);
var StyledTruncate = (0, _styledComponents.default)(_reactTruncate.default).withConfig({
  displayName: "description__StyledTruncate",
  componentId: "sc-1kqqtcu-0"
})(["white-space:nowrap;"]);

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "description__StyledContainer",
  componentId: "sc-1kqqtcu-1"
})(["margin-bottom:", ";", ""], (0, _typography.pxToRem)(20), function (_ref) {
  var titlesMinHeight = _ref.titlesMinHeight;
  return titlesMinHeight && (0, _styledComponents.css)(["min-height:", ";"], (0, _typography.pxToRem)(75));
});

var StyledTitle = _styledComponents.default.div.withConfig({
  displayName: "description__StyledTitle",
  componentId: "sc-1kqqtcu-2"
})(["padding:0 ", ";line-height:1;margin-bottom:", ";"], COMPONENT_GUTTER, (0, _typography.pxToRem)(10));

var StyledTitleLoading = _styledComponents.default.span.withConfig({
  displayName: "description__StyledTitleLoading",
  componentId: "sc-1kqqtcu-3"
})(["display:block;background-color:", ";border-bottom:", " solid ", ";height:", ";"], _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(24));

var StyledTitleSmallLoading = (0, _styledComponents.default)(StyledTitleLoading).withConfig({
  displayName: "description__StyledTitleSmallLoading",
  componentId: "sc-1kqqtcu-4"
})(["width:70%;border-top:", " solid ", ";border-bottom:0;"], (0, _typography.pxToRem)(1), _colorsConfig.default.background1);

var StyledContainerSubtitle = _styledComponents.default.div.withConfig({
  displayName: "description__StyledContainerSubtitle",
  componentId: "sc-1kqqtcu-5"
})(["display:flex;align-items:center;line-height:1;padding:0 ", ";margin-top:", ";"], COMPONENT_GUTTER, (0, _typography.pxToRem)(10));

var StyledHorizontalStroke = (0, _styledComponents.default)(function (_ref2) {
  var loading = _ref2.loading,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["loading"]);
  return _react.default.createElement(_horizontalStroke.HorizontalStroke, others);
}).withConfig({
  displayName: "description__StyledHorizontalStroke",
  componentId: "sc-1kqqtcu-6"
})(["flex-shrink:0;margin:", " ", " ", " 0;", ""], (0, _typography.pxToRem)(5), COMPONENT_GUTTER, (0, _typography.pxToRem)(5), function (_ref3) {
  var loading = _ref3.loading;
  return loading && (0, _styledComponents.css)(["background-color:", ";"], _colorsConfig.default.line2);
});
var StyledSubtitle = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "description__StyledSubtitle",
  componentId: "sc-1kqqtcu-7"
})(["line-height:1;flex:1;", ""], function (_ref4) {
  var subTitleTruncate = _ref4.subTitleTruncate;
  return subTitleTruncate && (0, _styledComponents.css)(["white-space:nowrap;overflow:hidden;"]);
});

var StyledSubtitleLoading = _styledComponents.default.span.withConfig({
  displayName: "description__StyledSubtitleLoading",
  componentId: "sc-1kqqtcu-8"
})(["display:block;background-color:", ";width:", ";height:", ";"], _colorsConfig.default.line2, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(12));

var Description =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Description, _PureComponent);

  function Description() {
    (0, _classCallCheck2.default)(this, Description);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Description).apply(this, arguments));
  }

  (0, _createClass2.default)(Description, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loading = _this$props.loading,
          title = _this$props.title,
          subTitle = _this$props.subTitle,
          titleTruncate = _this$props.titleTruncate,
          subTitleTruncate = _this$props.subTitleTruncate,
          titlesMinHeight = _this$props.titlesMinHeight,
          titleProps = _this$props.titleProps;
      return _react.default.createElement(StyledContainer, {
        titlesMinHeight: titlesMinHeight
      }, this.renderTitle(), this.renderSubtitle());
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
        tag: "p"
      }, titleProps, {
        modifier: "senary",
        margin: false,
        className: "k-Card__title"
      }), titleTruncate && _react.default.createElement(StyledTruncate, {
        lines: 2
      }, title), !titleTruncate && title), loading && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledTitleLoading, null), _react.default.createElement(StyledTitleSmallLoading, null)));
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var _this$props3 = this.props,
          subTitle = _this$props3.subTitle,
          loading = _this$props3.loading,
          subTitleTruncate = _this$props3.subTitleTruncate;
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
  }]);
  return Description;
}(_react.PureComponent);

Description.propTypes = {
  title: _propTypes.default.string,
  subTitle: _propTypes.default.string,
  titlesMinHeight: _propTypes.default.bool,
  titleTruncate: _propTypes.default.bool,
  subTitleTruncate: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  titleProps: _propTypes.default.shape()
};
Description.defaultProps = {
  title: '',
  subTitle: '',
  titlesMinHeight: true,
  titleTruncate: true,
  subTitleTruncate: true,
  loading: false,
  titleProps: {}
};
var _default = Description;
exports.default = _default;