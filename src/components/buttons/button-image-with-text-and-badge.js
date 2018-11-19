"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonImageWithTextAndBadge = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ButtonImageWithTextAndBadge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonImageWithTextAndBadge, _React$Component);

  function ButtonImageWithTextAndBadge() {
    _classCallCheck(this, ButtonImageWithTextAndBadge);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonImageWithTextAndBadge).apply(this, arguments));
  }

  _createClass(ButtonImageWithTextAndBadge, [{
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
          rest = _objectWithoutProperties(_this$props, ["className", "isExpanded", "text", "title", "textClassName", "srcImg", "widthImg", "heightImg", "altImg", "notifications"]);

      var textClass = (0, _classnames.default)('k-ButtonImageWithText__text', 'k-ButtonImageWithText__text--withoutPaddingRight', textClassName);
      var buttonClassName = (0, _classnames.default)('k-ButtonImageWithText', className);
      return _react.default.createElement("button", _extends({
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
  onClick: function onClick() {} // DEPRECATED: do not use default export.

};
var _default = ButtonImageWithTextAndBadge;
exports.default = _default;