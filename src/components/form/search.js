"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Search = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementHelper = require("kitten/helpers/dom/element-helper");

var _textInput = require("kitten/components/form/text-input");

var _searchIcon = require("kitten/components/icons/search-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));
    _this.state = {
      focus: false,
      hover: false // These listeners help us to handle the text input display depending on the
      // submit input state (as we cannot handle it directly in css).

    };
    _this.handleSubmitFocus = _this.handleSubmitFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmitBlur = _this.handleSubmitBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmitMouseOver = _this.handleSubmitMouseOver.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmitMouseOut = _this.handleSubmitMouseOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // Component listeners callbacks.


  _createClass(Search, [{
    key: "handleSubmitFocus",
    value: function handleSubmitFocus() {
      this.setState({
        focus: true
      });
    }
  }, {
    key: "handleSubmitBlur",
    value: function handleSubmitBlur() {
      this.setState({
        focus: false
      });
    }
  }, {
    key: "handleSubmitMouseOver",
    value: function handleSubmitMouseOver() {
      this.setState({
        hover: true
      });
    }
  }, {
    key: "handleSubmitMouseOut",
    value: function handleSubmitMouseOut() {
      this.setState({
        hover: false
      });
    } // Rendering.

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          actionUrl = _this$props.actionUrl,
          inputId = _this$props.inputId,
          inputName = _this$props.inputName,
          inputPlaceholder = _this$props.inputPlaceholder,
          inputLabel = _this$props.inputLabel,
          submitLabel = _this$props.submitLabel,
          others = _objectWithoutProperties(_this$props, ["className", "actionUrl", "inputId", "inputName", "inputPlaceholder", "inputLabel", "submitLabel"]);

      var inputClassName = (0, _classnames.default)('k-TextInput', 'k-TextInput--tiny', 'k-SearchInput__input', {
        'is-active': this.state.focus
      }, {
        'is-hover': this.state.hover
      });
      return _react.default.createElement("form", {
        className: "k-SearchInput",
        role: "search",
        action: actionUrl,
        acceptCharset: "UTF-8",
        method: "get"
      }, _react.default.createElement(_textInput.TextInput, {
        className: inputClassName,
        type: "search",
        id: inputId,
        name: inputName,
        placeholder: inputPlaceholder,
        "aria-label": inputLabel
      }), _react.default.createElement("button", {
        type: "submit",
        "aria-label": submitLabel,
        className: "k-SearchInput__submit k-SearchInput__submit--tiny",
        onFocus: this.handleSubmitFocus,
        onBlur: this.handleSubmitBlur,
        onMouseOver: this.handleSubmitMouseOver,
        onMouseOut: this.handleSubmitMouseOut
      }, _react.default.createElement(_searchIcon.SearchIcon, {
        width: "14",
        height: "14"
      })));
    }
  }]);

  return Search;
}(_react.Component); // DEPRECATED: do not use default export.


exports.Search = Search;
var _default = Search;
exports.default = _default;