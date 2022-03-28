"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../typography/text");

var _horizontalStroke = require("../../../../typography/horizontal-stroke");

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Subtitle = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(Subtitle, _PureComponent);

  function Subtitle() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Subtitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        subTitle = _this$props.subTitle,
        widgetSubtitle = _this$props.widgetSubtitle;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, subTitle && this.renderSubtitle(), widgetSubtitle && this.renderWidgetSubtitle());
  };

  _proto.renderSubtitle = function renderSubtitle() {
    var _this$props2 = this.props,
        loading = _this$props2.loading,
        subTitle = _this$props2.subTitle,
        subTitleTruncate = _this$props2.subTitleTruncate,
        style = _this$props2.style;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "k-CrowdfundingCard__subtitle__container"
    }, /*#__PURE__*/_react.default.createElement(_horizontalStroke.HorizontalStroke, {
      className: "k-CrowdfundingCard__subtitle__horizontalStroke",
      size: "micro"
    }), subTitle && !loading && /*#__PURE__*/_react.default.createElement(_text.Text, {
      className: (0, _classnames.default)('k-CrowdfundingCard__subtitle__subtitleText', 'k-u-margin-none', {
        'k-u-clamp': subTitleTruncate
      }),
      size: "micro",
      weight: "regular",
      tag: "p",
      color: "font1",
      style: (0, _extends2.default)({
        '--line-clamp': 1
      }, style)
    }, subTitle), loading && /*#__PURE__*/_react.default.createElement("span", {
      className: "k-CrowdfundingCard__subtitle__loadingElement"
    }));
  };

  _proto.renderWidgetSubtitle = function renderWidgetSubtitle() {
    var _this$props3 = this.props,
        widgetSubtitle = _this$props3.widgetSubtitle,
        subTitleTruncate = _this$props3.subTitleTruncate,
        loading = _this$props3.loading,
        style = _this$props3.style;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, widgetSubtitle && !loading && /*#__PURE__*/_react.default.createElement(_text.Text, {
      className: (0, _classnames.default)('k-u-margin-top-noneHalf', 'k-u-margin-bottom-double', {
        'k-u-clamp': subTitleTruncate
      }),
      tag: "p",
      size: "micro",
      color: "font1",
      lineHeight: "normal",
      weight: "light",
      style: (0, _extends2.default)({
        '--line-clamp': 1
      }, style)
    }, widgetSubtitle), loading && /*#__PURE__*/_react.default.createElement("span", {
      className: "k-CrowdfundingCard__subtitle__loadingElement"
    }));
  };

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