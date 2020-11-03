import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
var StyledVideo = styled.video.withConfig({
  displayName: "gif-video__StyledVideo",
  componentId: "sc-1drzckh-0"
})(["&::-webkit-media-controls{display:none;}"]);
export var GifVideo = function GifVideo(_ref) {
  var poster = _ref.poster,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["poster", "children"]);

  var videoElement = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      shouldLoadPoster = _useState2[0],
      setPosterLoading = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      sourcesLength = _useState4[0],
      setSourcesLength = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      sourcesErrors = _useState6[0],
      setSourcesErrors = _useState6[1];

  var handleSourceError = function handleSourceError() {
    setSourcesErrors(function (sourcesErrorsValue) {
      return sourcesErrorsValue + 1;
    });
  };

  useEffect(function () {
    if (!children) return setPosterLoading(true);
    if (!videoElement || !videoElement.current) return;
    var sources = videoElement.current.children;
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
  useEffect(function () {
    if (sourcesLength > 0 && sourcesErrors === sourcesLength) {
      setPosterLoading(true);
    }
  }, [sourcesErrors]);
  return /*#__PURE__*/React.createElement(StyledVideo, _extends({
    ref: videoElement,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true
  }, props, {
    poster: shouldLoadPoster ? poster : null
  }), children);
};