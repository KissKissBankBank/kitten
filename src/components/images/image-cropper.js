"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCropper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactCropper = _interopRequireDefault(require("react-cropper"));

var _marger = require("../../components/layout/marger");

var _grid = require("../../components/grid/grid");

var _text = require("../../components/typography/text");

var _label = require("../../components/form/label");

var _paragraph = require("../../components/typography/paragraph");

var _simpleUploader = require("../../components/uploaders/simple-uploader");

var _slider = require("../../components/form/slider");

var _elementHelper = require("../../helpers/dom/element-helper");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ImageCropper = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ImageCropper, _React$Component);

  var _super = _createSuper(ImageCropper);

  function ImageCropper(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ImageCropper);
    _this = _super.call(this, props);
    _this.state = (0, _extends2.default)({}, _this.initialState(), {
      hasErrorOnUploader: false,
      cropperWidth: null,
      cropperHeight: null,
      imageSrc: _this.props.imageSrc,
      fileName: _this.props.fileName
    });
    _this.handleUploaderSuccess = _this.handleUploaderSuccess.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleUploaderError = _this.handleUploaderError.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleUploaderReset = _this.handleUploaderReset.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSliderChange = _this.handleSliderChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSliderAction = _this.handleSliderAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleReady = _this.handleReady.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCrop = _this.handleCrop.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderError = _this.renderError.bind((0, _assertThisInitialized2.default)(_this));
    _this.setCropperHeight = _this.setCropperHeight.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(ImageCropper, [{
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
      this.setState((0, _extends2.default)({
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
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "2",
        key: "cropper"
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(node) {
          _this2.cropperContainer = node;
        }
      }, this.state.cropperWidth && this.state.cropperHeight && /*#__PURE__*/_react.default.createElement(_reactCropper.default // This helps unmount and remount a new cropper to keep
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
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "1.5"
      }, /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, {
        modifier: "quaternary",
        margin: false
      }, this.props.cropperInfo));
    }
  }, {
    key: "renderSlider",
    value: function renderSlider() {
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1"
      }, /*#__PURE__*/_react.default.createElement(_slider.Slider, {
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
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1.5",
        bottom: "1"
      }, /*#__PURE__*/_react.default.createElement(_label.Label, {
        size: "micro"
      }, this.props.sliderTitle));
    }
  }, {
    key: "renderSliderAndCropperInfo",
    value: function renderSliderAndCropperInfo() {
      if (this.props.disabled) return;
      return /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
        col: "12",
        "col-m": "6"
      }, this.renderCropperInfo(), this.renderSliderTitle(), this.renderSlider());
    }
  }, {
    key: "renderCroppingImage",
    value: function renderCroppingImage() {
      if (!this.state.imageSrc) return;
      return /*#__PURE__*/_react.default.createElement(_grid.Grid, null, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
        col: "12",
        "col-m": "6"
      }, this.renderCropper()), this.props.isCropEnabled && this.renderSliderAndCropperInfo());
    }
  }, {
    key: "renderError",
    value: function renderError(error) {
      if (!this.state.hasErrorOnUploader) return;
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1"
      }, /*#__PURE__*/_react.default.createElement(_text.Text, {
        color: "error",
        size: "tiny",
        weight: "regular"
      }, this.props.uploaderErrorLabel));
    }
  }, {
    key: "renderUploader",
    value: function renderUploader() {
      return /*#__PURE__*/_react.default.createElement(_simpleUploader.SimpleUploader, {
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
      return /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement(_grid.Grid, null, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
        col: "12"
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        bottom: "1.5"
      }, /*#__PURE__*/_react.default.createElement(_label.Label, {
        size: "tiny"
      }, this.props.label)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1.5",
        bottom: "1"
      }, this.renderUploader()), this.renderError(), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1"
      }, /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, {
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