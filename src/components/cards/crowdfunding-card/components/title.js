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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _title = require("../../../../components/typography/title");

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__title"
      }, !loading && /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
        tag: "p",
        noMargin: true,
        className: "k-Card__title k-CrowdfundingCard__title__title"
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
    }
  }, {
    key: "renderWidgetTitle",
    value: function renderWidgetTitle() {
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