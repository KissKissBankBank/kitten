"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Uploader = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var Uploader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Uploader, _React$Component);

  function Uploader(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Uploader);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Uploader).call(this, props));

    _this.handleBase64Return = function (file) {
      var reader = new FileReader();

      reader.onload = function (event) {
        _this.props.onSuccess({
          file: file,
          preview: event.target.result,
          name: file.name
        });
      };

      reader.readAsDataURL(file);
    };

    _this.state = {
      fileName: _this.props.fileName
    };
    _this.handleChangeAcceptedFiles = _this.handleChangeAcceptedFiles.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangeRejectedFiles = _this.handleChangeRejectedFiles.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCancel = _this.handleCancel.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Uploader, [{
    key: "handleChangeAcceptedFiles",
    value: function handleChangeAcceptedFiles(acceptedFiles) {
      var file = acceptedFiles[0];
      this.setState({
        fileName: file.name
      });

      if (this.props.base64) {
        this.handleBase64Return(file);
      } else {
        this.props.onSuccess({
          file: file,
          preview: file.preview,
          name: file.name
        });
      }

      this.props.onError(false);
    }
  }, {
    key: "handleChangeRejectedFiles",
    value: function handleChangeRejectedFiles() {
      this.props.onError(true);
      this.handleCancel();
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.dropzoneRef.open();
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      this.setState({
        fileName: null
      });
      this.props.onReset();
    }
  }, {
    key: "renderTheme",
    value: function renderTheme() {
      if (!this.props.theme) return;
      var Theme = this.props.theme;
      return _react.default.createElement(Theme, {
        buttonLabel: this.props.buttonLabel,
        fileName: this.state.fileName,
        onClick: this.handleClick,
        onCancel: this.handleCancel,
        disabled: this.props.disabled,
        deletable: this.props.deletable
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_reactDropzone.default, {
        ref: function ref(node) {
          _this2.dropzoneRef = node;
        },
        name: this.props.name,
        accept: this.props.acceptedFiles,
        maxSize: this.props.maxSize,
        onDropAccepted: this.handleChangeAcceptedFiles,
        onDropRejected: this.handleChangeRejectedFiles,
        disableClick: true,
        multiple: false,
        style: {}
      }, this.renderTheme());
    }
  }]);
  return Uploader;
}(_react.default.Component);

exports.Uploader = Uploader;
Uploader.defaultProps = {
  name: null,
  acceptedFiles: 'image/*',
  maxSize: null,
  fileName: null,
  theme: null,
  buttonLabel: 'Choose a file',
  onSuccess: function onSuccess() {},
  onError: function onError() {},
  onReset: function onReset() {},
  disabled: false,
  base64: false
};