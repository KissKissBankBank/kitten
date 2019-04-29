import React, { PureComponent, createRef } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import {
  getReactElementsByType,
  getReactElementsWithoutType,
} from '../../../helpers/react/react-elements'

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({ isVideoPlaying }) =>
    isVideoPlaying &&
    css`
      cursor: pointer;
    `}
`

const StyledContainerButton = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  transition: opacity ease 600ms, z-index ease 600ms;
  transition-delay: 0s, 0s;

  ${({ isVideoPlaying }) =>
    isVideoPlaying
      ? css`
          opacity: 0;
          z-index: 0;
          cursor: pointer;
        `
      : css`
          opacity: 1;
          z-index: 1;
          transition-delay: 0s, 600ms;
        `}
`

const playerButtonSize = pxToRem(70)

const StyledPlayerButton = styled.div`
  position: relative;
  width: ${playerButtonSize};
  height: ${playerButtonSize};
  background: ${COLORS.background1};
  top: calc(50% - ${playerButtonSize} / 2);
  left: calc(50% - ${playerButtonSize} / 2);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledVideo = styled.video`
  position: relative;
  width: 100%;
  height: 100%;

  ${({ controls }) =>
    !controls &&
    css`
      object-fit: cover;
    `}
`

export class Video extends PureComponent {
  video = createRef()
  state = { showPlayer: false }

  handlePlayClick = () => {
    if (this.state.showPlayer && !this.props.autoPlay) {
      this.video.current.pause()
    } else {
      this.video.current.play()
    }
    this.setState({ showPlayer: !this.state.showPlayer })
    this.previewVideo.blur()
  }

  handleKeyDown = event => {
    const enterKeyCode = 13
    const spaceKeyCode = 32

    if (event.keyCode === enterKeyCode || event.keyCode === spaceKeyCode) {
      event.preventDefault()
      this.handlePlayClick()
    }
  }

  componentDidMount() {
    this.updateVideoSource()
  }

  updateVideoSource = () => {
    if (this.isVideoSourceMatchesSource()) return

    this.video.current.src = this.props.src
  }

  isVideoSourceMatchesSource = () => {
    if (!this.video.current || !this.video.current.src) return

    return this.video.current.src === this.props.src
  }

  a11yOnClickProps = () => {
    if (this.props.autoPlay) return

    return {
      onClick: this.handlePlayClick,
      onKeyDown: this.handleKeyDown,
      role: 'button',
      tabIndex: 0,
    }
  }

  render() {
    const { children, ariaLabel, autoPlay, ...props } = this.props
    const loader = getReactElementsByType({ children, type: Video.Loader })
    const childrenWithoutLoader = getReactElementsWithoutType({
      children,
      type: Video.Loader,
    })
    const isVideoPlaying = !autoPlay && this.state.showPlayer
    const controls = isVideoPlaying && this.state.showPlayer

    return (
      <StyledContainer
        onClick={this.handlePlayClick}
        isVideoPlaying={isVideoPlaying}
        {...this.a11yOnClickProps()}
      >
        {loader}

        {!autoPlay && (
          <StyledContainerButton isVideoPlaying={isVideoPlaying}>
            <StyledPlayerButton aria-label={ariaLabel}>
              <Text size="default" weight="regular">
                ►
              </Text>
            </StyledPlayerButton>
          </StyledContainerButton>
        )}

        <StyledVideo
          ref={this.video}
          controls={controls}
          autoPlay={autoPlay}
          {...props}
        >
          {childrenWithoutLoader}
        </StyledVideo>
      </StyledContainer>
    )
  }
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
