import React, { useRef, useEffect } from 'react'
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

export const Video = ({ src, children, ...props }) => {
  const video = useRef()

  useEffect(() => updateVideoSource())

  const updateVideoSource = () => {
    if (isVideoSourceMatchesSource()) return

    video.current.src = src
  }

  const isVideoSourceMatchesSource = () => {
    if (!video.current || !video.current.src) return

    return video.current.src === src
  }

  const loader = getReactElementsByType({ children, type: Video.Loader })
  const childrenWithoutLoader = getReactElementsWithoutType({
    children,
    type: Video.Loader,
  })

  return (
    <StyledContainer>
      {loader}
      <StyledVideo {...props} ref={video}>
        {childrenWithoutLoader}
      </StyledVideo>
    </StyledContainer>
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
