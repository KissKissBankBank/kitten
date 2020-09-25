import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import Cropper from 'react-cropper';
import { Marger } from '../../components/layout/marger';
import { Grid, GridCol } from '../../components/grid/grid';
import { Text } from '../../components/typography/text';
import { Label } from '../../components/form/label';
import { Paragraph } from '../../components/typography/paragraph';
import { SimpleUploader } from '../../components/uploaders/simple-uploader';
import { Slider } from '../../components/form/slider';
import { domElementHelper } from '../../helpers/dom/element-helper';
export var ImageCropper = /*#__PURE__*/function (_React$Component) {
  _inherits(ImageCropper, _React$Component);

  var _super = _createSuper(ImageCropper);

  function ImageCropper(props) {
    var _this;

    _classCallCheck(this, ImageCropper);

    _this = _super.call(this, props);
    _this.state = _extends({}, _this.initialState(), {
      hasErrorOnUploader: false,
      cropperWidth: null,
      cropperHeight: null,
      imageSrc: _this.props.imageSrc,
      fileName: _this.props.fileName
    });
    _this.handleUploaderSuccess = _this.handleUploaderSuccess.bind(_assertThisInitialized(_this));
    _this.handleUploaderError = _this.handleUploaderError.bind(_assertThisInitialized(_this));
    _this.handleUploaderReset = _this.handleUploaderReset.bind(_assertThisInitialized(_this));
    _this.handleSliderChange = _this.handleSliderChange.bind(_assertThisInitialized(_this));
    _this.handleSliderAction = _this.handleSliderAction.bind(_assertThisInitialized(_this));
    _this.handleReady = _this.handleReady.bind(_assertThisInitialized(_this));
    _this.handleCrop = _this.handleCrop.bind(_assertThisInitialized(_this));
    _this.renderError = _this.renderError.bind(_assertThisInitialized(_this));
    _this.setCropperHeight = _this.setCropperHeight.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ImageCropper, [{
    key: "initialState",
    value: function initialState() {
      return {
        imageSrc: null,
        imageCropSrc: null,
        fileName: null,
        touched: false,
        sliderValue: 0,
        sliderMin: this.props.sliderMin,
        sliderMax: this.props.sliderMax
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setCropperHeight();
      window.addEventListener('resize', this.setCropperHeight);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setCropperHeight);
    }
  }, {
    key: "handleUploaderSuccess",
    value: function handleUploaderSuccess(data) {
      this.setState({
        imageSrc: data.preview,
        imageCropSrc: null,
        fileName: data.name,
        sliderValue: 0
      }, this.setCropperHeight);
    }
  }, {
    key: "handleUploaderError",
    value: function handleUploaderError(hasError) {
      var resetState = hasError ? this.initialState() : {};
      this.setState(_extends({
        hasErrorOnUploader: hasError
      }, resetState));
    }
  }, {
    key: "handleUploaderReset",
    value: function handleUploaderReset() {
      this.setState(this.initialState());
      this.props.onChange({
        value: null,
        name: null
      });
    }
  }, {
    key: "handleSliderChange",
    value: function handleSliderChange(value) {
      this.setState({
        sliderValue: value
      });
      this.refs.cropper.zoomTo(value / 100);
    }
  }, {
    key: "handleSliderAction",
    value: function handleSliderAction() {
      this.setState({
        touched: true
      });
    } // Calculate the right range for the zoom slider.

  }, {
    key: "handleReady",
    value: function handleReady() {
      var imageData = this.refs.cropper.getImageData();
      var naturalWidth = imageData.naturalWidth;
      var width = imageData.width;
      var ratio = width / naturalWidth * 100;
      var min = this.props.sliderMin + ratio;
      var max = this.props.sliderMax + ratio;
      this.setState({
        sliderMin: min,
        sliderMax: max,
        sliderValue: min
      });
    }
  }, {
    key: "handleCrop",
    value: function handleCrop() {
      if (!this.state.imageSrc) return;
      var croppedCanvas = this.refs.cropper.getCroppedCanvas();

      if (croppedCanvas) {
        var imageCropSrc = croppedCanvas.toDataURL();
        this.setState({
          imageCropSrc: imageCropSrc
        });
        this.props.onChange({
          value: imageCropSrc,
          base: this.state.imageSrc,
          name: this.state.fileName,
          cropperData: this.refs.cropper.getData()
        });
      }
    }
  }, {
    key: "setCropperHeight",
    value: function setCropperHeight() {
      if (this.cropperContainer) {
        var width = domElementHelper.getComputedWidth(this.cropperContainer);
        var height = width / this.props.aspectRatio;
        this.setState({
          cropperWidth: width,
          cropperHeight: height
        });
      }
    }
  }, {
    key: "renderCropper",
    value: function renderCropper() {
      var _this2 = this;

      var styles = {
        width: this.state.cropperWidth,
        height: this.state.cropperHeight
      };
      var dragMode = this.props.disabled || !this.props.isCropEnabled ? 'none' : 'move';
      return /*#__PURE__*/React.createElement(Marger, {
        top: "2",
        key: "cropper"
      }, /*#__PURE__*/React.createElement("div", {
        ref: function ref(node) {
          _this2.cropperContainer = node;
        }
      }, this.state.cropperWidth && this.state.cropperHeight && /*#__PURE__*/React.createElement(Cropper // This helps unmount and remount a new cropper to keep
      // the component responsive.
      , {
        key: "cropper-".concat(this.state.cropperHeight),
        ref: "cropper",
        className: "k-Cropper",
        src: this.state.imageSrc,
        style: styles,
        aspectRatio: this.props.aspectRatio,
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
        crop: this.handleCrop,
        ready: this.handleReady
      })));
    }
  }, {
    key: "renderCropperInfo",
    value: function renderCropperInfo() {
      return /*#__PURE__*/React.createElement(Marger, {
        top: "2",
        bottom: "1.5"
      }, /*#__PURE__*/React.createElement(Paragraph, {
        modifier: "quaternary",
        margin: false
      }, this.props.cropperInfo));
    }
  }, {
    key: "renderSlider",
    value: function renderSlider() {
      return /*#__PURE__*/React.createElement(Marger, {
        top: "1"
      }, /*#__PURE__*/React.createElement(Slider, {
        name: "zoom",
        min: this.state.sliderMin,
        max: this.state.sliderMax,
        value: this.state.sliderValue,
        onChange: this.handleSliderChange,
        onAction: this.handleSliderAction
      }));
    }
  }, {
    key: "renderSliderTitle",
    value: function renderSliderTitle() {
      return /*#__PURE__*/React.createElement(Marger, {
        top: "1.5",
        bottom: "1"
      }, /*#__PURE__*/React.createElement(Label, {
        size: "micro"
      }, this.props.sliderTitle));
    }
  }, {
    key: "renderSliderAndCropperInfo",
    value: function renderSliderAndCropperInfo() {
      if (this.props.disabled) return;
      return /*#__PURE__*/React.createElement(GridCol, {
        col: "12",
        "col-m": "6"
      }, this.renderCropperInfo(), this.renderSliderTitle(), this.renderSlider());
    }
  }, {
    key: "renderCroppingImage",
    value: function renderCroppingImage() {
      if (!this.state.imageSrc) return;
      return /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCol, {
        col: "12",
        "col-m": "6"
      }, this.renderCropper()), this.props.isCropEnabled && this.renderSliderAndCropperInfo());
    }
  }, {
    key: "renderError",
    value: function renderError() {
      if (!this.state.hasErrorOnUploader) return;
      return /*#__PURE__*/React.createElement(Marger, {
        top: "1",
        bottom: "1"
      }, /*#__PURE__*/React.createElement(Text, {
        color: "error",
        size: "tiny",
        weight: "regular"
      }, this.props.uploaderErrorLabel));
    }
  }, {
    key: "renderUploader",
    value: function renderUploader() {
      return /*#__PURE__*/React.createElement(SimpleUploader, {
        name: this.props.name,
        maxSize: this.props.maxSize,
        acceptedFiles: this.props.acceptedFiles,
        onSuccess: this.handleUploaderSuccess,
        onError: this.handleUploaderError,
        onReset: this.handleUploaderReset,
        buttonLabel: this.props.buttonLabel,
        fileName: this.props.fileName,
        disabled: this.props.disabled,
        deletable: this.props.deletable,
        base64: this.props.base64
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCol, {
        col: "12"
      }, /*#__PURE__*/React.createElement(Marger, {
        bottom: "1.5"
      }, /*#__PURE__*/React.createElement(Label, {
        size: "tiny"
      }, this.props.label)), /*#__PURE__*/React.createElement(Marger, {
        top: "1.5",
        bottom: "1"
      }, this.renderUploader()), this.renderError(), /*#__PURE__*/React.createElement(Marger, {
        top: "1"
      }, /*#__PURE__*/React.createElement(Paragraph, {
        modifier: "quaternary",
        margin: false
      }, this.props.description)))), this.renderCroppingImage());
    }
  }]);

  return ImageCropper;
}(React.Component);
ImageCropper.defaultProps = {
  name: 'picture',
  imageSrc: null,
  fileName: null,
  uploaderErrorLabel: 'You have an error on upload.',
  sliderMin: 0,
  sliderMax: 500,
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
  base64: true,
  onChange: function onChange(_fileData) {}
};