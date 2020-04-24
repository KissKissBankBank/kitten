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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _horizontalStroke = require("../../../../components/layout/horizontal-stroke");

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Subtitle = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Subtitle, _PureComponent);

  var _super = _createSuper(Subtitle);

  function Subtitle() {
    (0, _classCallCheck2.default)(this, Subtitle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Subtitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          subTitle = _this$props.subTitle,
          widgetSubtitle = _this$props.widgetSubtitle;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, subTitle && this.renderSubtitle(), widgetSubtitle && this.renderWidgetSubtitle());
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          subTitle = _this$props2.subTitle,
          subTitleTruncate = _this$props2.subTitleTruncate;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__subtitle__container"
      }, /*#__PURE__*/_react.default.createElement(_horizontalStroke.HorizontalStroke, {
        className: "k-CrowdfundingCard__subtitle__horizontalStroke",
        size: "tiny",
        loading: loading
      }), subTitle && !loading && /*#__PURE__*/_react.default.createElement(_text.Text, {
        className: (0, _classnames.default)('k-CrowdfundingCard__subtitle__subtitleText', {
          'k-CrowdfundingCard__subtitle__subtitleText--truncated': subTitleTruncate
        }),
        size: "micro",
        weight: "regular",
        tag: "p",
        color: "font1"
      }, subTitleTruncate && /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
        className: "k-CrowdfundingCard__noWrap"
      }, subTitle), !subTitleTruncate && subTitle), loading && /*#__PURE__*/_react.default.createElement("span", {
        className: "k-CrowdfundingCard__subtitle__loadingElement"
      }));
    }
  }, {
    key: "renderWidgetSubtitle",
    value: function renderWidgetSubtitle() {
      var _this$props3 = this.props,
          widgetSubtitle = _this$props3.widgetSubtitle,
          subTitleTruncate = _this$props3.subTitleTruncate,
          loading = _this$props3.loading;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, widgetSubtitle && !loading && /*#__PURE__*/_react.default.createElement(_text.Text, {
        className: "k-u-margin-top-noneHalf k-u-margin-bottom-double",
        tag: "p",
        size: "micro",
        color: "font1",
        lineHeight: "normal",
        weight: "light"
      }, subTitleTruncate && /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
        lines: 3
      }, widgetSubtitle), !subTitleTruncate && widgetSubtitle), loading && /*#__PURE__*/_react.default.createElement("span", {
        className: "k-CrowdfundingCard__subtitle__loadingElement"
      }));
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