"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _passwordIcon = require("../../../components/graphics/icons/password-icon");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _excluded = ["name", "iconLabel", "hiddenIconLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledPasswordInput = _styledComponents.default.div.withConfig({
  displayName: "password-input__StyledPasswordInput",
  componentId: "sc-1futz46-0"
})(["position:relative;display:flex;.k-Form-PasswordInput__input{padding-right:", ";}.k-Form-PasswordInput__icon{display:flex;position:absolute;z-index:1;padding:0 ", ";right:0;top:0;bottom:0;cursor:pointer;align-items:center;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&[aria-pressed='true']{svg{fill:", ";transition:all 0.2s;}}}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(11), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, _colorsConfig.default.primary1);

var PasswordInput = function PasswordInput(_ref) {
  var name = _ref.name,
      iconLabel = _ref.iconLabel,
      hiddenIconLabel = _ref.hiddenIconLabel,
      others = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isHidden = _useState2[0],
      setIsHidden = _useState2[1];

  var handleClick = function handleClick() {
    setIsHidden(!isHidden);
  };

  return /*#__PURE__*/_react.default.createElement(StyledPasswordInput, {
    className: "k-Form-PasswordInput"
  }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, others, {
    name: name,
    type: isHidden ? 'password' : 'text',
    className: "k-Form-PasswordInput__input"
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "aria-label": isHidden ? iconLabel : hiddenIconLabel,
    onClick: handleClick,
    "aria-pressed": !isHidden,
    className: "k-Form-PasswordInput__icon k-u-reset-button"
  }, /*#__PURE__*/_react.default.createElement(_passwordIcon.PasswordIcon, null)));
};

exports.PasswordInput = PasswordInput;
PasswordInput.propTypes = {
  iconLabel: _propTypes.default.string.isRequired,
  hiddenIconLabel: _propTypes.default.string.isRequired,
  name: _propTypes.default.string
};
PasswordInput.defaultProps = {
  name: 'password'
};