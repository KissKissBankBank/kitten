import React, { PureComponent, createRef } from 'react'
import styled from 'styled-components'
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

const StyledVideo = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export class Video extends PureComponent {
  constructor(props) {
    super(props)

    this.video = createRef()
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
    const { children, ...props } = this.props
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
