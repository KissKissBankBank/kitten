import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState, useRef } from 'react';
import Cropper from 'react-cropper';
import getOr from 'lodash/fp/getOr';
import { Marger } from '../../../components/layout/marger';
import { Grid, GridCol } from '../../../components/grid/grid';
import { Label } from '../../../components/form/label';
import { Paragraph } from '../../../components/typography/paragraph';
import { BasicUploader } from '../../../components/uploaders/basic-uploader';
import { Slider } from '../../../components/form/slider';
import { domElementHelper } from '../../../helpers/dom/element-helper';
export var ImageCropper = function ImageCropper(_ref) {
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
      sliderTitle = _ref.sliderTitle;
  var cropperContainerRef = useRef(null);
  var cropperRef = useRef(null);

  var _useState = useState(imageSrc),
      _useState2 = _slicedToArray(_useState, 2),
      imageSrcState = _useState2[0],
      setImageSrc = _useState2[1];

  var _useState3 = useState(fileName),
      _useState4 = _slicedToArray(_useState3, 2),
      fileNameState = _useState4[0],
      setFileName = _useState4[1];

  var _useState5 = useState('ready'),
      _useState6 = _slicedToArray(_useState5, 2),
      status = _useState6[0],
      setStatus = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      errorText = _useState8[0],
      setErrorText = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      cropperWidth = _useState10[0],
      setCropperWidth = _useState10[1];

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      cropperHeight = _useState12[0],
      setCropperHeight = _useState12[1];

  var _useState13 = useState(null),
      _useState14 = _slicedToArray(_useState13, 2),
      cropperInstance = _useState14[0],
      setCropperInstance = _useState14[1];

  var _useState15 = useState(0),
      _useState16 = _slicedToArray(_useState15, 2),
      sliderMin = _useState16[0],
      setSliderMin = _useState16[1];

  var _useState17 = useState(100),
      _useState18 = _slicedToArray(_useState17, 2),
      sliderMax = _useState18[0],
      setSliderMax = _useState18[1];

  var _useState19 = useState(0),
      _useState20 = _slicedToArray(_useState19, 2),
      sliderValue = _useState20[0],
      setSliderValue = _useState20[1];

  useEffect(function () {
    if (cropperInstance && cropperInstance.imageData.naturalWidth) {
      var imageData = cropperInstance.imageData;
      var naturalWidth = imageData.naturalWidth;
      var width = imageData.width;
      var ratio = width / naturalWidth * 100;
      var min = sliderMin + ratio;
      var max = sliderMax + ratio;
      setSliderMin(min);
      setSliderMax(max);
      setSliderValue(min);
    }
  }, [getOr(null)('imageData.naturalWidth')(cropperInstance)]);

  var setCropperSize = function setCropperSize() {
    if (cropperContainerRef) {
      var width = domElementHelper.getComputedWidth(cropperContainerRef.current);
      var height = width / aspectRatio;
      setCropperWidth(width);
      setCropperHeight(height);
    }
  };

  useEffect(function () {
    setCropperSize();
    window.addEventListener('resize', setCropperSize);
    return function () {
      return window.removeEventListener('resize', setCropperSize);
    };
  }, []);
  useEffect(function () {
    setCropperSize();
  }, [imageSrcState]);
  var styles = {
    width: cropperWidth,
    height: cropperHeight
  };
  var dragMode = disabled || !isCropEnabled ? 'none' : 'move';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Marger, {
    bottom: "1.5"
  }, /*#__PURE__*/React.createElement(Label, {
    size: "tiny"
  }, label)), /*#__PURE__*/React.createElement(Marger, {
    top: "1.5",
    bottom: "1"
  }, /*#__PURE__*/React.createElement(BasicUploader, {
    id: name,
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
      onChange({
        value: null,
        name: null
      });
    }
  })), /*#__PURE__*/React.createElement(Marger, {
    top: "1"
  }, /*#__PURE__*/React.createElement(Paragraph, {
    modifier: "quaternary",
    margin: false
  }, description)), imageSrcState && /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCol, {
    col: "12",
    "col-m": "6"
  }, /*#__PURE__*/React.createElement(Marger, {
    top: "2"
  }, /*#__PURE__*/React.createElement("div", {
    ref: cropperContainerRef
  }, cropperWidth && cropperHeight && /*#__PURE__*/React.createElement(Cropper, {
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
      onChange({
        value: result.target.src,
        base: getOr(result.srcElement.src)('originalTarget.src')(result),
        name: fileNameState,
        cropperData: result.detail
      });
    }
  })))), isCropEnabled && !disabled && /*#__PURE__*/React.createElement(GridCol, {
    col: "12",
    "col-m": "6"
  }, /*#__PURE__*/React.createElement(Marger, {
    top: "2",
    bottom: "1.5"
  }, /*#__PURE__*/React.createElement(Paragraph, {
    modifier: "quaternary",
    margin: false
  }, cropperInfo)), /*#__PURE__*/React.createElement(Marger, {
    top: "1.5",
    bottom: "1"
  }, /*#__PURE__*/React.createElement(Label, {
    size: "micro"
  }, sliderTitle)), /*#__PURE__*/React.createElement(Marger, {
    top: "1"
  }, /*#__PURE__*/React.createElement(Slider, {
    name: "zoom",
    min: sliderMin,
    max: sliderMax,
    value: sliderValue,
    onChange: function onChange(value) {
      setSliderValue(value);
      cropperInstance.zoomTo(value / 100);
    }
  })))));
};
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