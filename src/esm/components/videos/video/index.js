import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../helpers/react/react-elements';
import { ScreenConfig } from '../../../constants/screen-config';
import classNames from 'classnames';
var actionKeys = ['Enter', ' '];
var playerButtonSize = 90;
var playerButtonXSSize = 70;
var StyledVideo = styled.div.withConfig({
  displayName: "video__StyledVideo",
  componentId: "lqao0j-0"
})(["position:relative;width:100%;height:100%;overflow:hidden;&.k-Video--hasPointerCursor{cursor:pointer;}.k-Video__buttonContainer{top:0;right:0;bottom:0;left:0;position:absolute;transition:opacity ease 600ms,z-index ease 600ms;transition-delay:0s,0s;opacity:1;z-index:1;transition-delay:0s,600ms;}&.k-Video--videoIsPlaying .k-Video__buttonContainer{opacity:0;z-index:0;}.k-Video__button{position:relative;width:", ";height:", ";top:calc(50% - ", " / 2);left:calc(50% - ", " / 2);background:", ";display:flex;align-items:center;justify-content:center;@media (min-width:", "){width:", ";height:", ";top:calc(50% - ", ");left:calc(50% - ", ");}}.k-Video__buttonPicto{width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}}.k-Video__videoElement{position:relative;width:100%;height:100%;}&.k-Video--objectFitCover .k-Video__videoElement{object-position:50% 50%;object-fit:cover;}"], playerButtonXSSize, playerButtonXSSize, playerButtonXSSize, playerButtonXSSize, COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(playerButtonSize), pxToRem(playerButtonSize), pxToRem(playerButtonSize / 2), pxToRem(playerButtonSize / 2), pxToRem(8), pxToRem(8), pxToRem(ScreenConfig.S.min), pxToRem(10), pxToRem(10));
export var Video = function Video(_ref) {
  var className = _ref.className,
      children = _ref.children,
      ariaLabel = _ref.ariaLabel,
      autoPlay = _ref.autoPlay,
      poster = _ref.poster,
      src = _ref.src,
      props = _objectWithoutProperties(_ref, ["className", "children", "ariaLabel", "autoPlay", "poster", "src"]);

  var videoElement = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPlayerVisible = _useState2[0],
      setPlayerVisibility = _useState2[1];

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

  var handleKeyDown = function handleKeyDown(event) {
    if (actionKeys.includes(event.key)) {
      event.preventDefault();
      handlePlayClick();
    }
  };

  var componentClassNames = classNames('k-Video', className, {
    'k-Video--hasPointerCursor': !controls || !autoPlay,
    'k-Video--objectFitCover': !controls,
    'k-Video--videoIsPlaying': isVideoPlaying
  });
  return /*#__PURE__*/React.createElement(StyledVideo, {
    onClick: handlePlayClick,
    "aria-label": !autoPlay ? ariaLabel : null,
    onKeyDown: !autoPlay ? handleKeyDown : null,
    role: !autoPlay ? 'button' : null,
    tabIndex: !autoPlay ? 0 : null,
    className: componentClassNames
  }, loader, !autoPlay && /*#__PURE__*/React.createElement("div", {
    className: "k-Video__buttonContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-Video__button"
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": true,
    className: "k-Video__buttonPicto",
    viewBox: "0 0 10 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0l10 5-10 5z"
  })))), /*#__PURE__*/React.createElement("video", _extends({
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
  componentId: "lqao0j-1"
})(["position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;"]);