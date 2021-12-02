"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../../components/atoms/typography/text");

var _title = require("../../../../../components/atoms/typography/title");

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TitleComponent = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(TitleComponent, _PureComponent);

  function TitleComponent() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TitleComponent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        widgetTitle = _this$props.widgetTitle;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title && this.renderTitle(), widgetTitle && this.renderWidgetTitle());
  };

  _proto.renderTitle = function renderTitle() {
    var _this$props2 = this.props,
        loading = _this$props2.loading,
        titleProps = _this$props2.titleProps,
        titleTruncate = _this$props2.titleTruncate,
        title = _this$props2.title;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "k-CrowdfundingCard__title"
    }, !loading && /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
      tag: "p",
      noMargin: true,
      className: "k-CrowdfundingCard__title__title"
    }, titleProps), titleTruncate && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
      lines: 2,
      className: "k-CrowdfundingCard__noWrap k-u-hidden@s-down"
    }, title), /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
      lines: 3,
      className: "k-CrowdfundingCard__noWrap k-u-hidden@m-up"
    }, title)), !titleTruncate && title), loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-CrowdfundingCard__title__loadingElement"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "k-CrowdfundingCard__title__loadingElement"
    })));
  };

  _proto.renderWidgetTitle = function renderWidgetTitle() {
    var _this$props3 = this.props,
        widgetTitle = _this$props3.widgetTitle,
        dayCounter = _this$props3.dayCounter,
        loading = _this$props3.loading,
        titleTruncate = _this$props3.titleTruncate;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "k-CrowdfundingCard__titleWrapper"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "k-CrowdfundingCard__title"
    }, !loading && /*#__PURE__*/_react.default.createElement(_text.Text, {
      tag: "span",
      color: "font1",
      size: "default",
      weight: "bold",
      lineHeight: "normal",
      className: "k-Card__title"
    }, titleTruncate && /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
      lines: 2
    }, widgetTitle), !titleTruncate && widgetTitle)), !loading && /*#__PURE__*/_react.default.createElement("div", {
      className: "k-CrowdfundingCard__title__dayCounter"
    }, /*#__PURE__*/_react.default.createElement(_text.Text, {
      size: "tiny",
      color: "font1",
      weight: "regular",
      lineHeight: "normal"
    }, dayCounter))), loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-CrowdfundingCard__title__loadingElement"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "k-CrowdfundingCard__title__loadingElement"
    })));
  };

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