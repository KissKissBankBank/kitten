import React, { PureComponent, createRef } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import {
  getReactElementsByType,
  getReactElementsWithoutType,
} from '../../../helpers/react/react-elements'

const StyledContainer = styled.div.attrs({
  role: 'button',
  tabIndex: 0,
})`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
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
  z-index: 2;
`

const hidePlayer = css`
  opacity: 0;
  z-index: 0;
`

const showPlayer = css`
  opacity: 1;
`

const StyledVideo = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export class Video extends PureComponent {
  state = { showPlayer: false }
  video = createRef()

  handlePlayClick = () => {
    this.setState({ showPlayer: true })
    // this.previewVideo.blur()
    this.video.play()
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

  render() {
    const { children, ariaLabel, ...props } = this.props
    const loader = getReactElementsByType({ children, type: Video.Loader })
    const childrenWithoutLoader = getReactElementsWithoutType({
      children,
      type: Video.Loader,
    })

    return (
      <StyledContainer>
        {loader}

        <StyledVideo {...props} ref={this.video}>
          {childrenWithoutLoader}
        </StyledVideo>
        {!props.autoPlay && (
          <StyledPlayerButton onClick={this.handlePlayClick}>
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
