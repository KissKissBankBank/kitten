"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageWithCaption = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ImageWithCaption = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ImageWithCaption, _Component);

  var _super = _createSuper(ImageWithCaption);

  function ImageWithCaption() {
    (0, _classCallCheck2.default)(this, ImageWithCaption);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ImageWithCaption, [{
    key: "renderCaption",
    value: function renderCaption() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          captionProps = _this$props.captionProps;
      var figcaptionClassName = (0, _classnames.default)('k-ImageWithCaption__caption', className);
      return /*#__PURE__*/_react.default.createElement("figcaption", (0, _extends2.default)({
        className: figcaptionClassName
      }, captionProps), children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          imageSrc = _this$props2.imageSrc,
          imageAlt = _this$props2.imageAlt,
          imageWidth = _this$props2.imageWidth,
          imageHeight = _this$props2.imageHeight,
          captionProps = _this$props2.captionProps,
          others = (0, _objectWithoutProperties2.default)(_this$props2, ["imageSrc", "imageAlt", "imageWidth", "imageHeight", "captionProps"]);
      return /*#__PURE__*/_react.default.createElement("figure", (0, _extends2.default)({
        className: "k-ImageWithCaption"
      }, others), /*#__PURE__*/_react.default.createElement("img", {
        src: imageSrc,
        alt: imageAlt,
        width: imageWidth,
        height: imageHeight,
        className: "k-ImageWithCaption__img"
      }), this.renderCaption());
    }
  }]);
  return ImageWithCaption;
}(_react.Component);

exports.ImageWithCaption = ImageWithCaption;
ImageWithCaption.defaultProps = {
  children: 'Lorem ipsum dolor',
  imageSrc: 'https://placehold.it/300x400/caf4fe/caf4fe',
  imageAlt: '',
  imageWidth: null,
  imageHeight: null,
  captionProps: null
};