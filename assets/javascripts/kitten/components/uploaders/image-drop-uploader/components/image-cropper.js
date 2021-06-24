import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import { useDrag } from '../hooks/use-drag'
import { usePrevious } from '../../../../helpers/utils/use-previous-hook'

export const ImageCropper = ({
  src,
  onChange,
  startingPosition = null,
  className,
  ...props
}) => {
  const [imageDimensions, setImageDimensions] = useState(null)

  const {
    cropZoneProps,
    imagePosition,
    liveImagePosition,
    isDragging,
  } = useDrag({
    startingPosition,
    imageDimensions,
  })
  const previousImagePosition = usePrevious(imagePosition)

  useEffect(() => {
    if (!imageDimensions) return
    if (previousImagePosition?.x === imagePosition.x && previousImagePosition?.y === imagePosition.y) return

    const cropValue = {
      x: Math.round(Math.abs(imagePosition.x * imageDimensions.scaleRatio)),
      y: Math.round(Math.abs(imagePosition.y * imageDimensions.scaleRatio)),
      width: Math.round(imageDimensions.containedSize.width * imageDimensions.scaleRatio),
      height: Math.round(imageDimensions.containedSize.height * imageDimensions.scaleRatio),
    }

    onChange({cropValue, imagePosition})
  }, [imagePosition])

  const getRatio = (size) => (size.height / size.width)

  const handleImageLoad = (e) => {
    const naturalSize = {
      width: e.target.naturalWidth,
      height: e.target.naturalHeight,
    }

    const containedSize = {
      width: e.target.width,
      height: e.target.height,
    }

    let scaledSize = { width: 0, height: 0 }

    if (getRatio(naturalSize) === getRatio(containedSize)) {
      scaledSize = { ...containedSize }
    } else if (getRatio(naturalSize) > getRatio(containedSize)) {
      scaledSize = {
        width: e.target.width,
        height: Math.round(e.target.width * getRatio(naturalSize)),
      }
    } else {
      scaledSize = {
        width: Math.round(e.target.height / getRatio(naturalSize)),
        height: e.target.height,
      }
    }

    const scaleRatio = naturalSize.width / scaledSize.width

    setImageDimensions({
      naturalSize,
      containedSize,
      scaledSize,
      scaleRatio,
    })
  }

  return (
    <div
      {...props}
      {...cropZoneProps}
      className={classNames(
        'k-ImageDropUploader-imageCropper',
        className,
        {'k-ImageDropUploader-imageCropper--isDragging': isDragging}
      )}
    >
      <img
        alt=""
        src={src}
        style={{
          '--ImageDropUploader-cropX': `${liveImagePosition.x}px`,
          '--ImageDropUploader-cropY': `${liveImagePosition.y}px`,
        }}
        onLoad={handleImageLoad}
      />
    </div>
  )
}
