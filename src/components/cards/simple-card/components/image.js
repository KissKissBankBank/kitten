"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _text = require("../../../../components/typography/text");

var _marger = require("../../../../components/layout/marger");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledImage = _styledComponents.default.img.withConfig({
  displayName: "image__StyledImage",
  componentId: "sc-8olw7b-0"
})(["width:100%;display:block;"]);

var playerButtonSize = (0, _typography.pxToRem)(70);

var StyledPlayerButton = _styledComponents.default.div.withConfig({
  displayName: "image__StyledPlayerButton",
  componentId: "sc-8olw7b-1"
})(["width:", ";height:", ";background:", ";position:absolute;top:calc(50% - ", " / 2);left:calc(50% - ", " / 2);display:flex;align-items:center;justify-content:center;z-index:2;"], playerButtonSize, playerButtonSize, _colorsConfig.default.font1, playerButtonSize, playerButtonSize);

var StyledImageContainer = (0, _styledComponents.default)(_marger.Marger).withConfig({
  displayName: "image__StyledImageContainer",
  componentId: "sc-8olw7b-2"
})(["position:relative;transition:opacity ease 600ms,z-index ease 600ms;z-index:1;background-color:", ";", ""], function (_ref) {
  var imageContainerBackground = _ref.imageContainerBackground;
  return imageContainerBackground;
}, function (_ref2) {
  var imageContainerRatio = _ref2.imageContainerRatio;
  return imageContainerRatio && (0, _styledComponents.css)(["overflow:hidden;position:relative;padding-top:calc(100% / calc(", "));& > img{position:absolute;top:0;height:auto;text-align:center;}"], imageContainerRatio);
});

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
          imageProps = _this$props.imageProps,
          withPlayerButtonOnImage = _this$props.withPlayerButtonOnImage,
          arrowColor = _this$props.arrowColor,
          ariaLabel = _this$props.ariaLabel,
          imageContainerBackground = _this$props.imageContainerBackground,
          imageContainerRatio = _this$props.imageContainerRatio;

      var PlayerButtonOnImage = function PlayerButtonOnImage(props) {
        return /*#__PURE__*/_react.default.createElement(StyledPlayerButton, null, /*#__PURE__*/_react.default.createElement(_text.Text, {
          size: "default",
          weight: "regular",
          color: props.arrowColor,
          "aria-label": props.ariaLabel
        }, "\u25BA"));
      };

      return /*#__PURE__*/_react.default.createElement(StyledImageContainer, {
        bottom: "2",
        className: "k-Card__imageContainer",
        imageContainerBackground: imageContainerBackground,
        imageContainerRatio: imageContainerRatio
      }, withPlayerButtonOnImage && /*#__PURE__*/_react.default.createElement(PlayerButtonOnImage, {
        arrowColor: arrowColor,
        ariaLabel: ariaLabel
      }), /*#__PURE__*/_react.default.createElement(StyledImage, (0, _extends2.default)({}, imageProps, {
        alt: imageProps.alt || '',
        className: "k-Card__image"
      })));
    }
  }]);
  return Image;
}(_react.PureComponent);

exports.Image = Image;
Image.propTypes = {
  imageProps: _propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired
  }),
  withPlayerButtonOnImage: _propTypes.default.bool,
  ariaLabel: _propTypes.default.string,
  arrowColor: _propTypes.default.string,
  href: _propTypes.default.string,
  imageContainerBackground: _propTypes.default.string,
  imageContainerRatio: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
Image.defaultProps = {
  imageProps: {
    src: '',
    alt: ''
  },
  withPlayerButtonOnImage: false,
  arrowColor: 'background1',
  href: '#',
  imageContainerBackground: _colorsConfig.default.line1
};