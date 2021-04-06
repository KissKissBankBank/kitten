"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../components/typography/text");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var Image = function Image(_ref) {
  var imageProps = _ref.imageProps,
      withPlayerButtonOnImage = _ref.withPlayerButtonOnImage,
      arrowColor = _ref.arrowColor,
      ariaLabel = _ref.ariaLabel,
      imageContainerBackground = _ref.imageContainerBackground,
      imageContainerRatio = _ref.imageContainerRatio,
      className = _ref.className,
      playerButtonSize = _ref.playerButtonSize,
      style = _ref.style;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-SimpleCard__imageContainer', className, {
      'k-SimpleCard__imageContainer--ratio': imageContainerRatio
    }),
    style: (0, _extends2.default)({}, style, {
      '--SimpleCard-image-container-background': imageContainerBackground,
      '--SimpleCard-image-container-ratio': imageContainerRatio
    })
  }, withPlayerButtonOnImage && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SimpleCard__playerButton",
    style: {
      '--SimpleCard-player-button-size': (0, _typography.pxToRem)(playerButtonSize)
    }
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "default",
    weight: "regular",
    color: arrowColor,
    "aria-label": ariaLabel
  }, "\u25BA")), /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
    alt: imageProps.alt || '',
    className: (0, _classnames.default)('k-SimpleCard__image', imageProps.className)
  })));
};

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
  playerButtonSize: _propTypes.default.number,
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
  imageContainerBackground: _colorsConfig.default.line1,
  playerButtonSize: 70
};