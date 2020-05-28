"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _buttonImage = require("../../../../components/buttons/button-image");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Image = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Image, _PureComponent);

  var _super = _createSuper(Image);

  function Image() {
    (0, _classCallCheck2.default)(this, Image);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Image, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageContainerBackground = _this$props.imageContainerBackground,
          _this$props$imageProp = _this$props.imageProps,
          backgroundColor = _this$props$imageProp.backgroundColor,
          alt = _this$props$imageProp.alt,
          otherImageProps = (0, _objectWithoutProperties2.default)(_this$props$imageProp, ["backgroundColor", "alt"]),
          avatarProps = _this$props.avatarProps,
          ownerDescription = _this$props.ownerDescription,
          ownerTitle = _this$props.ownerTitle,
          loading = _this$props.loading;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__image"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__image__imageContainer",
        style: {
          backgroundColor: imageContainerBackground
        }
      }, !loading && /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, otherImageProps, {
        alt: alt || '',
        className: "k-Card__image",
        style: {
          backgroundColor: backgroundColor
        }
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__image__ownerContainer"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-u-margin-top-single"
      }, /*#__PURE__*/_react.default.createElement(_buttonImage.ButtonImage, {
        className: "k-CrowdfundingCard__image__avatar",
        tag: "span",
        img: !loading ? avatarProps : null,
        withoutPointerEvents: true
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__image__owner k-u-margin-top-single"
      }, /*#__PURE__*/_react.default.createElement(_text.Text, {
        className: "k-CrowdfundingCard__image__title",
        tag: "div",
        size: "micro",
        weight: "regular",
        color: "font1"
      }, !loading && ownerTitle), /*#__PURE__*/_react.default.createElement(_text.Text, {
        className: "k-CrowdfundingCard__image__description",
        tag: "div",
        size: "micro",
        weight: "light",
        color: "font1"
      }, !loading && ownerDescription))));
    }
  }]);
  return Image;
}(_react.PureComponent);

Image.propTypes = {
  imageProps: _propTypes.default.shape({
    backgroundColor: _propTypes.default.string,
    src: _propTypes.default.string,
    alt: _propTypes.default.string
  }),
  avatarProps: _propTypes.default.shape({
    src: _propTypes.default.string,
    alt: _propTypes.default.string
  }),
  ownerTitle: _propTypes.default.string,
  ownerDescription: _propTypes.default.string,
  loading: _propTypes.default.bool,
  imageContainerBackground: _propTypes.default.string
};
Image.defaultProps = {
  imageProps: {
    backgroundColor: _colorsConfig.default.line2,
    src: 'https://placehold.it/160x100/caf4fe/caf4fe',
    alt: ''
  },
  avatarProps: {
    src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    alt: ''
  },
  ownerTitle: '',
  ownerDescription: '',
  loading: false,
  imageContainerBackground: ''
};
var _default = Image;
exports.default = _default;