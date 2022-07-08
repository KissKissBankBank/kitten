import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "ariaLabel", "autoPlay", "poster", "src"];
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../helpers/react/get-react-elements';
import { PlayerIconNext } from '../../../components/graphics/icons-next/player-icon-next';
import classNames from 'classnames';
var StyledVideo = styled.div.withConfig({
  displayName: "video__StyledVideo",
  componentId: "sc-bbgaqs-0"
})(["position:relative;width:100%;height:100%;overflow:hidden;.k-Video__button{cursor:pointer;top:0;left:0;right:0;bottom:0;width:100%;height:100%;position:absolute;transition:opacity var(--transition),z-index var(--transition);opacity:1;z-index:1;transition-delay:0s,var(--transition-timing);display:flex;align-items:center;justify-content:center;}&.k-Video--videoIsPlaying .k-Video__button{opacity:0;z-index:0;}.k-Video__videoElement{position:relative;width:100%;height:100%;}&.k-Video--objectFitCover .k-Video__videoElement{object-position:50% 50%;object-fit:cover;}"]);
export var Video = function Video(_ref) {
  var className = _ref.className,
      children = _ref.children,
      ariaLabel = _ref.ariaLabel,
      autoPlay = _ref.autoPlay,
      poster = _ref.poster,
      src = _ref.src,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var videoElement = useRef(null);

  var _useState = useState(false),
      isPlayerVisible = _useState[0],
      setPlayerVisibility = _useState[1];

  var loader = getReactElementsByType({
    children: children,
    type: Video.Loader
  });
  var childrenWithoutLoader = getReactElementsWithoutType({
    children: children,
    type: Video.Loader
  });
  var isVideoPlaying = !autoPlay && isPlayerVisible;
  var controls = isVideoPlaying && isPlayerVisible;
  useEffect(function () {
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

  return /*#__PURE__*/React.createElement(StyledVideo, {
    className: classNames('k-Video', className, {
      'k-Video--objectFitCover': !controls,
      'k-Video--videoIsPlaying': isVideoPlaying
    })
  }, loader, !autoPlay && /*#__PURE__*/React.createElement("button", {
    onClick: handlePlayClick,
    "aria-label": ariaLabel,
    type: "button",
    className: "k-u-reset-button k-Video__button"
  }, /*#__PURE__*/React.createElement(PlayerIconNext, null)), /*#__PURE__*/React.createElement("video", _extends({
    ref: videoElement,
    className: "k-Video__videoElement",
    controls: controls,
    autoPlay: autoPlay,
    poster: poster,
    src: src
  }, props), childrenWithoutLoader));
};
Video.Loader = styled.div.withConfig({
  displayName: "video__Loader",
  componentId: "sc-bbgaqs-1"
})(["position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;"]);