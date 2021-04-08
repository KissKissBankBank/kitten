"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCropper = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCropper = _interopRequireDefault(require("react-cropper"));

var _getOr = _interopRequireDefault(require("lodash/fp/getOr"));

var _label = require("../../../components/form/label");

var _next = require("../../../components/typography/paragraph/next");

var _basicUploader = require("../../../components/uploaders/basic-uploader");

var _rangeSlider = require("../../../components/form/range-slider");

var _elementHelper = require("../../../helpers/dom/element-helper");

var _styles = require("./styles");

var ImageCropper = function ImageCropper(_ref) {
  var imageSrc = _ref.imageSrc,
      fileName = _ref.fileName,
      aspectRatio = _ref.aspectRatio,
      disabled = _ref.disabled,
      isCropEnabled = _ref.isCropEnabled,
      label = _ref.label,
      name = _ref.name,
      maxSize = _ref.maxSize,
      acceptedFiles = _ref.acceptedFiles,
      onChange = _ref.onChange,
      buttonLabel = _ref.buttonLabel,
      uploaderErrorLabel = _ref.uploaderErrorLabel,
      description = _ref.description,
      cropperInfo = _ref.cropperInfo,
      sliderTitle = _ref.sliderTitle,
      className = _ref.className;
  var cropperContainerRef = (0, _react.useRef)(null);
  var cropperRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(imageSrc),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      imageSrcState = _useState2[0],
      setImageSrc = _useState2[1];

  var _useState3 = (0, _react.useState)(fileName),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      fileNameState = _useState4[0],
      setFileName = _useState4[1];

  var _useState5 = (0, _react.useState)('ready'),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      status = _useState6[0],
      setStatus = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      errorText = _useState8[0],
      setErrorText = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      cropperWidth = _useState10[0],
      setCropperWidth = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      cropperHeight = _useState12[0],
      setCropperHeight = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      cropperInstance = _useState14[0],
      setCropperInstance = _useState14[1];

  var _useState15 = (0, _react.useState)(0),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      sliderMin = _useState16[0],
      setSliderMin = _useState16[1];

  var _useState17 = (0, _react.useState)(100),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      sliderMax = _useState18[0],
      setSliderMax = _useState18[1];

  var _useState19 = (0, _react.useState)(0),
      _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
      initialSliderValue = _useState20[0],
      setInitialSliderValue = _useState20[1];

  var _useState21 = (0, _react.useState)(null),
      _useState22 = (0, _slicedToArray2.default)(_useState21, 2),
      uploadedFile = _useState22[0],
      setUploadedFile = _useState22[1];

  var _useState23 = (0, _react.useState)(null),
      _useState24 = (0, _slicedToArray2.default)(_useState23, 2),
      resultData = _useState24[0],
      setResultData = _useState24[1];

  (0, _react.useEffect)(function () {
    if (cropperInstance && cropperInstance.imageData.naturalWidth) {
      var imageData = cropperInstance.imageData;
      var naturalWidth = imageData.naturalWidth;
      var width = imageData.width;
      var ratio = width / naturalWidth * 100;
      var min = sliderMin + ratio;
      var max = sliderMax + ratio;
      setSliderMin(min);
      setSliderMax(max);
      setInitialSliderValue(min);
    }
  }, [(0, _getOr.default)(null)('imageData.naturalWidth')(cropperInstance)]);

  var setCropperSize = function setCropperSize() {
    if (cropperContainerRef) {
      var width = _elementHelper.domElementHelper.getComputedWidth(cropperContainerRef.current);

      var height = width / aspectRatio;
      setCropperWidth(width);
      setCropperHeight(height);
    }
  };

  (0, _react.useEffect)(function () {
    setCropperSize();
    window.addEventListener('resize', setCropperSize);
    return function () {
      return window.removeEventListener('resize', setCropperSize);
    };
  }, []);
  (0, _react.useEffect)(function () {
    setCropperSize();
  }, [imageSrcState]);
  var styles = {
    width: cropperWidth,
    height: cropperHeight
  };
  (0, _react.useEffect)(function () {
    if (fileNameState && resultData) {
      onChange({
        value: resultData.target.src,
        base: (0, _getOr.default)(resultData.srcElement.src)('originalTarget.src')(resultData),
        name: fileNameState,
        file: uploadedFile,
        cropperData: resultData.detail
      });
    }
  }, [resultData, fileNameState, uploadedFile]);
  var dragMode = disabled || !isCropEnabled ? 'none' : 'move';
  return /*#__PURE__*/_react.default.createElement(_styles.StyledCropper, {
    className: (0, _classnames.default)('k-UploadAndCropper', className)
  }, /*#__PURE__*/_react.default.createElement(_label.Label, {
    size: "tiny",
    htmlFor: name,
    className: "k-u-margin-bottom-singleHalf"
  }, label), /*#__PURE__*/_react.default.createElement(_basicUploader.BasicUploader, {
    id: name,
    className: "k-u-margin-top-singleHalf k-u-margin-bottom-single",
    fileName: fileNameState,
    buttonText: buttonLabel,
    disabled: disabled,
    errorText: errorText,
    status: status,
    fileInputProps: {
      accept: acceptedFiles
    },
    onUpload: function onUpload(e) {
      try {
        var file = e.currentTarget.files[0];
        setUploadedFile(file);

        if (file.size > maxSize) {
          setStatus('error');
          setErrorText(uploaderErrorLabel);
        } else {
          var reader = new FileReader();

          reader.onload = function (event) {
            setImageSrc(event.target.result);
            setFileName(file.name);
          };

          reader.readAsDataURL(file);
        }
      } catch (e) {
        setStatus('error');
        setErrorText(uploaderErrorLabel);
      }
    },
    onCancel: function onCancel() {
      setImageSrc(imageSrc);
      setFileName(fileName);
      setErrorText('');
      setUploadedFile(null);
      onChange({
        value: null,
        name: null,
        file: null
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_next.Paragraph, {
    modifier: "tertiary",
    noMargin: true,
    className: "k-u-margin-top-single"
  }, description), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Cropper__wrapper k-u-margin-top-double",
    "aria-live": "polite"
  }, imageSrcState && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: cropperContainerRef,
    className: "k-Cropper__wrapper__cropper"
  }, cropperWidth && cropperHeight && /*#__PURE__*/_react.default.createElement(_reactCropper.default, {
    onInitialized: function onInitialized(instance) {
      setCropperInstance(instance);
    },
    ref: cropperRef,
    className: "k-Cropper",
    src: imageSrcState,
    style: styles,
    initialAspectRatio: aspectRatio,
    viewMode: 3,
    guides: false,
    modal: false,
    autoCropArea: 1,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
    zoomOnTouch: false,
    zoomOnWheel: false,
    dragMode: dragMode,
    crop: function crop(result) {
      setResultData(result);
    }
  })), isCropEnabled && !disabled && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Cropper__wrapper__slider"
  }, /*#__PURE__*/_react.default.createElement(_next.Paragraph, {
    modifier: "tertiary",
    noMargin: true,
    className: "k-u-margin-bottom-singleHalf"
  }, cropperInfo), /*#__PURE__*/_react.default.createElement(_label.Label, {
    size: "micro",
    htmlFor: "zoomSlider",
    className: "k-u-margin-top-singleHalf k-u-margin-bottom-single"
  }, sliderTitle), /*#__PURE__*/_react.default.createElement(_rangeSlider.RangeSlider, {
    id: "zoomSlider",
    name: "zoom",
    min: sliderMin,
    max: sliderMax,
    step: "any",
    initialValue: initialSliderValue,
    onChange: function onChange(event) {
      var value = event.target.value;
      cropperInstance && cropperInstance.zoomTo(value / 100);
    },
    className: "k-u-margin-top-single"
  })))));
};

exports.ImageCropper = ImageCropper;
ImageCropper.defaultProps = {
  name: 'picture',
  imageSrc: null,
  fileName: null,
  uploaderErrorLabel: 'You have an error on upload.',
  aspectRatio: 16 / 9,
  maxSize: 5 * 1024 * 1024,
  // 5 Mo.
  acceptedFiles: '.jpg,.jpeg,.gif,.png',
  label: 'Lorem ipsum…',
  cropperInfo: 'Move the image…',
  sliderTitle: 'Zoom…',
  buttonLabel: 'Choose a file…',
  description: 'Lorem ipsum…',
  disabled: false,
  isCropEnabled: true,
  onChange: function onChange(_fileData) {}
};