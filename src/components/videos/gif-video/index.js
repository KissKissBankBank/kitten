"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifVideo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var GifVideo = function GifVideo(_ref) {
  var poster = _ref.poster,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["poster", "children"]);
  var videoElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      shouldLoadPoster = _useState2[0],
      setPosterLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      sourcesLength = _useState4[0],
      setSourcesLength = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      sourcesErrors = _useState6[0],
      setSourcesErrors = _useState6[1];

  var handleSourceError = function handleSourceError() {
    setSourcesErrors(function (sourcesErrorsValue) {
      return sourcesErrorsValue + 1;
    });
  };

  (0, _react.useEffect)(function () {
    if (!children) return setPosterLoading(true);
    if (!videoElement || !videoElement.current) return;
    var sources = videoElement.current.children;
    setSourcesLength(sources.length);
    sources.forEach(function (source) {
      source.addEventListener('error', handleSourceError);
    });
  }, [videoElement]);
  (0, _react.useEffect)(function () {
    if (sourcesLength > 0 && sourcesErrors === sourcesLength) {
      setPosterLoading(true);
    }
  }, [sourcesErrors]);
  return /*#__PURE__*/_react.default.createElement("video", (0, _extends2.default)({
    ref: videoElement,
    autoPlay: true,
    loop: true,
    muted: true
  }, props, {
    poster: shouldLoadPoster ? poster : null
  }), children);
};

exports.GifVideo = GifVideo;