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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _buttonImage = require("../../../../components/buttons/button-image");

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../../components/typography/text");

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);
var StyledImageContainer = (0, _styledComponents.default)(function (_ref) {
  var loading = _ref.loading,
      imageContainerBackground = _ref.imageContainerBackground,
      others = (0, _objectWithoutProperties2.default)(_ref, ["loading", "imageContainerBackground"]);
  return _react.default.createElement("div", others);
}).withConfig({
  displayName: "image__StyledImageContainer",
  componentId: "sc-166p1i9-0"
})(["overflow:hidden;position:relative;background-color:", ";padding-top:", "%;& > img{width:100%;display:block;position:absolute;top:0;text-align:center;}", ""], function (_ref2) {
  var imageContainerBackground = _ref2.imageContainerBackground;
  return imageContainerBackground;
}, 9 / 16 * 100, function (_ref3) {
  var loading = _ref3.loading;
  return loading && (0, _styledComponents.css)(["overflow:hidden;background-color:", ";"], _colorsConfig.default.line2);
});

var StyledContainerAvatar = _styledComponents.default.div.withConfig({
  displayName: "image__StyledContainerAvatar",
  componentId: "sc-166p1i9-1"
})(["display:inline-flex;align-items:center;position:relative;top:0;margin-top:", ";background-color:", ";"], (0, _typography.pxToRem)(-30), _colorsConfig.default.background1);

var StyledAvatar = (0, _styledComponents.default)(_buttonImage.ButtonImage).withConfig({
  displayName: "image__StyledAvatar",
  componentId: "sc-166p1i9-2"
})(["margin-left:", ";background-color:", ";"], COMPONENT_GUTTER, _colorsConfig.default.line2);

var StyledOwner = _styledComponents.default.div.withConfig({
  displayName: "image__StyledOwner",
  componentId: "sc-166p1i9-3"
})(["margin-left:", ";margin-right:calc(2 * ", ");line-height:1.2;"], COMPONENT_GUTTER, COMPONENT_GUTTER);

var StyledTitle = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "image__StyledTitle",
  componentId: "sc-166p1i9-4"
})(["", ""], function (_ref4) {
  var loading = _ref4.loading;
  return loading && (0, _styledComponents.css)(["background-color:", ";border-bottom:", " solid ", ";width:", ";height:", ";"], _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(14));
});
var StyledDescription = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "image__StyledDescription",
  componentId: "sc-166p1i9-5"
})(["", ""], function (_ref5) {
  var loading = _ref5.loading;
  return loading && (0, _styledComponents.css)(["background-color:", ";border-top:", " solid ", ";width:", ";height:", ";"], _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(14));
});

var Image =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Image, _PureComponent);

  function Image() {
    (0, _classCallCheck2.default)(this, Image);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Image).apply(this, arguments));
  }

  (0, _createClass2.default)(Image, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageContainerBackground = _this$props.imageContainerBackground,
          imageProps = _this$props.imageProps,
          avatarProps = _this$props.avatarProps,
          ownerDescription = _this$props.ownerDescription,
          ownerTitle = _this$props.ownerTitle,
          loading = _this$props.loading;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledImageContainer, {
        className: "k-Card__imageContainer",
        imageContainerBackground: imageContainerBackground,
        loading: loading
      }, !loading && _react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
        alt: imageProps.alt || '',
        className: "k-Card__image"
      }))), _react.default.createElement(StyledContainerAvatar, null, _react.default.createElement("div", {
        className: "k-u-margin-bottom-single k-u-margin-top-single"
      }, _react.default.createElement(StyledAvatar, {
        tag: "span",
        img: !loading && avatarProps,
        withoutPointerEvents: true
      })), _react.default.createElement(StyledOwner, null, _react.default.createElement(StyledTitle, {
        tag: "div",
        size: "micro",
        weight: "regular",
        color: "font1"
      }, !loading && ownerTitle), _react.default.createElement(StyledDescription, {
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
  state: _propTypes.default.string,
  loading: _propTypes.default.bool,
  imageContainerBackground: _propTypes.default.string
};
Image.defaultProps = {
  imageProps: {
    backgroundColor: _colorsConfig.default.line2,
    src: 'https://placehold.it/350x200/caf4fe/caf4fe',
    alt: ''
  },
  avatarProps: {
    src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    alt: ''
  },
  ownerTitle: '',
  ownerDescription: '',
  loading: false,
  imageContainerBackground: '',
  state: ''
};
var _default = Image;
exports.default = _default;