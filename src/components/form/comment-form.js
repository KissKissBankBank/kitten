"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("kitten/components/layout/marger");

var _commentAvatar = require("kitten/components/form/comment-avatar");

var _buttonImage = require("kitten/components/buttons/button-image");

var _button = require("kitten/components/buttons/button");

var _text = require("kitten/components/typography/text");

var _screenConfig = require("kitten/constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _textarea, _arrow;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var Marger = (0, _radium.default)(_marger.Marger);
var Button = (0, _radium.default)(_button.Button);

var CommentForm =
/*#__PURE__*/
function (_Component) {
  _inherits(CommentForm, _Component);

  function CommentForm(props) {
    var _this;

    _classCallCheck(this, CommentForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommentForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFocus", function () {
      _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBlur", function () {
      _this.setState({
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var element = e.target;

      _this.setState({
        value: element.value,
        height: 'auto'
      }, function () {
        _this.setState({
          height: element.scrollHeight
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      _this.props.onSubmit(_this.state.value);
    });

    _this.state = {
      isFocused: false,
      value: _this.props.defaultValue,
      height: 'auto'
    };
    return _this;
  }

  _createClass(CommentForm, [{
    key: "render",
    value: function render() {
      var avatarImgProps = this.props.avatarImgProps;
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("div", {
        style: styles.grid
      }, _react.default.createElement(_commentAvatar.CommentAvatar, {
        avatarImgProps: avatarImgProps
      }), this.renderInput()));
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props = this.props,
          isDisabled = _this$props.isDisabled,
          placeholder = _this$props.placeholder,
          defaultValue = _this$props.defaultValue,
          error = _this$props.error,
          errorMessage = _this$props.errorMessage;
      var styleInput = [styles.input.textarea, error && styles.input.textarea.error, this.state.isFocused && styles.input.textarea.focus, isDisabled && styles.input.textarea.isDisabled, {
        height: this.state.height
      }];
      var styleArrow = [styles.input.arrow, error && styles.input.arrow.error, this.state.isFocused && styles.input.arrow.focus];
      var textareaClassNames = (0, _classnames.default)('k-CommentForm__input', 'k-u-weight-light'); // We are forced to duplicate <Style />, to avoid having space between the class and the pseudo-element.
      // https://github.com/FormidableLabs/radium/issues/243

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_radium.Style, {
        scopeSelector: ".k-CommentForm__input::-webkit-input-placeholder",
        rules: {
          color: _colorsConfig.default.font2
        }
      }), _react.default.createElement(_radium.Style, {
        scopeSelector: ".k-CommentForm__input:-moz-placeholder",
        rules: {
          color: _colorsConfig.default.font2
        }
      }), _react.default.createElement(_radium.Style, {
        scopeSelector: ".k-CommentForm__input::-moz-placeholder",
        rules: {
          color: _colorsConfig.default.font2
        }
      }), _react.default.createElement(_radium.Style, {
        scopeSelector: ".k-CommentForm__input:-ms-input-placeholder",
        rules: {
          color: _colorsConfig.default.font2
        }
      }), _react.default.createElement("div", {
        style: styles.grid.col
      }, _react.default.createElement(Marger, {
        bottom: ".5",
        style: styles.input
      }, _react.default.createElement("textarea", {
        className: textareaClassNames,
        style: styleInput,
        defaultValue: defaultValue,
        key: "comment-form",
        disabled: isDisabled,
        placeholder: placeholder,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        rows: "1"
      }), _react.default.createElement("span", {
        style: styleArrow
      }, _react.default.createElement("span", {
        style: styles.input.arrow.before
      }))), this.renderError(), this.renderButton()));
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      if (!this.state.value) return;
      var commentButton = this.props.commentButton;
      return _react.default.createElement(Marger, {
        top: "2"
      }, _react.default.createElement(Button, {
        type: "button",
        modifier: "helium",
        onClick: this.handleSubmit,
        style: styles.button.left
      }, commentButton));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      var _this$props2 = this.props,
          error = _this$props2.error,
          errorMessage = _this$props2.errorMessage;
      if (!error) return;
      return _react.default.createElement(Marger, {
        top: ".5"
      }, _react.default.createElement(_text.Text, {
        color: "error",
        size: "micro",
        weight: "regular"
      }, errorMessage));
    }
  }]);

  return CommentForm;
}(_react.Component);

exports.CommentForm = CommentForm;

_defineProperty(CommentForm, "propTypes", {
  avatarImgProps: _propTypes.default.object.isRequired,
  isDisabled: _propTypes.default.bool,
  placeholder: _propTypes.default.string.isRequired,
  commentButton: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  onSubmit: _propTypes.default.func,
  defaultValue: _propTypes.default.string
});

_defineProperty(CommentForm, "defaultProps", {
  onSubmit: function onSubmit() {},
  error: false,
  errorMessage: '',
  isDisabled: false,
  commentButton: '',
  defaultValue: ''
});

var styles = {
  grid: {
    display: 'flex',
    col: _defineProperty({
      flex: 1,
      marginLeft: 20
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      marginLeft: 35
    })
  },
  input: {
    display: 'flex',
    position: 'relative',
    textarea: (_textarea = {
      width: '100%',
      overflowY: 'hidden',
      resize: 'none',
      boxSizing: 'border-box',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: _colorsConfig.default.line1,
      color: _colorsConfig.default.font1,
      padding: 30,
      fontSize: 14
    }, _defineProperty(_textarea, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      fontSize: 16
    }), _defineProperty(_textarea, "focus", {
      outline: 'none',
      borderColor: _colorsConfig.default.line2,
      color: _colorsConfig.default.font1
    }), _defineProperty(_textarea, "isDisabled", {
      borderColor: _colorsConfig.default.line1,
      color: _colorsConfig.default.font2,
      backgroundColor: _colorsConfig.default.line1
    }), _defineProperty(_textarea, "error", {
      borderColor: _colorsConfig.default.error3,
      color: _colorsConfig.default.error3
    }), _textarea),
    arrow: (_arrow = {
      position: 'absolute',
      top: 20,
      display: 'block',
      width: 0,
      height: 0,
      borderWidth: 10,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: _colorsConfig.default.line1,
      left: -20
    }, _defineProperty(_arrow, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      top: 35
    }), _defineProperty(_arrow, "focus", {
      borderRightColor: _colorsConfig.default.line2
    }), _defineProperty(_arrow, "error", {
      borderRightColor: _colorsConfig.default.error3
    }), _defineProperty(_arrow, "before", {
      position: 'absolute',
      width: 0,
      height: 0,
      marginTop: -10,
      borderWidth: 10,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: 'white',
      left: -7
    }), _arrow)
  },
  button: {
    left: {
      marginRight: 10
    }
  }
};