"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedPlayer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _responsiveIframeContainer = require("../../../components/layout/responsive-iframe-container");

var _parser = require("../../../helpers/utils/parser");

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var actionKeys = ['Enter', ' '];
var playerButtonSize = 90;
var playerButtonXSSize = 70;

var StyledEmbedPlayer = _styledComponents.default.div.withConfig({
  displayName: "embed-player__StyledEmbedPlayer",
  componentId: "sc-14blbse-0"
})(["position:relative;display:block;width:100%;background-color:", ";.k-EmbedPlayer__thumbnail{display:block;width:100%;}.k-EmbedPlayer__embededPlayer{position:absolute;top:0;width:100%;height:100%;}&:hover .k-EmbedPlayer__button,&:focus .k-EmbedPlayer__button{background-color:", ";.k-EmbedPlayer__buttonPicto{fill:", ";}}&:active .k-EmbedPlayer__button{background-color:", ";.k-EmbedPlayer__buttonPicto{fill:", ";}}.k-EmbedPlayer__button{width:", ";height:", ";top:calc(50% - ", ");left:calc(50% - ", ");background:", ";position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;@media (min-width:", "){width:", ";height:", ";top:calc(50% - ", ");left:calc(50% - ", ");}}.k-EmbedPlayer__buttonPicto{width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}}.k-EmbedPlayer__playerPreview{position:relative;transition:opacity ease 600ms;z-index:1;opacity:1;}&.k-EmbedPlayer--videoIsPlaying .k-EmbedPlayer__playerPreview{opacity:0;z-index:0;}&.k-EmbedPlayer--cursorPointer .k-EmbedPlayer__playerPreview{cursor:pointer;}"], _colorsConfig.default.font1, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.primary3, _colorsConfig.default.background1, (0, _typography.pxToRem)(playerButtonXSSize), (0, _typography.pxToRem)(playerButtonXSSize), (0, _typography.pxToRem)(playerButtonXSSize / 2), (0, _typography.pxToRem)(playerButtonXSSize / 2), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(playerButtonSize), (0, _typography.pxToRem)(playerButtonSize), (0, _typography.pxToRem)(playerButtonSize / 2), (0, _typography.pxToRem)(playerButtonSize / 2), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10));

var EmbedPlayer = function EmbedPlayer(_ref) {
  var ratio = _ref.ratio,
      _ref$previewProps = _ref.previewProps,
      thumbnail = _ref$previewProps.thumbnail,
      badgeComponent = _ref$previewProps.badgeComponent,
      iframeHtml = _ref.iframeHtml,
      playButtonLabel = _ref.playButtonLabel,
      _ref$style = _ref.style,
      mainStyle = _ref$style === void 0 ? void 0 : _ref$style,
      className = _ref.className,
      others = (0, _objectWithoutProperties2.default)(_ref, ["ratio", "previewProps", "iframeHtml", "playButtonLabel", "style", "className"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isPlayerVisible = _useState2[0],
      setPlayerVisibility = _useState2[1];

  var previewVideo = (0, _react.useRef)(null);
  var validRatio = parseInt(ratio, 10);
  var hasIframeHtml = !!iframeHtml;

  var handleClick = function handleClick() {
    setPlayerVisibility(true);
    previewVideo.current.blur();
  };

  var handleKeyPress = function handleKeyPress(event) {
    event.preventDefault();
    if (actionKeys.includes(event.key)) handleClick();
  };

  var handleFocus = function handleFocus(event) {
    event.preventDefault();
    previewVideo.current.focus();
    handleKeyPress(event);
  };

  var componentClassNames = (0, _classnames.default)('k-EmbedPlayer', className, {
    'k-EmbedPlayer--videoIsPlaying': hasIframeHtml && isPlayerVisible,
    'k-EmbedPlayer--cursorPointer': hasIframeHtml
  });
  return /*#__PURE__*/_react.default.createElement(StyledEmbedPlayer, (0, _extends2.default)({
    ref: previewVideo
  }, others, {
    style: (0, _extends2.default)({}, mainStyle),
    onClick: hasIframeHtml ? handleClick : null,
    onKeyPress: hasIframeHtml ? handleKeyPress : null,
    onFocus: hasIframeHtml ? handleFocus : null,
    role: hasIframeHtml ? 'button' : null,
    tabIndex: hasIframeHtml ? 0 : null,
    "aria-label": hasIframeHtml ? playButtonLabel : null,
    className: componentClassNames
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-EmbedPlayer__playerPreview"
  }, hasIframeHtml && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-EmbedPlayer__button"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": true,
    className: "k-EmbedPlayer__buttonPicto",
    viewBox: "0 0 10 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 0l10 5-10 5z"
  }))), /*#__PURE__*/_react.default.createElement(_responsiveIframeContainer.ResponsiveIframeContainer, {
    ratio: validRatio
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, thumbnail, {
    className: "k-EmbedPlayer__thumbnail ".concat(thumbnail.className || '')
  }))), badgeComponent), hasIframeHtml && isPlayerVisible && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-EmbedPlayer__embededPlayer"
  }, /*#__PURE__*/_react.default.createElement(_responsiveIframeContainer.ResponsiveIframeContainer, {
    ratio: validRatio
  }, (0, _parser.parseHtml)(iframeHtml))));
};

exports.EmbedPlayer = EmbedPlayer;
EmbedPlayer.propTypes = {
  previewProps: _propTypes.default.shape({
    thumbnail: _propTypes.default.shape({
      src: _propTypes.default.string.isRequired,
      alt: _propTypes.default.string.isRequired,
      style: _propTypes.default.string
    }).isRequired
  }).isRequired,
  badgeComponent: _propTypes.default.node,
  playButtonLabel: _propTypes.default.string.isRequired,
  ratio: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  iframeHtml: _propTypes.default.string
};
EmbedPlayer.defaultProps = {
  previewProps: {
    thumbnail: {
      style: {}
    }
  },
  badgeComponent: null,
  iframeHtml: null
};