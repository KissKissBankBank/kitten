"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardButton = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _button = require("../../../components/buttons/button");

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _deprecated = require("../../../helpers/utils/deprecated");

var Button = (0, _radium.default)(_button.Button);

var RewardCardButton = function RewardCardButton(_ref) {
  var label = _ref.label,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      isDisabled = _ref.isDisabled,
      isTinyVersion = _ref.isTinyVersion;
  if (!label) return null;
  var buttonStyles = isTinyVersion ? styles.tinyVersion : styles.base;
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement(Button, {
    size: "big",
    modifier: "helium",
    type: "button",
    "aria-labelledby": label,
    style: buttonStyles,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
    disabled: isDisabled
  }, label));
};

exports.RewardCardButton = RewardCardButton;
var styles = {
  base: (0, _defineProperty2.default)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1.3rem',
    padding: "".concat((0, _typography.pxToRem)(22), " ").concat((0, _typography.pxToRem)(30))
  }, "@media (max-width: ".concat(_screenConfig.ScreenConfig.S.max, "px)"), {
    width: 'calc(100% + 4px)',
    position: 'relative',
    left: -2,
    bottom: -2
  }),
  tinyVersion: {
    width: 'calc(100% + 4px)',
    position: 'relative',
    left: -2,
    bottom: -2
  }
};
RewardCardButton.propTypes = {
  label: _propTypes.default.string,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  onClick: _propTypes.default.func,
  isDisabled: _propTypes.default.bool,
  isTinyVersion: _propTypes.default.bool.isRequired
};
RewardCardButton.defaultProps = {
  label: '',
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onClick: function onClick() {},
  disabled: false
};