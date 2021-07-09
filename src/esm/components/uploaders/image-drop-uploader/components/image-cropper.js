import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useDrag } from '../hooks/use-drag';
import { usePrevious } from '../../../../helpers/utils/use-previous-hook';
export var ImageCropper = function ImageCropper(_ref) {
  var src = _ref.src,
      onChange = _ref.onChange,
      className = _ref.className,
      initialCrop = _ref.initialCrop,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["src", "onChange", "className", "initialCrop", "disabled"]);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      imageDimensions = _useState2[0],
      setImageDimensions = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      scaledInitialCrop = _useState4[0],
      setScaledInitialCrop = _useState4[1];

  useEffect(function () {
    if (!initialCrop || !imageDimensions) return;
    setScaledInitialCrop({
      x: -1 * Math.round(initialCrop.x / imageDimensions.scaleRatio),
      y: -1 * Math.round(initialCrop.y / imageDimensions.scaleRatio)
    });
  }, [imageDimensions, initialCrop]);

  var _useDrag = useDrag({
    startingPosition: scaledInitialCrop,
    imageDimensions: imageDimensions,
    disabled: disabled
  }),
      cropZoneProps = _useDrag.cropZoneProps,
      imagePosition = _useDrag.imagePosition,
      liveImagePosition = _useDrag.liveImagePosition,
      isDragging = _useDrag.isDragging;

  var previousImagePosition = usePrevious(imagePosition);
  useEffect(function () {
    if (!imageDimensions) return;
    if ((previousImagePosition === null || previousImagePosition === void 0 ? void 0 : previousImagePosition.x) === imagePosition.x && (previousImagePosition === null || previousImagePosition === void 0 ? void 0 : previousImagePosition.y) === imagePosition.y) return;
    var cropValue = {
      x: Math.round(Math.abs(imagePosition.x * imageDimensions.scaleRatio)),
      y: Math.round(Math.abs(imagePosition.y * imageDimensions.scaleRatio)),
      width: Math.round(imageDimensions.containedSize.width * imageDimensions.scaleRatio),
      height: Math.round(imageDimensions.containedSize.height * imageDimensions.scaleRatio)
    };
    var cropPercent = {
      x: Math.abs(imagePosition.x) * 100 / Math.abs(imageDimensions.containedSize.width - imageDimensions.scaledSize.width || 1),
      y: Math.abs(imagePosition.y) * 100 / Math.abs(imageDimensions.containedSize.height - imageDimensions.scaledSize.height || 1)
    };
    onChange({
      cropValue: cropValue,
      imagePosition: imagePosition,
      cropPercent: cropPercent
    });
  }, [imagePosition]);

  var getRatio = function getRatio(size) {
    return size.height / size.width;
  };

  var handleImageLoad = function handleImageLoad(e) {
    var naturalSize = {
      width: e.target.naturalWidth,
      height: e.target.naturalHeight
    };
    var containedSize = {
      width: e.target.width,
      height: e.target.height
    };
    var scaledSize = {
      width: 0,
      height: 0
    };

    if (getRatio(naturalSize) === getRatio(containedSize)) {
      scaledSize = _extends({}, containedSize);
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

    var scaleRatio = naturalSize.width / scaledSize.width;
    setImageDimensions({
      naturalSize: naturalSize,
      containedSize: containedSize,
      scaledSize: scaledSize,
      scaleRatio: scaleRatio
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
      '--ImageDropUploader-cropX': "".concat(liveImagePosition.x, "px"),
      '--ImageDropUploader-cropY': "".concat(liveImagePosition.y, "px")
    },
    onLoad: handleImageLoad
  }));
};