import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["poster", "children"];
import "core-js/modules/web.dom-collections.for-each.js";
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
var StyledVideo = styled.video.withConfig({
  displayName: "gif-video__StyledVideo",
  componentId: "sc-1trx6ki-0"
})(["&::-webkit-media-controls{display:none;}"]);
export var GifVideo = function GifVideo(_ref) {
  var poster = _ref.poster,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var videoElement = useRef(null);

  var _useState = useState(false),
      shouldLoadPoster = _useState[0],
      setPosterLoading = _useState[1];

  var _useState2 = useState(0),
      sourcesLength = _useState2[0],
      setSourcesLength = _useState2[1];

  var _useState3 = useState(0),
      sourcesErrors = _useState3[0],
      setSourcesErrors = _useState3[1];

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