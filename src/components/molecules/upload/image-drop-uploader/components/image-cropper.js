"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCropper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useDrag2 = require("../hooks/use-drag");

var _usePreviousHook = require("../../../../../helpers/utils/use-previous-hook");

var _excluded = ["src", "onChange", "className", "initialCrop", "disabled"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ImageCropper = function ImageCropper(_ref) {
  var src = _ref.src,
      onChange = _ref.onChange,
      className = _ref.className,
      initialCrop = _ref.initialCrop,
      disabled = _ref.disabled,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      imageDimensions = _useState2[0],
      setImageDimensions = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      scaledInitialCrop = _useState4[0],
      setScaledInitialCrop = _useState4[1];

  (0, _react.useEffect)(function () {
    if (!initialCrop || !imageDimensions) return;
    setScaledInitialCrop({
      x: -1 * Math.round(initialCrop.x / imageDimensions.scaleRatio),
      y: -1 * Math.round(initialCrop.y / imageDimensions.scaleRatio)
    });
  }, [imageDimensions, initialCrop]);

  var _useDrag = (0, _useDrag2.useDrag)({
    startingPosition: scaledInitialCrop,
    imageDimensions: imageDimensions,
    disabled: disabled
  }),
      cropZoneProps = _useDrag.cropZoneProps,
      imagePosition = _useDrag.imagePosition,
      liveImagePosition = _useDrag.liveImagePosition,
      isDragging = _useDrag.isDragging;

  var previousImagePosition = (0, _usePreviousHook.usePrevious)(imagePosition);
  (0, _react.useEffect)(function () {
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
      scaledSize = (0, _extends2.default)({}, containedSize);
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

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, cropZoneProps, {
    className: (0, _classnames.default)('k-ImageDropUploader__imageCropper', className, {
      'k-ImageDropUploader__imageCropper--isDragging': isDragging
    })
  }), /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: src,
    style: {
      '--ImageDropUploader-cropX': "".concat(liveImagePosition.x, "px"),
      '--ImageDropUploader-cropY': "".concat(liveImagePosition.y, "px")
    },
    onLoad: handleImageLoad
  }));
};

exports.ImageCropper = ImageCropper;