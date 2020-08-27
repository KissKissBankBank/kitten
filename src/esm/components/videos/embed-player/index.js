import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { ResponsiveIframeContainer } from '../../../components/layout/responsive-iframe-container';
import { parseHtml } from '../../../helpers/utils/parser';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
import styled from 'styled-components';
var actionKeys = ['Enter', ' '];
var playerButtonSize = 90;
var playerButtonXSSize = 70;
var StyledEmbedPlayer = styled.div.withConfig({
  displayName: "embed-player__StyledEmbedPlayer",
  componentId: "sc-14blbse-0"
})(["position:relative;display:block;width:100%;background-color:", ";.k-EmbedPlayer__thumbnail{display:block;width:100%;}.k-EmbedPlayer__embededPlayer{position:absolute;top:0;width:100%;height:100%;}&:hover .k-EmbedPlayer__button,&:focus .k-EmbedPlayer__button{background-color:", ";.k-EmbedPlayer__buttonPicto{fill:", ";}}&:active .k-EmbedPlayer__button{background-color:", ";.k-EmbedPlayer__buttonPicto{fill:", ";}}.k-EmbedPlayer__button{width:", ";height:", ";top:calc(50% - ", ");left:calc(50% - ", ");background:", ";position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;@media (min-width:", "){width:", ";height:", ";top:calc(50% - ", ");left:calc(50% - ", ");}}.k-EmbedPlayer__buttonPicto{width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}}.k-EmbedPlayer__playerPreview{position:relative;transition:opacity ease 600ms;z-index:1;opacity:1;}&.k-EmbedPlayer--videoIsPlaying .k-EmbedPlayer__playerPreview{opacity:0;z-index:0;}&.k-EmbedPlayer--cursorPointer .k-EmbedPlayer__playerPreview{cursor:pointer;}"], COLORS.font1, COLORS.primary2, COLORS.background1, COLORS.primary3, COLORS.background1, pxToRem(playerButtonXSSize), pxToRem(playerButtonXSSize), pxToRem(playerButtonXSSize / 2), pxToRem(playerButtonXSSize / 2), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(playerButtonSize), pxToRem(playerButtonSize), pxToRem(playerButtonSize / 2), pxToRem(playerButtonSize / 2), pxToRem(8), pxToRem(8), pxToRem(ScreenConfig.S.min), pxToRem(10), pxToRem(10));
export var EmbedPlayer = function EmbedPlayer(_ref) {
  var ratio = _ref.ratio,
      _ref$previewProps = _ref.previewProps,
      thumbnail = _ref$previewProps.thumbnail,
      badgeComponent = _ref$previewProps.badgeComponent,
      iframeHtml = _ref.iframeHtml,
      playButtonLabel = _ref.playButtonLabel,
      _ref$style = _ref.style,
      mainStyle = _ref$style === void 0 ? void 0 : _ref$style,
      className = _ref.className,
      others = _objectWithoutProperties(_ref, ["ratio", "previewProps", "iframeHtml", "playButtonLabel", "style", "className"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPlayerVisible = _useState2[0],
      setPlayerVisibility = _useState2[1];

  var previewVideo = useRef(null);
  var validRatio = parseInt(ratio, 10);
  var hasIframeHtml = !!iframeHtml;

  var handleClick = function handleClick() {
    setPlayerVisibility(true);
    previewVideo.current.blur();
  };

  var handleKeyPress = function handleKeyPress(event) {
    event.preventDefault();
    if (actionKeys.includes(event.key)) handleClick();
  };

  var handleFocus = function handleFocus(event) {
    event.preventDefault();
    previewVideo.current.focus();
    handleKeyPress(event);
  };

  var componentClassNames = classNames('k-EmbedPlayer', className, {
    'k-EmbedPlayer--videoIsPlaying': hasIframeHtml && isPlayerVisible,
    'k-EmbedPlayer--cursorPointer': hasIframeHtml
  });
  return /*#__PURE__*/React.createElement(StyledEmbedPlayer, _extends({
    ref: previewVideo
  }, others, {
    style: _extends({}, mainStyle),
    onClick: hasIframeHtml ? handleClick : null,
    onKeyPress: hasIframeHtml ? handleKeyPress : null,
    onFocus: hasIframeHtml ? handleFocus : null,
    role: hasIframeHtml ? 'button' : null,
    tabIndex: hasIframeHtml ? 0 : null,
    "aria-label": hasIframeHtml ? playButtonLabel : null,
    className: componentClassNames
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-EmbedPlayer__playerPreview"
  }, hasIframeHtml && /*#__PURE__*/React.createElement("div", {
    className: "k-EmbedPlayer__button"
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": true,
    className: "k-EmbedPlayer__buttonPicto",
    viewBox: "0 0 10 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0l10 5-10 5z"
  }))), /*#__PURE__*/React.createElement(ResponsiveIframeContainer, {
    ratio: validRatio
  }, /*#__PURE__*/React.createElement("img", _extends({}, thumbnail, {
    className: "k-EmbedPlayer__thumbnail ".concat(thumbnail.className || '')
  }))), badgeComponent), hasIframeHtml && isPlayerVisible && /*#__PURE__*/React.createElement("div", {
    className: "k-EmbedPlayer__embededPlayer"
  }, /*#__PURE__*/React.createElement(ResponsiveIframeContainer, {
    ratio: validRatio
  }, parseHtml(iframeHtml))));
};
EmbedPlayer.propTypes = {
  previewProps: PropTypes.shape({
    thumbnail: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      style: PropTypes.string
    }).isRequired
  }).isRequired,
  badgeComponent: PropTypes.node,
  playButtonLabel: PropTypes.string.isRequired,
  ratio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  iframeHtml: PropTypes.string
};
EmbedPlayer.defaultProps = {
  previewProps: {
    thumbnail: {
      style: {}
    }
  },
  badgeComponent: null,
  iframeHtml: null
};