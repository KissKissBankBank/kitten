import { useState, useEffect } from 'react'

export const useDrag = ({startingPosition, imageDimensions}) => {
  const [isDragging, setDragging] = useState(false)
  const [origin, setOrigin] = useState({ x: 0, y: 0 })
  const [translation, setTranslation] = useState({ x: 0, y: 0})
  const [lastTranslation, setLastTranslation] = useState({ x: 0, y: 0})

  useEffect(() => {
    if(!imageDimensions) return

    if (startingPosition) {
      setTranslation(startingPosition)
      setLastTranslation(startingPosition)
    } else {
      const destination = getDestination({
        x: Math.round((imageDimensions.containedSize.width - imageDimensions.scaledSize.width) / 2),
        y: Math.round((imageDimensions.containedSize.height - imageDimensions.scaledSize.height) / 2),
      })
      setTranslation(destination)
      setLastTranslation(destination)
    }
  }, [startingPosition, imageDimensions])

  const handleMouseDown = ({ clientX, clientY, target }) => {
    if (!isDragging) {
      const rect = target.getBoundingClientRect()
      setDragging(true)
      setOrigin({
        x: clientX - rect.left - lastTranslation.x,
        y: clientY - rect.top - lastTranslation.y,
      })
    }
  }

  const handleMouseMove = ({ clientX, clientY, target }) => {
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

  return {
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
    }
  }
}
