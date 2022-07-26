import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useDrag } from '../hooks/use-drag';
import { usePrevious } from '../../../../../helpers/hooks/use-previous';
export const ImageCropper = _ref => {
  let {
    src,
    onChange,
    className,
    initialCrop,
    disabled,
    ...props
  } = _ref;
  const [imageDimensions, setImageDimensions] = useState(null);
  const [scaledInitialCrop, setScaledInitialCrop] = useState(null);
  useEffect(() => {
    if (!initialCrop || !imageDimensions) return;
    setScaledInitialCrop({
      x: -1 * Math.round(initialCrop.x / imageDimensions.scaleRatio),
      y: -1 * Math.round(initialCrop.y / imageDimensions.scaleRatio)
    });
  }, [imageDimensions, initialCrop]);
  const {
    cropZoneProps,
    imagePosition,
    liveImagePosition,
    isDragging
  } = useDrag({
    startingPosition: scaledInitialCrop,
    imageDimensions,
    disabled
  });
  const previousImagePosition = usePrevious(imagePosition);
  useEffect(() => {
    if (!imageDimensions) return;
    if ((previousImagePosition == null ? void 0 : previousImagePosition.x) === imagePosition.x && (previousImagePosition == null ? void 0 : previousImagePosition.y) === imagePosition.y) return;
    const cropValue = {
      x: Math.round(Math.abs(imagePosition.x * imageDimensions.scaleRatio)),
      y: Math.round(Math.abs(imagePosition.y * imageDimensions.scaleRatio)),
      width: Math.round(imageDimensions.containedSize.width * imageDimensions.scaleRatio),
      height: Math.round(imageDimensions.containedSize.height * imageDimensions.scaleRatio)
    };
    const cropPercent = {
      x: Math.abs(imagePosition.x) * 100 / Math.abs(imageDimensions.containedSize.width - imageDimensions.scaledSize.width || 1),
      y: Math.abs(imagePosition.y) * 100 / Math.abs(imageDimensions.containedSize.height - imageDimensions.scaledSize.height || 1)
    };
    onChange({
      cropValue,
      imagePosition,
      cropPercent
    });
  }, [imagePosition]);

  const getRatio = size => size.height / size.width;

  const handleImageLoad = e => {
    const naturalSize = {
      width: e.target.naturalWidth,
      height: e.target.naturalHeight
    };
    const containedSize = {
      width: e.target.width,
      height: e.target.height
    };
    let scaledSize = {
      width: 0,
      height: 0
    };

    if (getRatio(naturalSize) === getRatio(containedSize)) {
      scaledSize = { ...containedSize
      };
    } else if (getRatio(naturalSize) > getRatio(containedSize)) {
      scaledSize = {
        width: e.target.width,
        height: Math.round(e.target.width * getRatio(naturalSize))
      };
    } else {
      scaledSize = {
        width: Math.round(e.target.height / getRatio(naturalSize)),
        height: e.target.height
      };
    }

    const scaleRatio = naturalSize.width / scaledSize.width;
    setImageDimensions({
      naturalSize,
      containedSize,
      scaledSize,
      scaleRatio
    });
  };

  return /*#__PURE__*/React.createElement("div", _extends({}, props, cropZoneProps, {
    className: classNames('k-ImageDropUploader__imageCropper', className, {
      'k-ImageDropUploader__imageCropper--isDragging': isDragging
    })
  }), /*#__PURE__*/React.createElement("img", {
    alt: "",
    src: src,
    style: {
      '--ImageDropUploader-cropX': liveImagePosition.x + "px",
      '--ImageDropUploader-cropY': liveImagePosition.y + "px"
    },
    onLoad: handleImageLoad
  }));
};