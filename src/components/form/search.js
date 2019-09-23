"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Search = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementHelper = require("../../helpers/dom/element-helper");

var _textInput = require("../../components/form/text-input");

var _searchIcon = require("../../components/icons/search-icon");

var Search =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Search, _Component);

  function Search(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Search);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Search).call(this, props));
    _this.state = {
      focus: false,
      hover: false
    }; // These listeners help us to handle the text input display depending on the
    // submit input state (as we cannot handle it directly in css).

    _this.handleSubmitFocus = _this.handleSubmitFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSubmitBlur = _this.handleSubmitBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSubmitMouseOver = _this.handleSubmitMouseOver.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSubmitMouseOut = _this.handleSubmitMouseOut.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  } // Component listeners callbacks.


  (0, _createClass2.default)(Search, [{
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
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "actionUrl", "inputId", "inputName", "inputPlaceholder", "inputLabel", "submitLabel"]);
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
        height: "14",
        circleProps: {
          className: 'k-SearchInput__submit__svgCircle'
        },
        pathProps: {
          className: 'k-SearchInput__submit__svgPath'
        }
      })));
    }
  }]);
  return Search;
}(_react.Component); // DEPRECATED: do not use default export.


exports.Search = Search;
var _default = Search;
exports.default = _default;