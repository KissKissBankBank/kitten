import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
const StyledVideo = styled.video.withConfig({
  displayName: "gif-video__StyledVideo",
  componentId: "sc-1shz5n8-0"
})(["&::-webkit-media-controls{display:none;}"]);
export const GifVideo = _ref => {
  let {
    poster,
    children,
    ...props
  } = _ref;
  const videoElement = useRef(null);
  const [shouldLoadPoster, setPosterLoading] = useState(false);
  const [sourcesLength, setSourcesLength] = useState(0);
  const [sourcesErrors, setSourcesErrors] = useState(0);

  const handleSourceError = () => {
    setSourcesErrors(sourcesErrorsValue => sourcesErrorsValue + 1);
  };

  useEffect(() => {
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
  useEffect(() => {
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