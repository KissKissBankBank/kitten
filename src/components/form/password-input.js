"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _passwordIcon = require("kitten/components/icons/password-icon");

var _textInput = require("kitten/components/form/text-input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PasswordIcon = (0, _radium.default)(_passwordIcon.PasswordIcon);
var TextInput = (0, _radium.default)(_textInput.TextInput);

var PasswordInputBase =
/*#__PURE__*/
function (_Component) {
  _inherits(PasswordInputBase, _Component);

  function PasswordInputBase(props) {
    var _this;

    _classCallCheck(this, PasswordInputBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordInputBase).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      _this.setState({
        isHidden: !_this.state.isHidden
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (event) {
      var enterKeyCode = 13;

      if (event.keyCode == enterKeyCode) {
        _this.handleClick();
      }
    });

    _this.state = {
      isHidden: true
    };
    return _this;
  }

  _createClass(PasswordInputBase, [{
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
      }, _react.default.createElement(TextInput, _extends({}, textInputProps, {
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

_defineProperty(PasswordInputBase, "propTypes", {
  textInputProps: _propTypes.default.shape({}),
  iconLabel: _propTypes.default.string.isRequired,
  hiddenIconLabel: _propTypes.default.string.isRequired,
  name: _propTypes.default.string
});

_defineProperty(PasswordInputBase, "defaultProps", {
  textInputProps: {},
  name: 'password'
});

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