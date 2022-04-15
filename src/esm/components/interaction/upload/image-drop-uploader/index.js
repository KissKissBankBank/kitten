import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { CloseButton } from '../../../action/close-button';
import { UploadIcon } from '../../../graphics/icons/upload-icon';
import { Text } from '../../../typography/text';
import { ImageCropper } from './components/image-cropper';
import { areImageDimensionsValid } from './utils/image-dimensions-check';
import { pauseEvent } from './utils/pause-event';
var CROP_WIDTH = 125;
var StyledImageDropUploader = styled.div.withConfig({
  displayName: "image-drop-uploader__StyledImageDropUploader",
  componentId: "sc-9eawgv-0"
})(["input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{outline:", " solid ", ";outline-offset:", ";}input[type='file']:focus-visible + label{outline:auto;outline-offset:initial;}.k-ImageDropUploader__button{box-sizing:border-box;display:flex;width:100%;padding:", ";border-radius:var(--border-radius-m);border:var(--border-width) dashed var(--color-grey-400);flex-direction:column;align-items:center;gap:", ";text-align:center;color:", ";cursor:pointer;background-color:var(--color-grey-000);transition:border-color 0.2s ease,color 0.2s ease;> *{pointer-events:none;}&:hover{border-color:", ";color:", ";}}.k-ImageDropUploader__button__uploadIcon{flex:0 0 auto;}.k-ImageDropUploader__manager{background-color:var(--color-grey-000);}input[type='file']:active:not(:disabled) + .k-ImageDropUploader__button{border-color:", ";color:", ";}&.k-ImageDropUploader--isDraggingOver .k-ImageDropUploader__button{border-color:", ";color:", ";border-style:solid;}&.k-ImageDropUploader--error{.k-ImageDropUploader__button,.k-ImageDropUploader__manager{border-color:", ";border-style:solid;}}&.k-ImageDropUploader--disabled{.k-ImageDropUploader__button,.k-ImageDropUploader__manager{border-color:", ";background-color:", ";color:var(--color-grey-700);cursor:not-allowed;}.k-ImageDropUploader__manager__cropper{pointer-events:none;background-color:", ";img{filter:grayscale(1) opacity(0.4);}}.k-ImageDropUploader__button__text,.k-ImageDropUploader__manager__text{color:var(--color-grey-600);}}.k-ImageDropUploader__button__title,.k-ImageDropUploader__manager__title{", " font-size:", ";line-height:1em;}.k-ImageDropUploader__button__text,.k-ImageDropUploader__manager__text{", " font-size:", ";color:", ";line-height:1em;}.k-ImageDropUploader__manager{border-radius:var(--border-radius-m);padding:", " ", " ", " ", ";width:100%;position:relative;box-sizing:border-box;border:var(--border);display:flex;gap:", ";}.k-ImageDropUploader__manager__cropper{background-color:", ";flex:0 0 ", ";width:", ";height:var(--ImageDropUploader-cropHeight,", ");overflow:hidden;position:relative;align-self:center;img{position:absolute;width:100%;height:100%;object-fit:cover;object-position:var(--ImageDropUploader-cropX,0) var(--ImageDropUploader-cropY,0);pointer-events:none;-moz-user-select:none;}}.k-ImageDropUploader__manager__content{align-self:center;}.k-ImageDropUploader__manager__cancelButton{position:absolute;top:", ";right:", ";border-top-right-radius:var(--border-radius-m);}.k-ImageDropUploader__imageCropper{cursor:grab;&:focus-visible{outline:auto;}&.k-ImageDropUploader__imageCropper--isDragging{cursor:grabbing;}}"], pxToRem(2), COLORS.primary4, pxToRem(-2), pxToRem(15), pxToRem(10), COLORS.font1, COLORS.primary4, COLORS.primary1, COLORS.primary1, COLORS.primary1, COLORS.primary1, COLORS.primary1, COLORS.error2, COLORS.line2, COLORS.background2, COLORS.background2, TYPOGRAPHY.fontStyles.regular, stepToRem(-1), TYPOGRAPHY.fontStyles.light, stepToRem(-2), COLORS.grey1, pxToRem(15), pxToRem(45), pxToRem(15), pxToRem(15), pxToRem(15), COLORS.primary4, pxToRem(CROP_WIDTH), pxToRem(CROP_WIDTH), pxToRem(CROP_WIDTH), pxToRem(-1), pxToRem(-1));

var getCropHeight = function getCropHeight(ratio) {
  return CROP_WIDTH / ratio;
};

export var ImageDropUploader = function ImageDropUploader(_ref) {
  var id = _ref.id,
      _ref$acceptedFileSize = _ref.acceptedFileSize,
      acceptedFileSize = _ref$acceptedFileSize === void 0 ? 5 * 1024 * 1024 : _ref$acceptedFileSize,
      _ref$acceptedMimeType = _ref.acceptedMimeTypes,
      acceptedMimeTypes = _ref$acceptedMimeType === void 0 ? ['image/jpeg', 'image/png', 'image/gif', 'image/webp'] : _ref$acceptedMimeType,
      _ref$acceptedImageDim = _ref.acceptedImageDimensions,
      acceptedImageDimensions = _ref$acceptedImageDim === void 0 ? {
    width: 4096,
    height: 4096
  } : _ref$acceptedImageDim,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? '' : _ref$buttonText,
      _ref$buttonTitle = _ref.buttonTitle,
      buttonTitle = _ref$buttonTitle === void 0 ? '' : _ref$buttonTitle,
      _ref$canCancel = _ref.canCancel,
      canCancel = _ref$canCancel === void 0 ? true : _ref$canCancel,
      _ref$cancelButtonText = _ref.cancelButtonText,
      cancelButtonText = _ref$cancelButtonText === void 0 ? '' : _ref$cancelButtonText,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$canCrop = _ref.canCrop,
      canCrop = _ref$canCrop === void 0 ? true : _ref$canCrop,
      _ref$cropRatio = _ref.cropRatio,
      cropRatio = _ref$cropRatio === void 0 ? 16 / 10 : _ref$cropRatio,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === void 0 ? null : _ref$errorMessage,
      _ref$fileInputProps = _ref.fileInputProps,
      fileInputProps = _ref$fileInputProps === void 0 ? {} : _ref$fileInputProps,
      _ref$initialCrop = _ref.initialCrop,
      initialCrop = _ref$initialCrop === void 0 ? null : _ref$initialCrop,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? '' : _ref$initialValue,
      _ref$managerText = _ref.managerText,
      managerText = _ref$managerText === void 0 ? '' : _ref$managerText,
      _ref$managerTitle = _ref.managerTitle,
      managerTitle = _ref$managerTitle === void 0 ? '' : _ref$managerTitle,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$onUpload = _ref.onUpload,
      onUpload = _ref$onUpload === void 0 ? function () {} : _ref$onUpload,
      _ref$quantityErrorTex = _ref.quantityErrorText,
      quantityErrorText = _ref$quantityErrorTex === void 0 ? '' : _ref$quantityErrorTex,
      _ref$sizeErrorText = _ref.sizeErrorText,
      sizeErrorText = _ref$sizeErrorText === void 0 ? '' : _ref$sizeErrorText,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'ready' : _ref$status,
      _ref$typeErrorText = _ref.typeErrorText,
      typeErrorText = _ref$typeErrorText === void 0 ? '' : _ref$typeErrorText,
      _ref$dimensionErrorTe = _ref.dimensionErrorText,
      dimensionErrorText = _ref$dimensionErrorTe === void 0 ? '' : _ref$dimensionErrorTe;

  var _useState = useState(status),
      internalStatus = _useState[0],
      setInternalStatus = _useState[1];

  useEffect(function () {
    return setInternalStatus(status);
  }, [status]);

  var _useState2 = useState(false),
      isDraggingOver = _useState2[0],
      setDraggingOver = _useState2[1];

  var _useState3 = useState(null),
      imageRawData = _useState3[0],
      setImageRawData = _useState3[1];

  var _useState4 = useState(initialValue),
      imageDataURL = _useState4[0],
      setImageDataURL = _useState4[1];

  var _useState5 = useState({}),
      cropperData = _useState5[0],
      setCropperData = _useState5[1];

  var _useState6 = useState(initialCrop),
      internalInitialCrop = _useState6[0],
      setInternalInitialCrop = _useState6[1];

  var _useState7 = useState(error),
      isError = _useState7[0],
      setError = _useState7[1];

  var _useState8 = useState(errorMessage),
      internalErrorMessage = _useState8[0],
      setErrorMessage = _useState8[1];

  useEffect(function () {
    if (initialValue !== '') {
      setInternalStatus('manage');
    }

    setImageDataURL(initialValue);
  }, [initialValue]);

  var handleDragEnter = function handleDragEnter(e) {
    pauseEvent(e);
    if (!isDraggedFileListValid(e)) return;
    setDraggingOver(true);
    setError(false);
  };

  var handleDragLeave = function handleDragLeave(e) {
    pauseEvent(e);
    setDraggingOver(false);
    setError(false);
  };

  var handleDragOver = function handleDragOver(e) {
    pauseEvent(e);
  };

  var handleDrop = function handleDrop(e) {
    pauseEvent(e);
    setDraggingOver(false);
    setError(false);
    if (!isDraggedFileListValid(e)) return;
    setInternalStatus('manage');
    var image = e.dataTransfer.files[0];
    setImageRawData(image);
  };

  var onFileInputChange = function onFileInputChange(e) {
    setInternalStatus('manage');
    var image = e.target.files[0];
    setImageRawData(image);
  };

  var handleCancelClick = function handleCancelClick() {
    setImageRawData(null);
    setImageDataURL('');
    setCropperData({});
    setInternalInitialCrop(null);
    setInternalStatus('ready');
    onCancel(true);
  };

  useEffect(function () {
    var handleOnUploadCallback = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var isValid, reader;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = imageRawData;

                if (!_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.next = 4;
                return isSelectedImageValid(imageRawData);

              case 4:
                _context.t0 = _context.sent;

              case 5:
                isValid = _context.t0;

                if (isValid) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                setError(false);
                reader = new FileReader();
                reader.readAsDataURL(imageRawData);

                reader.onloadend = function () {
                  setImageDataURL(reader.result);
                };

                onUpload({
                  value: reader.result,
                  name: (imageRawData == null ? void 0 : imageRawData.name) || null,
                  file: imageRawData || null
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleOnUploadCallback() {
        return _ref2.apply(this, arguments);
      };
    }();

    handleOnUploadCallback();
  }, [imageRawData]);
  useEffect(function () {
    var handleOnChangeCallback = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var isValid;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = imageRawData;

                if (!_context2.t0) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 4;
                return isSelectedImageValid(imageRawData);

              case 4:
                _context2.t0 = _context2.sent;

              case 5:
                isValid = _context2.t0;

                if (!(imageRawData && !isValid)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return");

              case 8:
                onChange({
                  value: imageDataURL,
                  name: (imageRawData == null ? void 0 : imageRawData.name) || null,
                  file: imageRawData || null,
                  cropperData: cropperData
                });
                handleOnChangeCallback();

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function handleOnChangeCallback() {
        return _ref3.apply(this, arguments);
      };
    }();
  }, [imageDataURL, cropperData, imageRawData]);

  var handleCropperChange = function handleCropperChange(exportedCropperData) {
    setCropperData(exportedCropperData);
  };

  var isDraggedFileListValid = function isDraggedFileListValid(event) {
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

  var isSelectedImageValid = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(file) {
      var dimensionValidity;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(file.size > acceptedFileSize)) {
                _context3.next = 5;
                break;
              }

              setError(true);
              setInternalStatus('ready');
              setErrorMessage(sizeErrorText);
              return _context3.abrupt("return", false);

            case 5:
              _context3.next = 7;
              return areImageDimensionsValid(file, acceptedImageDimensions);

            case 7:
              dimensionValidity = _context3.sent;

              if (dimensionValidity) {
                _context3.next = 13;
                break;
              }

              setError(true);
              setInternalStatus('ready');
              setErrorMessage(dimensionErrorText);
              return _context3.abrupt("return", false);

            case 13:
              return _context3.abrupt("return", true);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function isSelectedImageValid(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(StyledImageDropUploader, {
    className: classNames('k-ImageDropUploader', className, {
      'k-ImageDropUploader--isDraggingOver': isDraggingOver,
      'k-ImageDropUploader--error': isError,
      'k-ImageDropUploader--disabled': disabled
    })
  }, internalStatus === 'ready' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", _extends({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: disabled,
    "aria-describedby": isError && internalErrorMessage ? id + "-error-description" : null,
    accept: acceptedMimeTypes.join(', ')
  })), /*#__PURE__*/React.createElement("label", _extends({}, buttonProps, {
    htmlFor: id,
    className: classNames('k-ImageDropUploader__button', buttonProps.className),
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop
  }), /*#__PURE__*/React.createElement(UploadIcon, {
    "aria-hidden": true,
    className: "k-ImageDropUploader__button__uploadIcon",
    color: "currentColor"
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-ImageDropUploader__button__title"
  }, buttonTitle), /*#__PURE__*/React.createElement("span", {
    className: "k-ImageDropUploader__button__text"
  }, buttonText))), internalStatus === 'manage' && /*#__PURE__*/React.createElement("div", {
    className: "k-ImageDropUploader__manager"
  }, canCrop ? /*#__PURE__*/React.createElement(ImageCropper, {
    className: "k-ImageDropUploader__manager__cropper",
    style: {
      '--ImageDropUploader-cropHeight': pxToRem(getCropHeight(cropRatio))
    },
    src: imageDataURL,
    onChange: handleCropperChange,
    id: id + "-cropper",
    "aria-describedby": id + "-cropper-description",
    initialCrop: internalInitialCrop,
    disabled: disabled
  }) : /*#__PURE__*/React.createElement("div", {
    className: "k-ImageDropUploader__manager__cropper",
    style: {
      '--ImageDropUploader-cropHeight': pxToRem(getCropHeight(cropRatio))
    }
  }, /*#__PURE__*/React.createElement("img", {
    alt: "",
    src: imageDataURL,
    style: {
      '--ImageDropUploader-cropX': '50%',
      '--ImageDropUploader-cropY': '50%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-ImageDropUploader__manager__content",
    id: id + "-cropper-description"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-ImageDropUploader__manager__title"
  }, managerTitle), /*#__PURE__*/React.createElement("div", {
    className: "k-ImageDropUploader__manager__text"
  }, managerText)), canCancel && /*#__PURE__*/React.createElement(CloseButton, {
    className: "k-ImageDropUploader__manager__cancelButton",
    onClick: !disabled ? handleCancelClick : null,
    disabled: disabled,
    size: "micro",
    closeButtonLabel: cancelButtonText
  })), isError && internalErrorMessage && /*#__PURE__*/React.createElement(Text, {
    id: id + "-error-description",
    as: "p",
    size: "micro",
    color: "error",
    weight: "bold",
    className: "k-u-margin-top-noneHalf"
  }, internalErrorMessage));
};
ImageDropUploader.propTypes = {
  id: PropTypes.string.isRequired,
  acceptedFileSize: PropTypes.number,
  acceptedMimeTypes: PropTypes.array,
  buttonProps: PropTypes.object,
  buttonText: PropTypes.node,
  buttonTitle: PropTypes.node,
  canCancel: PropTypes.bool,
  canCrop: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  cropRatio: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.node,
  fileInputProps: PropTypes.object,
  initialCrop: PropTypes.object,
  initialValue: PropTypes.string,
  managerText: PropTypes.node,
  managerTitle: PropTypes.node,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onUpload: PropTypes.func,
  quantityErrorText: PropTypes.node,
  sizeErrorText: PropTypes.node,
  status: PropTypes.oneOf(['ready', 'error', 'manage']),
  typeErrorText: PropTypes.node
};