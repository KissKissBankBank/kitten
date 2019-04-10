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
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  ${({ autoPlay }) =>
    !autoPlay &&
    css`
      cursor: pointer;
    `}
`

const playerButtonSize = pxToRem(70)

const StyledPlayerButton = styled.div`
  width: ${playerButtonSize};
  height: ${playerButtonSize};
  background: ${COLORS.background1};
  position: absolute;
  top: calc(50% - ${playerButtonSize} / 2);
  left: calc(50% - ${playerButtonSize} / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ease 600ms, z-index ease 600ms;
  z-index: 1;

  ${({ isVideoPlaying }) =>
    isVideoPlaying
      ? css`
          opacity: 0;
          z-index: 0;
        `
      : css`
          opacity: 1;
        `}
`

const StyledVideo = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export class Video extends PureComponent {
  video = createRef()
  state = { showPlayer: false }

  handlePlayClick = () => {
    if (this.state.showPlayer && this.props.autoPlay) {
      this.video.current.pause()
    } else {
      this.video.current.play()
    }
    this.setState({ showPlayer: true })
    // this.previewVideo.blur()
  }

  handleKeyPress = event => {
    event.preventDefault()
    const enterKey = event.key === 'Enter'
    const spaceKey = event.key === ' '

    if (enterKey || spaceKey) this.handlePlayClick()
  }

  handleFocus = event => {
    event.preventDefault()
    this.previewVideo.focus()
    this.handleKeyPress(event)
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
      onClick: this.handleClick,
      onKeyPress: this.handleKeyPress,
      onFocus: this.handleFocus,
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

    return (
      <StyledContainer
        onClick={this.handlePlayClick}
        {...this.a11yOnClickProps}
      >
        {loader}

        <StyledVideo ref={this.video} autoPlay={autoPlay} {...props}>
          {childrenWithoutLoader}
        </StyledVideo>

        {!autoPlay && (
          <StyledPlayerButton isVideoPlaying={isVideoPlaying}>
            <Text size="default" weight="regular" aria-label={ariaLabel}>
              ►
            </Text>
          </StyledPlayerButton>
        )}
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
