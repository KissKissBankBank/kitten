"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GifVideo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledVideo = _styledComponents.default.video.withConfig({
  displayName: "gif-video__StyledVideo",
  componentId: "sc-1shz5n8-0"
})(["&::-webkit-media-controls{display:none;}"]);

const GifVideo = _ref => {
  let {
    poster,
    children,
    ...props
  } = _ref;
  const videoElement = (0, _react.useRef)(null);
  const [shouldLoadPoster, setPosterLoading] = (0, _react.useState)(false);
  const [sourcesLength, setSourcesLength] = (0, _react.useState)(0);
  const [sourcesErrors, setSourcesErrors] = (0, _react.useState)(0);

  const handleSourceError = () => {
    setSourcesErrors(sourcesErrorsValue => sourcesErrorsValue + 1);
  };

  (0, _react.useEffect)(() => {
    if (!children) return setPosterLoading(true);
    if (!videoElement || !videoElement.current) return;
    const sources = Array.from(videoElement.current.children);
    setSourcesLength(sources.length);
    sources.forEach(source => {
      source.addEventListener('error', handleSourceError);
    });
    return () => {
      sources.forEach(source => {
        source.removeEventListener('error', handleSourceError);
      });
    };
  }, [videoElement]);
  (0, _react.useEffect)(() => {
    if (sourcesLength > 0 && sourcesErrors === sourcesLength) {
      setPosterLoading(true);
    }
  }, [sourcesErrors]);
  return /*#__PURE__*/_react.default.createElement(StyledVideo, (0, _extends2.default)({
    ref: videoElement,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true
  }, props, {
    poster: shouldLoadPoster ? poster : null
  }), children);
};

exports.GifVideo = GifVideo;