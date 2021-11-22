"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleSwitch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _lockIcon = require("../../../components/graphics/icons/lock-icon");

var SwitchWrapper = _styledComponents.default.div.withConfig({
  displayName: "toggle-switch__SwitchWrapper",
  componentId: "ski4b0-0"
})(["--toggleSwitch-width:", ";--toggleSwitch-height:", ";--toggleSwitch-border:var(--border-width);--toggleSwitch-borderRadius:", ";--toggleSwitch-duration:0.15s;display:inline-flex;align-items:center;cursor:pointer;gap:", ";.k-ToggleSwitch--disabled{cursor:not-allowed;}.k-ToggleSwitch--reverseOrder{flex-direction:row-reverse;}.k-ToggleSwitch--locked .k-ToggleSwitch__button{color:var(--toggleSwitch-disabledColor);border-color:currentColor;}.k-ToggleSwitch__button{display:inline-block;position:relative;box-sizing:border-box;width:var(--toggleSwitch-width);height:var(--toggleSwitch-height);color:var(--toggleSwitch-defaultColor);background-color:currentColor;border:var(--toggleSwitch-border) solid ", ";border-radius:var(--toggleSwitch-borderRadius);transition:color var(--toggleSwitch-duration) ease,border-color var(--toggleSwitch-duration) ease,background-color var(--toggleSwitch-duration) ease;cursor:pointer;&:focus{border-color:", ";.k-ToggleSwitch__circle{border-color:", ";}}.k-ToggleSwitch__circle{position:absolute;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;left:calc(-1 * var(--toggleSwitch-border));top:calc(-1 * var(--toggleSwitch-border));width:var(--toggleSwitch-height);height:var(--toggleSwitch-height);background-color:", ";border:var(--toggleSwitch-border) solid ", ";border-radius:var(--toggleSwitch-height);transition:left var(--toggleSwitch-duration) ease,color var(--toggleSwitch-duration) ease,border-color var(--toggleSwitch-duration) ease,background-color var(--toggleSwitch-duration) ease;}&[aria-pressed='true']{color:var(--toggleSwitch-checkedColor);border-color:currentColor;.k-ToggleSwitch__circle{left:calc(var(--toggleSwitch-width) - var(--toggleSwitch-height) - var(--toggleSwitch-border));border-color:currentColor;}}&:active{color:var(--toggleSwitch-activeColor);&,.k-ToggleSwitch__circle{border-color:var(--toggleSwitch-activeColor);}}&[disabled]{cursor:not-allowed;.k-ToggleSwitch__circle{pointer-events:none;}}}.k-ToggleSwitch__label{padding-left:", ";", " font-size:", ";color:", ";transition:color var(--toggleSwitch-duration) ease;cursor:pointer;::selection{background:transparent;}::-moz-selection{background:transparent;}}.k-ToggleSwitch--big .k-ToggleSwitch__label{font-size:", ";}&:hover .k-ToggleSwitch__label{color:", ";}&:active .k-ToggleSwitch__label{color:", ";}& button[disabled] + .k-ToggleSwitch__label{color:var(--toggleSwitch-disabledColor);cursor:not-allowed;}"], (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(10), _colorsConfig.default.line2, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.line2, (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(0), _colorsConfig.default.font1, (0, _typography.stepToRem)(3), _colorsConfig.default.primary1, _colorsConfig.default.primary3);

var ToggleSwitch = function ToggleSwitch(_ref) {
  var activeColor = _ref.activeColor,
      big = _ref.big,
      checkedColor = _ref.checkedColor,
      defaultColor = _ref.defaultColor,
      disabled = _ref.disabled,
      disabledColor = _ref.disabledColor,
      id = _ref.id,
      isChecked = _ref.isChecked,
      isLabelVisible = _ref.isLabelVisible,
      label = _ref.label,
      labelProps = _ref.labelProps,
      locked = _ref.locked,
      reverseOrder = _ref.reverseOrder,
      switchProps = _ref.switchProps,
      onChange = _ref.onChange,
      style = _ref.style,
      others = (0, _objectWithoutProperties2.default)(_ref, ["activeColor", "big", "checkedColor", "defaultColor", "disabled", "disabledColor", "id", "isChecked", "isLabelVisible", "label", "labelProps", "locked", "reverseOrder", "switchProps", "onChange", "style"]);

  var _useState = (0, _react.useState)(isChecked),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isPressed = _useState2[0],
      setPressedState = _useState2[1];

  var handleClick = function handleClick() {
    onChange && onChange(!isPressed);
    setPressedState(function (current) {
      return !current;
    });
  };

  return /*#__PURE__*/_react.default.createElement(SwitchWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ToggleSwitch', {
      'k-ToggleSwitch--disabled': disabled || locked,
      'k-ToggleSwitch--reverseOrder': reverseOrder,
      'k-ToggleSwitch--locked': locked,
      'k-ToggleSwitch--big': big
    }),
    style: (0, _extends2.default)({
      '--toggleSwitch-activeColor': activeColor,
      '--toggleSwitch-checkedColor': checkedColor,
      '--toggleSwitch-defaultColor': defaultColor,
      '--toggleSwitch-disabledColor': disabledColor
    }, style)
  }, others), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ToggleSwitch__button'),
    type: "button",
    disabled: disabled || locked,
    "aria-pressed": isPressed,
    "aria-label": isLabelVisible ? null : label,
    "aria-labelledby": isLabelVisible ? "".concat(id, "_label") : null,
    id: id,
    onClick: handleClick
  }, switchProps), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-ToggleSwitch__circle",
    "aria-hidden": "true"
  }, locked && /*#__PURE__*/_react.default.createElement(_lockIcon.LockIcon, {
    width: "12",
    color: _colorsConfig.default.font1
  }))), isLabelVisible && /*#__PURE__*/_react.default.createElement("label", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ToggleSwitch__label')
  }, labelProps, {
    htmlFor: id,
    id: "".concat(id, "_label")
  }), label));
};

exports.ToggleSwitch = ToggleSwitch;
ToggleSwitch.defaultProps = {
  activeColor: _colorsConfig.default.primary3,
  big: false,
  checkedColor: _colorsConfig.default.primary1,
  defaultColor: _colorsConfig.default.line1,
  disabled: false,
  disabledColor: _colorsConfig.default.line2,
  isChecked: false,
  isLabelVisible: true,
  label: 'switch',
  locked: false,
  reverseOrder: false,
  onChange: function onChange() {}
};
ToggleSwitch.propTypes = {
  activeColor: _propTypes.default.string,
  big: _propTypes.default.bool,
  checkedColor: _propTypes.default.string,
  defaultColor: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  disabledColor: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  isChecked: _propTypes.default.bool,
  isLabelVisible: _propTypes.default.bool,
  label: _propTypes.default.string,
  locked: _propTypes.default.bool,
  reverseOrder: _propTypes.default.bool,
  onChange: _propTypes.default.func
};