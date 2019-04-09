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
  cursor: ${props => (props.autoPlay ? 'pointer' : null)};
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
  z-index: ${props => (props.autoPlay ? 0 : 1)};
  opacity: ${props => (props.autoPlay ? 0 : 1)};
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
    // this.previewVideo.blur()
    if (this.state.showPlayer) {
      this.video.current.pause()
    } else {
      this.video.current.play()
    }
    this.setState({ showPlayer: true })
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

    return (
      <StyledContainer>
        {loader}

        <StyledVideo {...props} ref={this.video} onClick={this.handlePlayClick}>
          {childrenWithoutLoader}
        </StyledVideo>

        {!autoPlay && (
          <StyledPlayerButton>
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
