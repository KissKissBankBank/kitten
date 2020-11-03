import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import Dropzone from 'react-dropzone';
export var Uploader = /*#__PURE__*/function (_React$Component) {
  _inherits(Uploader, _React$Component);

  var _super = _createSuper(Uploader);

  function Uploader(props) {
    var _this;

    _classCallCheck(this, Uploader);

    _this = _super.call(this, props);

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
    _this.handleChangeAcceptedFiles = _this.handleChangeAcceptedFiles.bind(_assertThisInitialized(_this));
    _this.handleChangeRejectedFiles = _this.handleChangeRejectedFiles.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_this));
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
      return /*#__PURE__*/React.createElement(Theme, {
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

      return /*#__PURE__*/React.createElement(Dropzone, {
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
}(React.Component);
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