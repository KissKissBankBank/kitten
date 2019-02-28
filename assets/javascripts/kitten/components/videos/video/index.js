import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

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

  return (
    <StyledContainer>
      {children}
      <StyledVideo {...props} ref={video} />
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
