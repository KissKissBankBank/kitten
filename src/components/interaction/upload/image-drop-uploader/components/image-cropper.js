"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ImageCropper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useDrag = require("../hooks/use-drag");

var _usePrevious = require("../../../../../helpers/hooks/use-previous");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ImageCropper = _ref => {
  let {
    src,
    onChange,
    className,
    initialCrop,
    disabled,
    ...props
  } = _ref;
  const [imageDimensions, setImageDimensions] = (0, _react.useState)(null);
  const [scaledInitialCrop, setScaledInitialCrop] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
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
  } = (0, _useDrag.useDrag)({
    startingPosition: scaledInitialCrop,
    imageDimensions,
    disabled
  });
  const previousImagePosition = (0, _usePrevious.usePrevious)(imagePosition);
  (0, _react.useEffect)(() => {
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

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, cropZoneProps, {
    className: (0, _classnames.default)('k-ImageDropUploader__imageCropper', className, {
      'k-ImageDropUploader__imageCropper--isDragging': isDragging
    })
  }), /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: src,
    style: {
      '--ImageDropUploader-cropX': liveImagePosition.x + "px",
      '--ImageDropUploader-cropY': liveImagePosition.y + "px"
    },
    onLoad: handleImageLoad
  }));
};

exports.ImageCropper = ImageCropper;