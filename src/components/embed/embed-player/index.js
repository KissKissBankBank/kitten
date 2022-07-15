"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EmbedPlayer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _responsiveIframeContainer = require("../responsive-iframe-container");

var _parser = require("../../../helpers/utils/parser");

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _playerIconNext = require("../../../components/graphics/icons-next/player-icon-next");

var _excluded = ["ratio", "previewProps", "iframeHtml", "playButtonLabel", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledEmbedPlayer = _styledComponents.default.div.withConfig({
  displayName: "embed-player__StyledEmbedPlayer",
  componentId: "sc-15ix1ty-0"
})(["position:relative;display:block;width:100%;background-color:", ";.k-EmbedPlayer__thumbnail{display:block;width:100%;object-fit:cover;object-position:center;}.k-EmbedPlayer__embededPlayer{position:absolute;top:0;width:100%;height:100%;}&:focus-visible{outline:auto;}.k-EmbedPlayer__button{cursor:pointer;top:0;left:0;right:0;bottom:0;width:100%;height:100%;position:absolute;transition:opacity var(--transition),z-index var(--transition);transition-delay:0s,var(--transition-timing);opacity:1;z-index:1;display:flex;align-items:center;justify-content:center;}.k-EmbedPlayer__playerPreview{position:relative;transition:opacity var(--transition),z-index var(--transition);transition-delay:0s,var(--transition-timing);z-index:1;opacity:1;}&.k-EmbedPlayer--videoIsPlaying .k-EmbedPlayer__button,&.k-EmbedPlayer--videoIsPlaying .k-EmbedPlayer__playerPreview{opacity:0;z-index:0;}"], _colorsConfig.default.font1);

var EmbedPlayer = function EmbedPlayer(_ref) {
  var ratio = _ref.ratio,
      _ref$previewProps = _ref.previewProps,
      thumbnail = _ref$previewProps.thumbnail,
      badgeComponent = _ref$previewProps.badgeComponent,
      iframeHtml = _ref.iframeHtml,
      playButtonLabel = _ref.playButtonLabel,
      className = _ref.className,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      isPlayerVisible = _useState[0],
      setPlayerVisibility = _useState[1];

  var previewVideo = (0, _react.useRef)(null);
  var validRatio = parseInt(ratio, 10);
  var hasIframeHtml = !!iframeHtml;

  var handleClick = function handleClick() {
    setPlayerVisibility(true);
    previewVideo.current.blur();
  };

  return /*#__PURE__*/_react.default.createElement(StyledEmbedPlayer, (0, _extends2.default)({
    ref: previewVideo
  }, others, {
    className: (0, _classnames.default)('k-EmbedPlayer', className, {
      'k-EmbedPlayer--videoIsPlaying': hasIframeHtml && isPlayerVisible,
      'k-EmbedPlayer--cursorPointer': hasIframeHtml
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-EmbedPlayer__playerPreview"
  }, hasIframeHtml && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "k-u-reset-button k-EmbedPlayer__button",
    onClick: handleClick,
    "aria-label": playButtonLabel
  }, /*#__PURE__*/_react.default.createElement(_playerIconNext.PlayerIconNext, null)), /*#__PURE__*/_react.default.createElement(_responsiveIframeContainer.ResponsiveIframeContainer, {
    ratio: validRatio
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, thumbnail, {
    className: "k-EmbedPlayer__thumbnail " + (thumbnail.className || '')
  }))), badgeComponent), hasIframeHtml && isPlayerVisible && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-EmbedPlayer__embededPlayer"
  }, /*#__PURE__*/_react.default.createElement(_responsiveIframeContainer.ResponsiveIframeContainer, {
    ratio: validRatio
  }, (0, _parser.parseHtml)(iframeHtml, {
    sanitize: false
  }))));
};

exports.EmbedPlayer = EmbedPlayer;
EmbedPlayer.propTypes = {
  previewProps: _propTypes.default.shape({
    thumbnail: _propTypes.default.shape({
      src: _propTypes.default.string.isRequired,
      alt: _propTypes.default.string.isRequired
    }).isRequired
  }).isRequired,
  badgeComponent: _propTypes.default.node,
  playButtonLabel: _propTypes.default.string.isRequired,
  ratio: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  iframeHtml: _propTypes.default.string
};
EmbedPlayer.defaultProps = {
  previewProps: {
    thumbnail: {}
  },
  badgeComponent: null,
  iframeHtml: null
};