"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Video = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getReactElements = require("../../../helpers/react/get-react-elements");

var _playerIconNext = require("../../../components/graphics/icons-next/player-icon-next");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className", "children", "ariaLabel", "autoPlay", "poster", "src"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledVideo = _styledComponents.default.div.withConfig({
  displayName: "video__StyledVideo",
  componentId: "sc-bbgaqs-0"
})(["position:relative;width:100%;height:100%;overflow:hidden;.k-Video__button{cursor:pointer;top:0;left:0;right:0;bottom:0;width:100%;height:100%;position:absolute;transition:opacity var(--transition),z-index var(--transition);opacity:1;z-index:1;transition-delay:0s,var(--transition-timing);display:flex;align-items:center;justify-content:center;}&.k-Video--videoIsPlaying .k-Video__button{opacity:0;z-index:0;}.k-Video__videoElement{position:relative;width:100%;height:100%;}&.k-Video--objectFitCover .k-Video__videoElement{object-position:50% 50%;object-fit:cover;}"]);

var Video = function Video(_ref) {
  var className = _ref.className,
      children = _ref.children,
      ariaLabel = _ref.ariaLabel,
      autoPlay = _ref.autoPlay,
      poster = _ref.poster,
      src = _ref.src,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var videoElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      isPlayerVisible = _useState[0],
      setPlayerVisibility = _useState[1];

  var loader = (0, _getReactElements.getReactElementsByType)({
    children: children,
    type: Video.Loader
  });
  var childrenWithoutLoader = (0, _getReactElements.getReactElementsWithoutType)({
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

  return /*#__PURE__*/_react.default.createElement(StyledVideo, {
    className: (0, _classnames.default)('k-Video', className, {
      'k-Video--objectFitCover': !controls,
      'k-Video--videoIsPlaying': isVideoPlaying
    })
  }, loader, !autoPlay && /*#__PURE__*/_react.default.createElement("button", {
    onClick: handlePlayClick,
    "aria-label": ariaLabel,
    type: "button",
    className: "k-u-reset-button k-Video__button"
  }, /*#__PURE__*/_react.default.createElement(_playerIconNext.PlayerIconNext, null)), /*#__PURE__*/_react.default.createElement("video", (0, _extends2.default)({
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
  componentId: "sc-bbgaqs-1"
})(["position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;"]);