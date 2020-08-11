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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NotificationBadge = function NotificationBadge(_ref) {
  var notifications = _ref.notifications,
      badgeColor = _ref.badgeColor;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "k-ButtonWithBadge__badge k-Badge",
    style: {
      backgroundColor: badgeColor
    }
  }, notifications);
};

var ButtonImageWithTextAndBadge = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ButtonImageWithTextAndBadge, _React$Component);

  var _super = _createSuper(ButtonImageWithTextAndBadge);

  function ButtonImageWithTextAndBadge() {
    (0, _classCallCheck2.default)(this, ButtonImageWithTextAndBadge);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ButtonImageWithTextAndBadge, [{
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
          badgeColor = _this$props.badgeColor,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "isExpanded", "text", "title", "textClassName", "srcImg", "widthImg", "heightImg", "altImg", "notifications", "badgeColor"]);
      var textClass = (0, _classnames.default)('k-ButtonImageWithText__text', 'k-ButtonImageWithText__text--withoutPaddingRight', textClassName);
      var buttonClassName = (0, _classnames.default)('k-ButtonImageWithText', className);
      return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
        className: buttonClassName,
        "aria-haspopup": "true",
        "aria-expanded": isExpanded,
        title: title
      }, rest), /*#__PURE__*/_react.default.createElement("span", {
        className: "k-ButtonWithBadge"
      }, /*#__PURE__*/_react.default.createElement("span", {
        ref: "buttonImage",
        className: "k-ButtonImage"
      }, /*#__PURE__*/_react.default.createElement("img", {
        className: "k-ButtonImage__img",
        src: srcImg,
        width: widthImg,
        height: heightImg,
        alt: altImg
      })), notifications && /*#__PURE__*/_react.default.createElement(NotificationBadge, {
        notifications: notifications,
        badgeColor: badgeColor
      })), /*#__PURE__*/_react.default.createElement("p", {
        className: textClass
      }, text));
    }
  }]);
  return ButtonImageWithTextAndBadge;
}(_react.default.Component);

exports.ButtonImageWithTextAndBadge = ButtonImageWithTextAndBadge;
ButtonImageWithTextAndBadge.propTypes = {
  onClick: _propTypes.default.func,
  isExpanded: _propTypes.default.bool,
  text: _propTypes.default.string,
  title: _propTypes.default.string,
  srcImg: _propTypes.default.string,
  widthImg: _propTypes.default.number,
  heightImg: _propTypes.default.number,
  altImg: _propTypes.default.string,
  notifications: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  badgeColor: _propTypes.default.string
};
ButtonImageWithTextAndBadge.defaultProps = {
  onClick: function onClick() {},
  badgeColor: _colorsConfig.default.primary1
}; // DEPRECATED: do not use default export.

var _default = ButtonImageWithTextAndBadge;
exports.default = _default;