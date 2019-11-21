"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonImageWithTextAndBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var ButtonImageWithTextAndBadge =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ButtonImageWithTextAndBadge, _React$Component);

  function ButtonImageWithTextAndBadge() {
    (0, _classCallCheck2.default)(this, ButtonImageWithTextAndBadge);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ButtonImageWithTextAndBadge).apply(this, arguments));
  }

  (0, _createClass2.default)(ButtonImageWithTextAndBadge, [{
    key: "renderNotificationBadge",
    value: function renderNotificationBadge() {
      return _react.default.createElement("span", {
        className: "k-ButtonWithBadge__badge k-Badge"
      }, this.props.notifications);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isExpanded = _this$props.isExpanded,
          text = _this$props.text,
          title = _this$props.title,
          textClassName = _this$props.textClassName,
          srcImg = _this$props.srcImg,
          widthImg = _this$props.widthImg,
          heightImg = _this$props.heightImg,
          altImg = _this$props.altImg,
          notifications = _this$props.notifications,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "isExpanded", "text", "title", "textClassName", "srcImg", "widthImg", "heightImg", "altImg", "notifications"]);
      var textClass = (0, _classnames.default)('k-ButtonImageWithText__text', 'k-ButtonImageWithText__text--withoutPaddingRight', textClassName);
      var buttonClassName = (0, _classnames.default)('k-ButtonImageWithText', className);
      return _react.default.createElement("button", (0, _extends2.default)({
        className: buttonClassName,
        "aria-haspopup": "true",
        "aria-expanded": isExpanded,
        title: title
      }, rest), _react.default.createElement("span", {
        className: "k-ButtonWithBadge"
      }, _react.default.createElement("span", {
        ref: "buttonImage",
        className: "k-ButtonImage"
      }, _react.default.createElement("img", {
        className: "k-ButtonImage__img",
        src: srcImg,
        width: widthImg,
        height: heightImg,
        alt: altImg
      })), notifications ? this.renderNotificationBadge() : ''), _react.default.createElement("p", {
        className: textClass
      }, text));
    }
  }]);
  return ButtonImageWithTextAndBadge;
}(_react.default.Component);

exports.ButtonImageWithTextAndBadge = ButtonImageWithTextAndBadge;
ButtonImageWithTextAndBadge.propTypes = {
  children: _propTypes.default.string,
  onClick: _propTypes.default.func,
  isExpanded: _propTypes.default.bool,
  text: _propTypes.default.string,
  title: _propTypes.default.string,
  srcImg: _propTypes.default.string,
  widthImg: _propTypes.default.number,
  heightImg: _propTypes.default.number,
  altImg: _propTypes.default.string,
  notifications: _propTypes.default.number
};
ButtonImageWithTextAndBadge.defaultProps = {
  children: 'Toggle button',
  onClick: function onClick() {}
}; // DEPRECATED: do not use default export.

var _default = ButtonImageWithTextAndBadge;
exports.default = _default;