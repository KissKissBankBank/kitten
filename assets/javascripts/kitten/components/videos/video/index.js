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
`

const player = css`
  position: relative;
  transition: opacity ease 600ms, z-index ease 600ms;
  z-index: 1;
`

const hidePlayer = css`
  opacity: 0;
  z-index: 0;
`

const showPlayer = css`
  opacity: 1;
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
  cursor: pointer;
`

const StyledVideo = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const styledPlayerButtonOnVideo = styled(
  ({ arrowColor, ariaLabel, ...others }) => (
    <StyledPlayerButton>
      <Text
        size="default"
        weight="regular"
        color={props.arrowColor}
        aria-label={props.ariaLabel}
      >
        ►
      </Text>
    </StyledPlayerButton>
  ),
)`
  ${player}
`

export class Video extends PureComponent {
  state = { showPlayer: false }
  video = createRef()

  handleClick = () => {
    this.setState({ showPlayer: true })
  }

  a11yOnClickProps = () => {
    if (!this.props.withPlayerButtonOnVideo) return

    return {
      onClick: this.handleClick,
      role: 'button',
      tabIndex: 0,
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

  render() {
    const {
      children,
      arrowColor,
      ariaLabel,
      withPlayerButtonOnVideo,
      ...props
    } = this.props
    const loader = getReactElementsByType({ children, type: Video.Loader })
    const childrenWithoutLoader = getReactElementsWithoutType({
      children,
      type: Video.Loader,
    })

    return (
      <StyledContainer {...this.a11yOnClickProps()}>
        <styledPlayerButtonOnVideo
          arrowColor={arrowColor}
          ariaLabel={ariaLabel}
        />
        <StyledVideo {...props} ref={this.video}>
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
