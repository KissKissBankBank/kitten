import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react'; // Via "https://github.com/luigiinred/react-ckeditor-wrapper"

import CKEditor from 'react-ckeditor-wrapper'; // Make sure you include a script to React Ckeditor Wrapper.
// For example:
//   <script src="//cdn.ckeditor.com/4.6.2/standard/ckeditor.js"></script>

export var RichTextInput = /*#__PURE__*/function (_React$Component) {
  _inherits(RichTextInput, _React$Component);

  var _super = _createSuper(RichTextInput);

  function RichTextInput(props) {
    var _this;

    _classCallCheck(this, RichTextInput);

    _this = _super.call(this, props);
    _this.state = {
      content: props.content
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RichTextInput, [{
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        content: value
      });
      this.props.onChange({
        value: value
      });
    }
  }, {
    key: "config",
    value: function config() {
      var config = _extends({}, this.props.config, {
        defaultLanguage: this.props.locale,
        toolbar: this.props.toolbar
      });

      return config;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(CKEditor, {
        value: this.state.content,
        config: this.config(),
        onChange: this.handleChange
      });
    }
  }]);

  return RichTextInput;
}(React.Component);
RichTextInput.defaultProps = {
  onChange: function onChange() {},
  content: '',
  locale: 'en',
  config: {
    removePlugins: 'elementspath',
    resize_enabled: false
  },
  toolbar: [{
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline', 'Link', 'Image']
  }, {
    name: 'clipboard',
    items: ['Undo', 'Redo']
  }]
};