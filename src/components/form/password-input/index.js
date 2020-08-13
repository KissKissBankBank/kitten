"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _passwordIcon = require("../../../components/icons/password-icon");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledPasswordInput = _styledComponents.default.div.withConfig({
  displayName: "password-input__StyledPasswordInput",
  componentId: "sc-1futz46-0"
})(["position:relative;display:flex;"]);

var StyledTextInput = (0, _styledComponents.default)(_textInput.TextInput).withConfig({
  displayName: "password-input__StyledTextInput",
  componentId: "sc-1futz46-1"
})(["padding-right:", ";"], (0, _typography.pxToRem)(40));

var StyledIcon = _styledComponents.default.span.withConfig({
  displayName: "password-input__StyledIcon",
  componentId: "sc-1futz46-2"
})(["display:flex;position:absolute;z-index:1;padding:0 ", ";right:0;top:0;bottom:0;cursor:pointer;&[aria-pressed='true']{svg{fill:", ";transition:all 0.2s;}}"], (0, _typography.pxToRem)(11), _colorsConfig.default.primary1);

var PasswordInput = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(PasswordInput, _PureComponent);

  var _super = _createSuper(PasswordInput);

  function PasswordInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PasswordInput);
    _this = _super.call(this, props);

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

  (0, _createClass2.default)(PasswordInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          iconLabel = _this$props.iconLabel,
          hiddenIconLabel = _this$props.hiddenIconLabel,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["name", "iconLabel", "hiddenIconLabel"]);
      var type = this.state.isHidden ? 'password' : 'text';
      var active = !this.state.isHidden;
      var iconTitle = this.state.isHidden ? iconLabel : hiddenIconLabel;
      return /*#__PURE__*/_react.default.createElement(StyledPasswordInput, null, /*#__PURE__*/_react.default.createElement(StyledTextInput, (0, _extends2.default)({}, others, {
        name: name,
        type: type
      })), /*#__PURE__*/_react.default.createElement(StyledIcon, {
        title: iconTitle,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        "aria-pressed": active,
        tabIndex: "0"
      }, /*#__PURE__*/_react.default.createElement(_passwordIcon.PasswordIcon, null)));
    }
  }]);
  return PasswordInput;
}(_react.PureComponent);

exports.PasswordInput = PasswordInput;
PasswordInput.propTypes = {
  iconLabel: _propTypes.default.string.isRequired,
  hiddenIconLabel: _propTypes.default.string.isRequired,
  name: _propTypes.default.string
};
PasswordInput.defaultProps = {
  name: 'password'
};