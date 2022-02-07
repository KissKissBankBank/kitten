import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import {
  getReactElementsByType,
  getReactElementsWithoutType,
} from '../../../helpers/react/react-elements'
import { ScreenConfig } from '../../../constants/screen-config'
import classNames from 'classnames'

const actionKeys = ['Enter', ' ']

const playerButtonSize = 90
const playerButtonXSSize = 70

const StyledVideo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &.k-Video--hasPointerCursor {
    cursor: pointer;
  }

  .k-Video__buttonContainer {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    transition: opacity ease 600ms, z-index ease 600ms;
    transition-delay: 0s, 0s;
    opacity: 1;
    z-index: 1;
    transition-delay: 0s, 600ms;
  }

  &.k-Video--videoIsPlaying .k-Video__buttonContainer {
    opacity: 0;
    z-index: 0;
  }

  .k-Video__button {
    position: relative;
    width: ${playerButtonXSSize};
    height: ${playerButtonXSSize};
    top: calc(50% - ${playerButtonXSSize} / 2);
    left: calc(50% - ${playerButtonXSSize} / 2);
    background: ${COLORS.background1};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      width: ${pxToRem(playerButtonSize)};
      height: ${pxToRem(playerButtonSize)};
      top: calc(50% - ${pxToRem(playerButtonSize / 2)});
      left: calc(50% - ${pxToRem(playerButtonSize / 2)});
    }
  }

  .k-Video__buttonPicto {
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      width: ${pxToRem(10)};
      height: ${pxToRem(10)};
    }
  }

  .k-Video__videoElement {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &.k-Video--objectFitCover .k-Video__videoElement {
    object-position: 50% 50%;
    object-fit: cover;
  }
`

export const Video = ({
  className,
  children,
  ariaLabel,
  autoPlay,
  poster,
  src,
  ...props
}) => {
  const videoElement = useRef(null)
  const [isPlayerVisible, setPlayerVisibility] = useState(false)

  const loader = getReactElementsByType({ children, type: Video.Loader })
  const childrenWithoutLoader = getReactElementsWithoutType({
    children,
    type: Video.Loader,
  })
  const isVideoPlaying = !autoPlay && isPlayerVisible
  const controls = isVideoPlaying && isPlayerVisible

  useEffect(() => {
    if (!videoElement.current || !videoElement.current.src) return
    if (videoElement.current.src === src) return

    videoElement.current.src = src
  }, [])

  const handlePlayClick = () => {
    if (isVideoPlaying) {
      videoElement.current.pause()
    } else {
      videoElement.current.play()
    }
    setPlayerVisibility(!isPlayerVisible)
  }

  const handleKeyDown = event => {
    if (actionKeys.includes(event.key)) {
      event.preventDefault()
      handlePlayClick()
    }
  }

  const componentClassNames = classNames('k-Video', className, {
    'k-Video--hasPointerCursor': !controls || !autoPlay,
    'k-Video--objectFitCover': !controls,
    'k-Video--videoIsPlaying': isVideoPlaying,
  })

  return (
    <StyledVideo
      onClick={handlePlayClick}
      aria-label={!autoPlay ? ariaLabel : null}
      onKeyDown={!autoPlay ? handleKeyDown : null}
      role={!autoPlay ? 'button' : null}
      tabIndex={!autoPlay ? 0 : null}
      className={componentClassNames}
    >
      {loader}

      {!autoPlay && (
        <div className="k-Video__buttonContainer">
          <div className="k-Video__button">
            <svg
              aria-hidden
              className="k-Video__buttonPicto"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0l10 5-10 5z" />
            </svg>
          </div>
        </div>
      )}

      <video
        ref={videoElement}
        className="k-Video__videoElement"
        controls={controls}
        autoPlay={autoPlay}
        poster={poster}
        src={src}
        {...props}
      >
        {childrenWithoutLoader}
      </video>
    </StyledVideo>
  )
}

Video.Loader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
