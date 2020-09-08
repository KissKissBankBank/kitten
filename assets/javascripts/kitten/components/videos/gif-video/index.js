import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video`
  &::-webkit-media-controls {
    display: none;
  }
`

export const GifVideo = ({ poster, children, ...props }) => {
  const videoElement = useRef(null)
  const [shouldLoadPoster, setPosterLoading] = useState(false)
  const [sourcesLength, setSourcesLength] = useState(0)
  const [sourcesErrors, setSourcesErrors] = useState(0)

  const handleSourceError = () => {
    setSourcesErrors(sourcesErrorsValue => sourcesErrorsValue + 1)
  }

  useEffect(() => {
    if (!children) return setPosterLoading(true)
    if (!videoElement || !videoElement.current) return

    const sources = videoElement.current.children
    setSourcesLength(sources.length)

    sources.forEach(source => {
      source.addEventListener('error', handleSourceError)
    })
  }, [videoElement])

  useEffect(() => {
    if (sourcesLength > 0 && sourcesErrors === sourcesLength) {
      setPosterLoading(true)
    }
  }, [sourcesErrors])

  return (
    <StyledVideo
      ref={videoElement}
      autoPlay
      loop
      muted
      {...props}
      poster={shouldLoadPoster ? poster : null}
    >
      {children}
    </StyledVideo>
  )
}
