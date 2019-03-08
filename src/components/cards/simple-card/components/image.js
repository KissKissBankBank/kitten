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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _text = require("../../../../components/typography/text");

var _marger = require("../../../../components/layout/marger");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var ImageStyle = _styledComponents.default.img.withConfig({
  displayName: "image__ImageStyle",
  componentId: "sc-8olw7b-0"
})(["width:100%;display:block;"]);

var playerButtonSize = (0, _typography.pxToRem)(70);

var PlayerButtonStyle = _styledComponents.default.div.withConfig({
  displayName: "image__PlayerButtonStyle",
  componentId: "sc-8olw7b-1"
})(["width:", ";height:", ";background:", ";position:absolute;top:calc(50% - ", " / 2);left:calc(50% - ", " / 2);display:flex;align-items:center;justify-content:center;z-index:2;"], playerButtonSize, playerButtonSize, _colorsConfig.default.font1, playerButtonSize, playerButtonSize);

var PlayerStyle = _styledComponents.default.div.withConfig({
  displayName: "image__PlayerStyle",
  componentId: "sc-8olw7b-2"
})(["position:relative;transition:opacity ease 600ms,z-index ease 600ms;z-index:1;"]);

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
          imageProps = _this$props.imageProps,
          withPlayerButtonOnImage = _this$props.withPlayerButtonOnImage,
          arrowColor = _this$props.arrowColor,
          ariaLabel = _this$props.ariaLabel;

      var PlayerButtonOnImage = function PlayerButtonOnImage(props) {
        return _react.default.createElement(PlayerButtonStyle, null, _react.default.createElement(_text.Text, {
          size: "default",
          weight: "regular",
          color: props.arrowColor,
          "aria-label": props.ariaLabel
        }, "\u25BA"));
      };

      return _react.default.createElement(_marger.Marger, {
        bottom: "2",
        className: "k-Card__imageContainer"
      }, _react.default.createElement(PlayerStyle, null, withPlayerButtonOnImage && _react.default.createElement(PlayerButtonOnImage, {
        arrowColor: arrowColor,
        ariaLabel: ariaLabel
      }), _react.default.createElement(ImageStyle, (0, _extends2.default)({}, imageProps, {
        alt: imageProps.alt || '',
        className: "k-Card__image"
      }))));
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
  href: _propTypes.default.string
};
Image.defaultProps = {
  imageProps: {
    src: 'https://placehold.it/200x200/caf4fe/caf4fe',
    alt: ''
  },
  withPlayerButtonOnImage: false,
  ariaLabel: null,
  arrowColor: 'background1',
  href: '#'
};