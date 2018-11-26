"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentForm = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../components/layout/marger");

var _commentAvatar = require("../../components/form/comment-avatar");

var _buttonImage = require("../../components/buttons/button-image");

var _button = require("../../components/buttons/button");

var _text = require("../../components/typography/text");

var _screenConfig = require("../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _textarea, _arrow;

var Marger = (0, _radium.default)(_marger.Marger);
var Button = (0, _radium.default)(_button.Button);

var CommentForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CommentForm, _Component);

  function CommentForm(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CommentForm);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CommentForm).call(this, props));

    _this.handleFocus = function () {
      _this.setState({
        isFocused: true
      });
    };

    _this.handleBlur = function () {
      _this.setState({
        isFocused: false
      });
    };

    _this.handleChange = function (e) {
      var element = e.target;

      _this.setState({
        value: element.value,
        height: 'auto'
      }, function () {
        _this.setState({
          height: element.scrollHeight
        });
      });
    };

    _this.handleSubmit = function () {
      _this.props.onSubmit(_this.state.value);
    };

    _this.state = {
      isFocused: false,
      value: _this.props.defaultValue,
      height: 'auto'
    };
    return _this;
  }

  (0, _createClass2.default)(CommentForm, [{
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
CommentForm.propTypes = {
  avatarImgProps: _propTypes.default.object.isRequired,
  isDisabled: _propTypes.default.bool,
  placeholder: _propTypes.default.string.isRequired,
  commentButton: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  onSubmit: _propTypes.default.func,
  defaultValue: _propTypes.default.string
};
CommentForm.defaultProps = {
  onSubmit: function onSubmit() {},
  error: false,
  errorMessage: '',
  isDisabled: false,
  commentButton: '',
  defaultValue: ''
};
var styles = {
  grid: {
    display: 'flex',
    col: (0, _defineProperty2.default)({
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
    }, (0, _defineProperty2.default)(_textarea, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      fontSize: 16
    }), (0, _defineProperty2.default)(_textarea, "focus", {
      outline: 'none',
      borderColor: _colorsConfig.default.line2,
      color: _colorsConfig.default.font1
    }), (0, _defineProperty2.default)(_textarea, "isDisabled", {
      borderColor: _colorsConfig.default.line1,
      color: _colorsConfig.default.font2,
      backgroundColor: _colorsConfig.default.line1
    }), (0, _defineProperty2.default)(_textarea, "error", {
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
    }, (0, _defineProperty2.default)(_arrow, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      top: 35
    }), (0, _defineProperty2.default)(_arrow, "focus", {
      borderRightColor: _colorsConfig.default.line2
    }), (0, _defineProperty2.default)(_arrow, "error", {
      borderRightColor: _colorsConfig.default.error3
    }), (0, _defineProperty2.default)(_arrow, "before", {
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