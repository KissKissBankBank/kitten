"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _passwordIcon = require("kitten/components/icons/password-icon");

var _textInput = require("kitten/components/form/text-input");

var PasswordIcon = (0, _radium.default)(_passwordIcon.PasswordIcon);
var TextInput = (0, _radium.default)(_textInput.TextInput);

var PasswordInputBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(PasswordInputBase, _Component);

  function PasswordInputBase(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PasswordInputBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PasswordInputBase).call(this, props));

    _this.handleClick = function () {
      _this.setState({
        isHidden: !_this.state.isHidden
      });
    };

    _this.handleKeyDown = function (event) {
      var enterKeyCode = 13;

      if (event.keyCode == enterKeyCode) {
        _this.handleClick();
      }
    };

    _this.state = {
      isHidden: true
    };
    return _this;
  }

  (0, _createClass2.default)(PasswordInputBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          textInputProps = _this$props.textInputProps,
          iconLabel = _this$props.iconLabel,
          hiddenIconLabel = _this$props.hiddenIconLabel;
      var type = this.state.isHidden ? 'password' : 'text';
      var iconStyle = [styles.icon.svg, !this.state.isHidden && styles.icon.svg.active];
      var iconTitle = this.state.isHidden ? iconLabel : hiddenIconLabel;
      return _react.default.createElement("div", {
        style: styles.textInput
      }, _react.default.createElement(TextInput, (0, _extends2.default)({}, textInputProps, {
        style: styles.input,
        name: name,
        type: type
      })), _react.default.createElement("span", {
        style: styles.icon,
        title: iconTitle
      }, _react.default.createElement(PasswordIcon, {
        tabIndex: "0",
        style: iconStyle,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        title: iconTitle
      })));
    }
  }]);
  return PasswordInputBase;
}(_react.Component);

PasswordInputBase.propTypes = {
  textInputProps: _propTypes.default.shape({}),
  iconLabel: _propTypes.default.string.isRequired,
  hiddenIconLabel: _propTypes.default.string.isRequired,
  name: _propTypes.default.string
};
PasswordInputBase.defaultProps = {
  textInputProps: {},
  name: 'password'
};
var styles = {
  textInput: {
    position: 'relative',
    display: 'flex'
  },
  input: {
    paddingRight: '40px'
  },
  icon: {
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    marginRight: '11px',
    right: 0,
    top: 0,
    bottom: 0,
    svg: {
      cursor: 'pointer',
      active: {
        fill: _colorsConfig.default.primary1
      }
    }
  }
};
var PasswordInput = (0, _radium.default)(PasswordInputBase);
exports.PasswordInput = PasswordInput;