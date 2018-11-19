"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCropper = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCropper = _interopRequireDefault(require("react-cropper"));

var _marger = require("kitten/components/layout/marger");

var _grid = require("kitten/components/grid/grid");

var _text = require("kitten/components/typography/text");

var _label = require("kitten/components/form/label");

var _paragraph = require("kitten/components/typography/paragraph");

var _simpleUploader = require("kitten/components/uploaders/simple-uploader");

var _slider = require("kitten/components/form/slider");

var _elementHelper = require("kitten/helpers/dom/element-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ImageCropper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageCropper, _React$Component);

  function ImageCropper(props) {
    var _this;

    _classCallCheck(this, ImageCropper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageCropper).call(this, props));
    _this.state = _objectSpread({}, _this.initialState(), {
      hasErrorOnUploader: false,
      cropperWidth: null,
      cropperHeight: null,
      imageSrc: _this.props.imageSrc,
      fileName: _this.props.fileName
    });
    _this.handleUploaderSuccess = _this.handleUploaderSuccess.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleUploaderError = _this.handleUploaderError.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleUploaderReset = _this.handleUploaderReset.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSliderChange = _this.handleSliderChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSliderAction = _this.handleSliderAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleReady = _this.handleReady.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCrop = _this.handleCrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderError = _this.renderError.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setCropperHeight = _this.setCropperHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
      this.setState(_objectSpread({
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
        var width = _elementHelper.domElementHelper.getComputedWidth(this.cropperContainer);

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
      return _react.default.createElement(_marger.Marger, {
        top: "2",
        key: "cropper"
      }, _react.default.createElement("div", {
        ref: function ref(node) {
          _this2.cropperContainer = node;
        }
      }, this.state.cropperWidth && this.state.cropperHeight && _react.default.createElement(_reactCropper.default // This helps unmount and remount a new cropper to keep
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
      return _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "1.5"
      }, _react.default.createElement(_paragraph.Paragraph, {
        modifier: "quaternary",
        margin: false
      }, this.props.cropperInfo));
    }
  }, {
    key: "renderSlider",
    value: function renderSlider() {
      return _react.default.createElement(_marger.Marger, {
        top: "1"
      }, _react.default.createElement(_slider.Slider, {
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
      return _react.default.createElement(_marger.Marger, {
        top: "1.5",
        bottom: "1"
      }, _react.default.createElement(_label.Label, {
        size: "tiny"
      }, this.props.sliderTitle));
    }
  }, {
    key: "renderSliderAndCropperInfo",
    value: function renderSliderAndCropperInfo() {
      if (this.props.disabled) return;
      return _react.default.createElement(_grid.GridCol, {
        col: "12",
        "col-m": "6"
      }, this.renderCropperInfo(), this.renderSliderTitle(), this.renderSlider());
    }
  }, {
    key: "renderCroppingImage",
    value: function renderCroppingImage() {
      if (!this.state.imageSrc) return;
      return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
        col: "12",
        "col-m": "6"
      }, this.renderCropper()), this.props.isCropEnabled && this.renderSliderAndCropperInfo());
    }
  }, {
    key: "renderError",
    value: function renderError(error) {
      if (!this.state.hasErrorOnUploader) return;
      return _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1"
      }, _react.default.createElement(_text.Text, {
        color: "error",
        size: "tiny",
        weight: "regular"
      }, this.props.uploaderErrorLabel));
    }
  }, {
    key: "renderUploader",
    value: function renderUploader() {
      return _react.default.createElement(_simpleUploader.SimpleUploader, {
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
      return _react.default.createElement("section", null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
        col: "12"
      }, _react.default.createElement(_marger.Marger, {
        bottom: "1.5"
      }, _react.default.createElement(_label.Label, {
        size: "tiny"
      }, this.props.label)), _react.default.createElement(_marger.Marger, {
        top: "1.5",
        bottom: "1"
      }, this.renderUploader()), this.renderError(), _react.default.createElement(_marger.Marger, {
        top: "1"
      }, _react.default.createElement(_paragraph.Paragraph, {
        modifier: "quaternary",
        margin: false
      }, this.props.description)))), this.renderCroppingImage());
    }
  }]);

  return ImageCropper;
}(_react.default.Component);

exports.ImageCropper = ImageCropper;
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