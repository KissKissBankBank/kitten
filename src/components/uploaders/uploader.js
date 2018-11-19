"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Uploader = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Uploader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Uploader, _React$Component);

  function Uploader(props) {
    var _this;

    _classCallCheck(this, Uploader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Uploader).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBase64Return", function (file) {
      var reader = new FileReader();

      reader.onload = function (event) {
        _this.props.onSuccess({
          file: file,
          preview: event.target.result,
          name: file.name
        });
      };

      reader.readAsDataURL(file);
    });

    _this.state = {
      fileName: _this.props.fileName
    };
    _this.handleChangeAcceptedFiles = _this.handleChangeAcceptedFiles.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChangeRejectedFiles = _this.handleChangeRejectedFiles.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Uploader, [{
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