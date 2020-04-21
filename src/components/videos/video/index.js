"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _reactElements = require("../../../helpers/react/react-elements");

var _screenConfig = require("../../../constants/screen-config");

var _classnames = _interopRequireDefault(require("classnames"));

var actionKeys = ['Enter', ' '];
var playerButtonSize = 90;
var playerButtonXSSize = 70;

var StyledVideo = _styledComponents.default.div.withConfig({
  displayName: "video__StyledVideo",
  componentId: "lqao0j-0"
})(["position:relative;width:100%;height:100%;overflow:hidden;&.k-Video--hasPointerCursor{cursor:pointer;}.k-Video__buttonContainer{top:0;right:0;bottom:0;left:0;position:absolute;transition:opacity ease 600ms,z-index ease 600ms;transition-delay:0s,0s;opacity:1;z-index:1;transition-delay:0s,600ms;}&.k-Video--videoIsPlaying .k-Video__buttonContainer{opacity:0;z-index:0;}.k-Video__button{position:relative;width:", ";height:", ";top:calc(50% - ", " / 2);left:calc(50% - ", " / 2);background:", ";display:flex;align-items:center;justify-content:center;@media (min-width:", "){width:", ";height:", ";top:calc(50% - ", ");left:calc(50% - ", ");}}.k-Video__buttonPicto{width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}}.k-Video__videoElement{position:relative;width:100%;height:100%;}&.k-Video--objectFitCover .k-Video__videoElement{object-position:50% 50%;object-fit:cover;}"], playerButtonXSSize, playerButtonXSSize, playerButtonXSSize, playerButtonXSSize, _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(playerButtonSize), (0, _typography.pxToRem)(playerButtonSize), (0, _typography.pxToRem)(playerButtonSize / 2), (0, _typography.pxToRem)(playerButtonSize / 2), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10));

var Video = function Video(_ref) {
  var className = _ref.className,
      children = _ref.children,
      ariaLabel = _ref.ariaLabel,
      autoPlay = _ref.autoPlay,
      poster = _ref.poster,
      src = _ref.src,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "ariaLabel", "autoPlay", "poster", "src"]);
  var videoElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isPlayerVisible = _useState2[0],
      setPlayerVisibility = _useState2[1];

  var loader = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: Video.Loader
  });
  var childrenWithoutLoader = (0, _reactElements.getReactElementsWithoutType)({
    children: children,
    type: Video.Loader
  });
  var isVideoPlaying = !autoPlay && isPlayerVisible;
  var controls = isVideoPlaying && isPlayerVisible;
  (0, _react.useEffect)(function () {
    if (!videoElement.current || !videoElement.current.src) return;
    if (videoElement.current.src === src) return;
    videoElement.current.src = src;
  }, []);

  var handlePlayClick = function handlePlayClick() {
    if (isVideoPlaying) {
      videoElement.current.pause();
    } else {
      videoElement.current.play();
    }

    setPlayerVisibility(!isPlayerVisible);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (actionKeys.includes(event.key)) {
      event.preventDefault();
      handlePlayClick();
    }
  };

  var componentClassNames = (0, _classnames.default)('k-Video', className, {
    'k-Video--hasPointerCursor': !controls || !autoPlay,
    'k-Video--objectFitCover': !controls,
    'k-Video--videoIsPlaying': isVideoPlaying
  });
  return /*#__PURE__*/_react.default.createElement(StyledVideo, {
    onClick: handlePlayClick,
    "aria-label": !autoPlay ? ariaLabel : null,
    onKeyDown: !autoPlay ? handleKeyDown : null,
    role: !autoPlay ? 'button' : null,
    tabIndex: !autoPlay ? 0 : null,
    className: componentClassNames
  }, loader, !autoPlay && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Video__buttonContainer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Video__button"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": true,
    className: "k-Video__buttonPicto",
    viewBox: "0 0 10 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 0l10 5-10 5z"
  })))), /*#__PURE__*/_react.default.createElement("video", (0, _extends2.default)({
    ref: videoElement,
    className: "k-Video__videoElement",
    controls: controls,
    autoPlay: autoPlay,
    poster: poster,
    src: src
  }, props), childrenWithoutLoader));
};

exports.Video = Video;
Video.Loader = _styledComponents.default.div.withConfig({
  displayName: "video__Loader",
  componentId: "lqao0j-1"
})(["position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;"]);