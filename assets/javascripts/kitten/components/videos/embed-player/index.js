import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { ResponsiveIframeContainer } from '../../../components/layout/responsive-iframe-container'
import { parseHtml } from '../../../helpers/utils/parser'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'
import styled from 'styled-components'

const actionKeys = ['Enter', ' ']

const playerButtonSize = 90
const playerButtonXSSize = 70

const StyledEmbedPlayer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: ${COLORS.font1};

  .k-EmbedPlayer__thumbnail {
    display: block;
    width: 100%;
  }

  .k-EmbedPlayer__embededPlayer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .k-EmbedPlayer__button {
    width: ${pxToRem(playerButtonXSSize)};
    height: ${pxToRem(playerButtonXSSize)};
    top: calc(50% - ${pxToRem(playerButtonXSSize / 2)});
    left: calc(50% - ${pxToRem(playerButtonXSSize / 2)});
    background: ${COLORS.background1};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    .k-EmbedPlayer:hover &,
    .k-EmbedPlayer:focus & {
      background-color: ${COLORS.primary2};
      .k-EmbedPlayer__buttonPicto {
        fill: ${COLORS.background1};
      }
    }
    .k-EmbedPlayer:active & {
      background-color: ${COLORS.primary3};
      .k-EmbedPlayer__buttonPicto {
        fill: ${COLORS.background1};
      }
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      width: ${pxToRem(playerButtonSize)};
      height: ${pxToRem(playerButtonSize)};
      top: calc(50% - ${pxToRem(playerButtonSize / 2)});
      left: calc(50% - ${pxToRem(playerButtonSize / 2)});
    }
  }

  .k-EmbedPlayer__buttonPicto {
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      width: ${pxToRem(10)};
      height: ${pxToRem(10)};
    }
  }

  .k-EmbedPlayer__playerPreview {
    position: relative;
    transition: opacity ease 600ms;
    z-index: 1;
    opacity: 1;
  }
  &.k-EmbedPlayer--videoIsPlaying .k-EmbedPlayer__playerPreview {
    opacity: 0;
    z-index: 0;
  }
  &.k-EmbedPlayer--cursorPointer .k-EmbedPlayer__playerPreview {
    cursor: pointer;
  }
`

export const EmbedPlayer = ({
  ratio,
  previewProps: { thumbnail, badgeComponent },
  iframeHtml,
  playButtonLabel,
  style: mainStyle = void 0,
  className,
  ...others
}) => {
  const [isPlayerVisible, setPlayerVisibility] = useState(false)
  const previewVideo = useRef(null)
  const validRatio = parseInt(ratio, 10)
  const hasIframeHtml = !!iframeHtml

  const handleClick = () => {
    setPlayerVisibility(true)
    previewVideo.current.blur()
  }

  const handleKeyPress = event => {
    event.preventDefault()

    if (actionKeys.includes(event.key)) handleClick()
  }

  const handleFocus = event => {
    event.preventDefault()
    previewVideo.current.focus()
    handleKeyPress(event)
  }

  const componentClassNames = classNames('k-EmbedPlayer', className, {
    'k-EmbedPlayer--videoIsPlaying': hasIframeHtml && isPlayerVisible,
    'k-EmbedPlayer--cursorPointer': hasIframeHtml,
  })

  return (
    <StyledEmbedPlayer
      ref={previewVideo}
      {...others}
      style={{ ...mainStyle }}
      onClick={hasIframeHtml ? handleClick : null}
      onKeyPress={hasIframeHtml ? handleKeyPress : null}
      onFocus={hasIframeHtml ? handleFocus : null}
      role={hasIframeHtml ? 'button' : null}
      tabIndex={hasIframeHtml ? 0 : null}
      aria-label={hasIframeHtml ? playButtonLabel : null}
      className={componentClassNames}
    >
      <div className="k-EmbedPlayer__playerPreview">
        {hasIframeHtml && (
          <div className="k-EmbedPlayer__button">
            <svg
              aria-hidden
              className="k-EmbedPlayer__buttonPicto"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0l10 5-10 5z" />
            </svg>
          </div>
        )}

        <ResponsiveIframeContainer ratio={validRatio}>
          <img
            {...thumbnail}
            className={`k-EmbedPlayer__thumbnail ${thumbnail.className || ''}`}
          />
        </ResponsiveIframeContainer>

        {badgeComponent}
      </div>

      {hasIframeHtml && isPlayerVisible && (
        <div className="k-EmbedPlayer__embededPlayer">
          <ResponsiveIframeContainer ratio={validRatio}>
            {parseHtml(iframeHtml)}
          </ResponsiveIframeContainer>
        </div>
      )}
    </StyledEmbedPlayer>
  )
}

EmbedPlayer.propTypes = {
  previewProps: PropTypes.shape({
    thumbnail: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      style: PropTypes.string,
    }).isRequired,
  }).isRequired,
  badgeComponent: PropTypes.node,
  playButtonLabel: PropTypes.string.isRequired,
  ratio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  iframeHtml: PropTypes.string,
}

EmbedPlayer.defaultProps = {
  previewProps: {
    thumbnail: {
      style: {},
    },
  },
  badgeComponent: null,
  iframeHtml: null,
}
