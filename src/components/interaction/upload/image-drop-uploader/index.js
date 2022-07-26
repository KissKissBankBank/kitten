"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ImageDropUploader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _closeButton = require("../../../action/close-button");

var _uploadIcon = require("../../../graphics/icons/upload-icon");

var _text = require("../../../typography/text");

var _imageCropper = require("./components/image-cropper");

var _imageDimensionsCheck = require("./utils/image-dimensions-check");

var _pauseEvent = require("./utils/pause-event");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CROP_WIDTH = 125;

const StyledImageDropUploader = _styledComponents.default.div.withConfig({
  displayName: "image-drop-uploader__StyledImageDropUploader",
  componentId: "sc-9eawgv-0"
})(["input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{outline:", " solid ", ";outline-offset:", ";}input[type='file']:focus-visible + label{outline:auto;outline-offset:initial;}.k-ImageDropUploader__button{box-sizing:border-box;display:flex;width:100%;padding:", ";border-radius:var(--border-radius-m);border:var(--border-width) dashed var(--color-grey-400);flex-direction:column;align-items:center;gap:", ";text-align:center;color:", ";cursor:pointer;background-color:var(--color-grey-000);transition:border-color 0.2s ease,color 0.2s ease;> *{pointer-events:none;}&:hover{border-color:", ";color:", ";}}.k-ImageDropUploader__button__uploadIcon{flex:0 0 auto;}.k-ImageDropUploader__manager{background-color:var(--color-grey-000);}input[type='file']:active:not(:disabled) + .k-ImageDropUploader__button{border-color:", ";color:", ";}&.k-ImageDropUploader--isDraggingOver .k-ImageDropUploader__button{border-color:", ";color:", ";border-style:solid;}&.k-ImageDropUploader--error{.k-ImageDropUploader__button,.k-ImageDropUploader__manager{border-color:", ";border-style:solid;}}&.k-ImageDropUploader--disabled{.k-ImageDropUploader__button,.k-ImageDropUploader__manager{border-color:", ";background-color:", ";color:var(--color-grey-700);cursor:not-allowed;}.k-ImageDropUploader__manager__cropper{pointer-events:none;background-color:", ";img{filter:grayscale(1) opacity(0.4);}}.k-ImageDropUploader__button__text,.k-ImageDropUploader__manager__text{color:var(--color-grey-600);}}.k-ImageDropUploader__button__title,.k-ImageDropUploader__manager__title{", " font-size:", ";line-height:1em;}.k-ImageDropUploader__button__text,.k-ImageDropUploader__manager__text{", " font-size:", ";color:", ";line-height:1em;}.k-ImageDropUploader__manager{border-radius:var(--border-radius-m);padding:", " ", " ", " ", ";width:100%;position:relative;box-sizing:border-box;border:var(--border);display:flex;gap:", ";}.k-ImageDropUploader__manager__cropper{background-color:", ";flex:0 0 ", ";width:", ";height:var(--ImageDropUploader-cropHeight,", ");overflow:hidden;position:relative;align-self:center;img{position:absolute;width:100%;height:100%;object-fit:cover;object-position:var(--ImageDropUploader-cropX,0) var(--ImageDropUploader-cropY,0);pointer-events:none;-moz-user-select:none;}}.k-ImageDropUploader__manager__content{align-self:center;}.k-ImageDropUploader__manager__cancelButton{position:absolute;top:", ";right:", ";border-top-right-radius:var(--border-radius-m);}.k-ImageDropUploader__imageCropper{cursor:grab;&:focus-visible{outline:auto;}&.k-ImageDropUploader__imageCropper--isDragging{cursor:grabbing;}}"], (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), _colorsConfig.default.font1, _colorsConfig.default.primary4, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.error2, _colorsConfig.default.line2, _colorsConfig.default.background2, _colorsConfig.default.background2, _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles['400'], (0, _typography.stepToRem)(-2), _colorsConfig.default.grey1, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(45), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), _colorsConfig.default.primary4, (0, _typography.pxToRem)(CROP_WIDTH), (0, _typography.pxToRem)(CROP_WIDTH), (0, _typography.pxToRem)(CROP_WIDTH), (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(-1));

const getCropHeight = ratio => CROP_WIDTH / ratio;

const ImageDropUploader = _ref => {
  let {
    id,
    acceptedFileSize = 5 * 1024 * 1024,
    acceptedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    acceptedImageDimensions = {
      width: 4096,
      height: 4096
    },
    buttonProps = {},
    buttonText = '',
    buttonTitle = '',
    canCancel = true,
    cancelButtonText = '',
    className = '',
    canCrop = true,
    cropRatio = 16 / 10,
    disabled = false,
    error = false,
    errorMessage = null,
    fileInputProps = {},
    initialCrop = null,
    initialValue = '',
    managerText = '',
    managerTitle = '',
    onCancel = () => {},
    onChange = () => {},
    onUpload = () => {},
    quantityErrorText = '',
    sizeErrorText = '',
    status = 'ready',
    typeErrorText = '',
    dimensionErrorText = ''
  } = _ref;
  const [internalStatus, setInternalStatus] = (0, _react.useState)(status);
  (0, _react.useEffect)(() => setInternalStatus(status), [status]);
  const [isDraggingOver, setDraggingOver] = (0, _react.useState)(false);
  const [imageRawData, setImageRawData] = (0, _react.useState)(null);
  const [imageDataURL, setImageDataURL] = (0, _react.useState)(initialValue);
  const [cropperData, setCropperData] = (0, _react.useState)({});
  const [internalInitialCrop, setInternalInitialCrop] = (0, _react.useState)(initialCrop);
  const [isError, setError] = (0, _react.useState)(error);
  const [internalErrorMessage, setErrorMessage] = (0, _react.useState)(errorMessage);
  (0, _react.useEffect)(() => {
    if (initialValue !== '') {
      setInternalStatus('manage');
    }

    setImageDataURL(initialValue);
  }, [initialValue]);

  const handleDragEnter = e => {
    (0, _pauseEvent.pauseEvent)(e);
    if (!isDraggedFileListValid(e)) return;
    setDraggingOver(true);
    setError(false);
  };

  const handleDragLeave = e => {
    (0, _pauseEvent.pauseEvent)(e);
    setDraggingOver(false);
    setError(false);
  };

  const handleDragOver = e => {
    (0, _pauseEvent.pauseEvent)(e);
  };

  const handleDrop = e => {
    (0, _pauseEvent.pauseEvent)(e);
    setDraggingOver(false);
    setError(false);
    if (!isDraggedFileListValid(e)) return;
    setInternalStatus('manage');
    const image = e.dataTransfer.files[0];
    setImageRawData(image);
  };

  const onFileInputChange = e => {
    setInternalStatus('manage');
    const image = e.target.files[0];
    setImageRawData(image);
  };

  const handleCancelClick = () => {
    setImageRawData(null);
    setImageDataURL('');
    setCropperData({});
    setInternalInitialCrop(null);
    setInternalStatus('ready');
    onCancel(true);
  };

  (0, _react.useEffect)(() => {
    const handleOnUploadCallback = async () => {
      const isValid = imageRawData && (await isSelectedImageValid(imageRawData));
      if (!isValid) return;
      setError(false);
      const reader = new FileReader();
      reader.readAsDataURL(imageRawData);

      reader.onloadend = () => {
        setImageDataURL(reader.result);
      };

      onUpload({
        value: reader.result,
        name: (imageRawData == null ? void 0 : imageRawData.name) || null,
        file: imageRawData || null
      });
    };

    handleOnUploadCallback();
  }, [imageRawData]);
  (0, _react.useEffect)(() => {
    const handleOnChangeCallback = async () => {
      const isValid = imageRawData && (await isSelectedImageValid(imageRawData));
      if (imageRawData && !isValid) return;
      onChange({
        value: imageDataURL,
        name: (imageRawData == null ? void 0 : imageRawData.name) || null,
        file: imageRawData || null,
        cropperData: cropperData
      });
    };

    handleOnChangeCallback();
  }, [imageDataURL, cropperData, imageRawData]);

  const handleCropperChange = exportedCropperData => {
    setCropperData(exportedCropperData);
  };

  const isDraggedFileListValid = event => {
    if (!acceptedMimeTypes.includes(event.dataTransfer.items[0].type)) {
      setError(true);
      setInternalStatus('ready');
      setErrorMessage(typeErrorText);
      return false;
    }

    if (event.dataTransfer.items.length > 1) {
      setError(true);
      setInternalStatus('ready');
      setErrorMessage(quantityErrorText);
      return false;
    }

    return true;
  };

  const isSelectedImageValid = async file => {
    if (file.size > acceptedFileSize) {
      setError(true);
      setInternalStatus('ready');
      setErrorMessage(sizeErrorText);
      return false;
    }

    const dimensionValidity = await (0, _imageDimensionsCheck.areImageDimensionsValid)(file, acceptedImageDimensions);

    if (!dimensionValidity) {
      setError(true);
      setInternalStatus('ready');
      setErrorMessage(dimensionErrorText);
      return false;
    }

    return true;
  };

  return /*#__PURE__*/_react.default.createElement(StyledImageDropUploader, {
    className: (0, _classnames.default)('k-ImageDropUploader', className, {
      'k-ImageDropUploader--isDraggingOver': isDraggingOver,
      'k-ImageDropUploader--error': isError,
      'k-ImageDropUploader--disabled': disabled
    })
  }, internalStatus === 'ready' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: disabled,
    "aria-describedby": isError && internalErrorMessage ? id + "-error-description" : null,
    accept: acceptedMimeTypes.join(', ')
  })), /*#__PURE__*/_react.default.createElement("label", (0, _extends2.default)({}, buttonProps, {
    htmlFor: id,
    className: (0, _classnames.default)('k-ImageDropUploader__button', buttonProps.className),
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop
  }), /*#__PURE__*/_react.default.createElement(_uploadIcon.UploadIcon, {
    "aria-hidden": true,
    className: "k-ImageDropUploader__button__uploadIcon",
    color: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-ImageDropUploader__button__title"
  }, buttonTitle), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-ImageDropUploader__button__text"
  }, buttonText))), internalStatus === 'manage' && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ImageDropUploader__manager"
  }, canCrop ? /*#__PURE__*/_react.default.createElement(_imageCropper.ImageCropper, {
    className: "k-ImageDropUploader__manager__cropper",
    style: {
      '--ImageDropUploader-cropHeight': (0, _typography.pxToRem)(getCropHeight(cropRatio))
    },
    src: imageDataURL,
    onChange: handleCropperChange,
    id: id + "-cropper",
    "aria-describedby": id + "-cropper-description",
    initialCrop: internalInitialCrop,
    disabled: disabled
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ImageDropUploader__manager__cropper",
    style: {
      '--ImageDropUploader-cropHeight': (0, _typography.pxToRem)(getCropHeight(cropRatio))
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: imageDataURL,
    style: {
      '--ImageDropUploader-cropX': '50%',
      '--ImageDropUploader-cropY': '50%'
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ImageDropUploader__manager__content",
    id: id + "-cropper-description"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ImageDropUploader__manager__title"
  }, managerTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ImageDropUploader__manager__text"
  }, managerText)), canCancel && /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    className: "k-ImageDropUploader__manager__cancelButton",
    onClick: !disabled ? handleCancelClick : null,
    disabled: disabled,
    size: "micro",
    closeButtonLabel: cancelButtonText
  })), isError && internalErrorMessage && /*#__PURE__*/_react.default.createElement(_text.Text, {
    id: id + "-error-description",
    as: "p",
    size: "micro",
    color: "error",
    weight: "700",
    className: "k-u-margin-top-noneHalf"
  }, internalErrorMessage));
};

exports.ImageDropUploader = ImageDropUploader;
ImageDropUploader.propTypes = {
  id: _propTypes.default.string.isRequired,
  acceptedFileSize: _propTypes.default.number,
  acceptedMimeTypes: _propTypes.default.array,
  buttonProps: _propTypes.default.object,
  buttonText: _propTypes.default.node,
  buttonTitle: _propTypes.default.node,
  canCancel: _propTypes.default.bool,
  canCrop: _propTypes.default.bool,
  cancelButtonText: _propTypes.default.string,
  cropRatio: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.node,
  fileInputProps: _propTypes.default.object,
  initialCrop: _propTypes.default.object,
  initialValue: _propTypes.default.string,
  managerText: _propTypes.default.node,
  managerTitle: _propTypes.default.node,
  onCancel: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onUpload: _propTypes.default.func,
  quantityErrorText: _propTypes.default.node,
  sizeErrorText: _propTypes.default.node,
  status: _propTypes.default.oneOf(['ready', 'error', 'manage']),
  typeErrorText: _propTypes.default.node
};