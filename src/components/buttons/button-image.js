"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ButtonImage = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ButtonImage, _Component);

  var _super = _createSuper(ButtonImage);

  function ButtonImage() {
    (0, _classCallCheck2.default)(this, ButtonImage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ButtonImage, [{
    key: "renderImage",
    value: function renderImage(props) {
      var className = props.className,
          alt = props.alt,
          others = (0, _objectWithoutProperties2.default)(props, ["className", "alt"]);
      var imgClassName = (0, _classnames.default)('k-ButtonImage__img', className);
      return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
        className: imgClassName,
        alt: alt || ''
      }, others));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tag = _this$props.tag,
          className = _this$props.className,
          tiny = _this$props.tiny,
          big = _this$props.big,
          huge = _this$props.huge,
          withoutPointerEvents = _this$props.withoutPointerEvents,
          withBorder = _this$props.withBorder,
          img = _this$props.img,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["tag", "className", "tiny", "big", "huge", "withoutPointerEvents", "withBorder", "img"]);
      var buttonClassName = (0, _classnames.default)('k-ButtonImage', {
        'k-ButtonImage--tiny': tiny,
        'k-ButtonImage--big': big,
        'k-ButtonImage--huge': huge,
        'k-ButtonImage--withoutPointerEvents': withoutPointerEvents,
        'k-ButtonImage--withBorder': withBorder
      }, className); // Adds keyboard accessibility to `<a>`

      var tabindex = tag == 'a' && !this.props.href ? 0 : null;
      var Tag = tag;
      return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
        className: buttonClassName,
        tabIndex: tabindex
      }, others), this.renderImage(img));
    }
  }]);
  return ButtonImage;
}(_react.Component);

exports.ButtonImage = ButtonImage;
ButtonImage.defaultProps = {
  tag: 'button',
  className: null,
  tiny: false,
  big: false,
  huge: false,
  withoutPointerEvents: false,
  withBorder: false,
  img: {
    className: null
  }
};