"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GifVideo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _excluded = ["poster", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledVideo = _styledComponents.default.video.withConfig({
  displayName: "gif-video__StyledVideo",
  componentId: "sc-1trx6ki-0"
})(["&::-webkit-media-controls{display:none;}"]);

var GifVideo = function GifVideo(_ref) {
  var poster = _ref.poster,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var videoElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      shouldLoadPoster = _useState[0],
      setPosterLoading = _useState[1];

  var _useState2 = (0, _react.useState)(0),
      sourcesLength = _useState2[0],
      setSourcesLength = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      sourcesErrors = _useState3[0],
      setSourcesErrors = _useState3[1];

  var handleSourceError = function handleSourceError() {
    setSourcesErrors(function (sourcesErrorsValue) {
      return sourcesErrorsValue + 1;
    });
  };

  (0, _react.useEffect)(function () {
    if (!children) return setPosterLoading(true);
    if (!videoElement || !videoElement.current) return;
    var sources = Array.from(videoElement.current.children);
    setSourcesLength(sources.length);
    sources.forEach(function (source) {
      source.addEventListener('error', handleSourceError);
    });
    return function () {
      sources.forEach(function (source) {
        source.removeEventListener('error', handleSourceError);
      });
    };
  }, [videoElement]);
  (0, _react.useEffect)(function () {
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