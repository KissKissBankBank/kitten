import { useState, useEffect } from 'react'
import { pauseEvent } from '../utils/pause-event'

export const useDrag = ({startingPosition, imageDimensions, disabled}) => {
  const [isDragging, setDragging] = useState(false)
  const [origin, setOrigin] = useState({ x: 0, y: 0 })
  const [translation, setTranslation] = useState({ x: 0, y: 0})
  const [lastTranslation, setLastTranslation] = useState({ x: 0, y: 0})

  useEffect(() => {
    if(!imageDimensions) return

    if (startingPosition) {
      setTranslation(getDestination(startingPosition))
      setLastTranslation(getDestination(startingPosition))
    } else {
      const destination = getDestination({
        x: Math.round((imageDimensions.containedSize.width - imageDimensions.scaledSize.width) / 2),
        y: Math.round((imageDimensions.containedSize.height - imageDimensions.scaledSize.height) / 2),
      })
      setTranslation(destination)
      setLastTranslation(destination)
    }
  }, [startingPosition, imageDimensions])

  const handleMouseDown = e => {
    pauseEvent(e)
    const { clientX, clientY, target } = e

    if (!isDragging) {
      const rect = target.getBoundingClientRect()
      setDragging(true)
      setOrigin({
        x: clientX - rect.left - lastTranslation.x,
        y: clientY - rect.top - lastTranslation.y,
      })
    }
  }

  const handleMouseMove = e => {
    pauseEvent(e)
    const { clientX, clientY, target } = e

    if (isDragging) {
      const rect = target.getBoundingClientRect()

      if (clientX - rect.left < 0
        || clientX - rect.left > rect.width
        || clientY - rect.top < 0
        || clientY - rect.top > rect.height) {
        setDragging(false)
        setLastTranslation({ x: translation.x, y: translation.y })
        return
      }

      const destination = getDestination({
        x: (clientX - rect.left) - origin.x,
        y: (clientY - rect.top) - origin.y,
      })

      setTranslation({
        x: destination.x,
        y: destination.y,
      })
    }
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setDragging(false)
      setLastTranslation({ x: translation.x, y: translation.y })
    }
  }

  const handleKeyUp = (event) => {
    let direction = {x: 0, y: 0}

    switch(event.key) {
      case 'ArrowLeft':
        direction.x = -1
        break
      case 'ArrowRight':
        direction.x = 1
        break
      case 'ArrowUp':
        direction.y = -1
        break
      case 'ArrowDown':
        direction.y = 1
        break
    }

    if(event.shiftKey) {
      direction = {x: direction.x * 10, y: direction.y * 10}
    }

    const destination = getDestination({
      x: lastTranslation.x + direction.x,
      y: lastTranslation.y + direction.y,
    })

    setTranslation(destination)
    setLastTranslation(destination)
  }

  const getDestination = ({x, y}) => {
    let destinationX = x
    let destinationY = y

    if (x > 0) {
      destinationX = 0
    }
    if (y > 0) {
      destinationY = 0
    }

    if (-1 * Math.round(imageDimensions.scaledSize.width - imageDimensions.containedSize.width) > x) {
      destinationX = -1 * Math.round(imageDimensions.scaledSize.width - imageDimensions.containedSize.width)
    }
    if (-1 * Math.round(imageDimensions.scaledSize.height - imageDimensions.containedSize.height) > y) {
      destinationY = -1 * Math.round(imageDimensions.scaledSize.height - imageDimensions.containedSize.height)
    }

    return({
      x: destinationX,
      y: destinationY,
    })
  }

  if (disabled) {
    return {
      liveImagePosition: {
        x: translation.x,
        y: translation.y,
      },
      imagePosition: {
        x: lastTranslation.x,
        y: lastTranslation.y,
      },
      cropZoneProps: {},
      isDragging: false,
    }
  }

  return {
    isDragging,
    liveImagePosition: {
      x: translation.x,
      y: translation.y,
    },
    imagePosition: {
      x: lastTranslation.x,
      y: lastTranslation.y,
    },
    cropZoneProps: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseMove,
      onMouseUp: handleMouseUp,
      onKeyUp: handleKeyUp,
      tabIndex: 0,
    }
  }
}
