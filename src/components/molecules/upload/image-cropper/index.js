"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ImageCropper = void 0;

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCropper = _interopRequireDefault(require("react-cropper"));

var _getOr = _interopRequireDefault(require("lodash/fp/getOr"));

var _label = require("../../../../components/form/label");

var _next = require("../../../../components/atoms/typography/paragraph/next");

var _basicUploader = require("../../../../components/molecules/upload/basic-uploader");

var _rangeSlider = require("../../../../components/form/range-slider");

var _elementHelper = require("../../../../helpers/dom/element-helper");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      _onUpload = _ref.onUpload,
      buttonLabel = _ref.buttonLabel,
      uploaderErrorLabel = _ref.uploaderErrorLabel,
      description = _ref.description,
      cropperInfo = _ref.cropperInfo,
      sliderTitle = _ref.sliderTitle,
      className = _ref.className,
      buttonProps = _ref.buttonProps;
  var cropperContainerRef = (0, _react.useRef)(null);
  var cropperRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(imageSrc),
      imageSrcState = _useState[0],
      setImageSrc = _useState[1];

  var _useState2 = (0, _react.useState)(fileName),
      fileNameState = _useState2[0],
      setFileName = _useState2[1];

  var _useState3 = (0, _react.useState)('ready'),
      status = _useState3[0],
      setStatus = _useState3[1];

  var _useState4 = (0, _react.useState)(''),
      errorText = _useState4[0],
      setErrorText = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      cropperWidth = _useState5[0],
      setCropperWidth = _useState5[1];

  var _useState6 = (0, _react.useState)(0),
      cropperHeight = _useState6[0],
      setCropperHeight = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      cropperInstance = _useState7[0],
      setCropperInstance = _useState7[1];

  var _useState8 = (0, _react.useState)(0),
      sliderMin = _useState8[0],
      setSliderMin = _useState8[1];

  var _useState9 = (0, _react.useState)(100),
      sliderMax = _useState9[0],
      setSliderMax = _useState9[1];

  var _useState10 = (0, _react.useState)(0),
      initialSliderValue = _useState10[0],
      setInitialSliderValue = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      uploadedFile = _useState11[0],
      setUploadedFile = _useState11[1];

  var _useState12 = (0, _react.useState)(null),
      resultData = _useState12[0],
      setResultData = _useState12[1];

  var handleCalculateSliderValues = function handleCalculateSliderValues() {
    var _cropperInstance$imag;

    if (cropperInstance && cropperInstance != null && (_cropperInstance$imag = cropperInstance.imageData) != null && _cropperInstance$imag.naturalWidth) {
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
  };

  (0, _react.useEffect)(function () {
    handleCalculateSliderValues();
  }, [(0, _getOr.default)(null)('imageData.naturalWidth')(cropperInstance)]);

  var setCropperSize = function setCropperSize() {
    if (cropperContainerRef != null && cropperContainerRef.current) {
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
      var _resultData$target, _resultData$srcElemen, _cropperInstance$getC;

      onChange({
        value: (resultData == null ? void 0 : (_resultData$target = resultData.target) == null ? void 0 : _resultData$target.src) || '',
        base: (0, _getOr.default)(resultData == null ? void 0 : (_resultData$srcElemen = resultData.srcElement) == null ? void 0 : _resultData$srcElemen.src)('originalTarget.src')(resultData),
        name: fileNameState,
        file: uploadedFile,
        cropperData: resultData.detail,
        croppedImageSrc: cropperInstance ? cropperInstance == null ? void 0 : (_cropperInstance$getC = cropperInstance.getCroppedCanvas()) == null ? void 0 : _cropperInstance$getC.toDataURL() : ''
      });
    }
  }, [resultData, fileNameState, uploadedFile]);
  var dragMode = disabled || !isCropEnabled ? 'none' : 'move';
  return /*#__PURE__*/_react.default.createElement(_styles.StyledCropper, {
    className: (0, _classnames.default)('k-UploadAndCropper', className)
  }, /*#__PURE__*/_react.default.createElement(_label.Label, {
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
            handleCalculateSliderValues();
            cropperInstance == null ? void 0 : cropperInstance.reset();
          };

          reader.readAsDataURL(file);
        }
      } catch (e) {
        setStatus('error');
        setErrorText(uploaderErrorLabel);
      }

      if (_onUpload) {
        _onUpload(e);
      }
    },
    onCancel: function onCancel() {
      cropperInstance == null ? void 0 : cropperInstance.reset();
      setImageSrc(imageSrc);
      setFileName(fileName);
      setErrorText('');
      setUploadedFile(null);
      onChange({
        value: null,
        name: null,
        file: null
      });
    },
    buttonProps: buttonProps
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
  }, /*#__PURE__*/_react.default.createElement(_reactCropper.default, {
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
  uploaderErrorLabel: 'There was an error on upload.',
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
  onChange: function onChange(_fileData) {},
  onUpload: function onUpload() {},
  buttonProps: {}
};