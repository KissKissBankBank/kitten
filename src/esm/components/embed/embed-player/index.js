import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { ResponsiveIframeContainer } from '../responsive-iframe-container';
import { parseHtml } from '../../../helpers/utils/parser';
import classNames from 'classnames';
import styled from 'styled-components';
import { PlayerIconNext } from '../../../components/graphics/icons-next/player-icon-next';
const StyledEmbedPlayer = styled.div.withConfig({
  displayName: "embed-player__StyledEmbedPlayer",
  componentId: "sc-15ix1ty-0"
})(["position:relative;display:block;width:100%;background-color:", ";.k-EmbedPlayer__thumbnail{display:block;width:100%;object-fit:cover;object-position:center;}.k-EmbedPlayer__embededPlayer{position:absolute;top:0;width:100%;height:100%;}&:focus-visible{outline:auto;}.k-EmbedPlayer__button{cursor:pointer;top:0;left:0;right:0;bottom:0;width:100%;height:100%;position:absolute;transition:opacity var(--transition),z-index var(--transition);transition-delay:0s,var(--transition-timing);opacity:1;z-index:1;display:flex;align-items:center;justify-content:center;}.k-EmbedPlayer__playerPreview{position:relative;transition:opacity var(--transition),z-index var(--transition);transition-delay:0s,var(--transition-timing);z-index:1;opacity:1;}&.k-EmbedPlayer--videoIsPlaying .k-EmbedPlayer__button,&.k-EmbedPlayer--videoIsPlaying .k-EmbedPlayer__playerPreview{opacity:0;z-index:0;}"], COLORS.font1);
export const EmbedPlayer = _ref => {
  let {
    ratio,
    previewProps: {
      thumbnail,
      badgeComponent
    },
    iframeHtml,
    playButtonLabel,
    className,
    ...others
  } = _ref;
  const [isPlayerVisible, setPlayerVisibility] = useState(false);
  const previewVideo = useRef(null);
  const validRatio = parseInt(ratio, 10);
  const hasIframeHtml = !!iframeHtml;

  const handleClick = () => {
    setPlayerVisibility(true);
    previewVideo.current.blur();
  };

  return /*#__PURE__*/React.createElement(StyledEmbedPlayer, _extends({
    ref: previewVideo
  }, others, {
    className: classNames('k-EmbedPlayer', className, {
      'k-EmbedPlayer--videoIsPlaying': hasIframeHtml && isPlayerVisible,
      'k-EmbedPlayer--cursorPointer': hasIframeHtml
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-EmbedPlayer__playerPreview"
  }, hasIframeHtml && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "k-u-reset-button k-EmbedPlayer__button",
    onClick: handleClick,
    "aria-label": playButtonLabel
  }, /*#__PURE__*/React.createElement(PlayerIconNext, null)), /*#__PURE__*/React.createElement(ResponsiveIframeContainer, {
    ratio: validRatio
  }, /*#__PURE__*/React.createElement("img", _extends({}, thumbnail, {
    className: "k-EmbedPlayer__thumbnail " + (thumbnail.className || '')
  }))), badgeComponent), hasIframeHtml && isPlayerVisible && /*#__PURE__*/React.createElement("div", {
    className: "k-EmbedPlayer__embededPlayer"
  }, /*#__PURE__*/React.createElement(ResponsiveIframeContainer, {
    ratio: validRatio
  }, parseHtml(iframeHtml, {
    sanitize: false
  }))));
};
EmbedPlayer.propTypes = {
  previewProps: PropTypes.shape({
    thumbnail: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  badgeComponent: PropTypes.node,
  playButtonLabel: PropTypes.string.isRequired,
  ratio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  iframeHtml: PropTypes.string
};
EmbedPlayer.defaultProps = {
  previewProps: {
    thumbnail: {}
  },
  badgeComponent: null,
  iframeHtml: null
};