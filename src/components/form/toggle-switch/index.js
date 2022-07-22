"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ToggleSwitch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _lockIcon = require("../../graphics/icons/lock-icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SwitchWrapper = _styledComponents.default.div.withConfig({
  displayName: "toggle-switch__SwitchWrapper",
  componentId: "sc-ski4b0-0"
})(["--toggleSwitch-width:", ";--toggleSwitch-height:", ";--toggleSwitch-border:var(--border-width);--toggleSwitch-borderRadius:var(--border-radius-rounded);--toggleSwitch-duration:0.15s;display:inline-flex;align-items:center;cursor:pointer;gap:", ";.k-ToggleSwitch--disabled{cursor:not-allowed;}.k-ToggleSwitch--reverseOrder{flex-direction:row-reverse;}.k-ToggleSwitch--locked .k-ToggleSwitch__button{color:var(--toggleSwitch-disabledColor);border-color:currentColor;}.k-ToggleSwitch__button{display:inline-block;position:relative;box-sizing:border-box;width:var(--toggleSwitch-width);height:var(--toggleSwitch-height);color:var(--toggleSwitch-defaultColor);background-color:currentColor;border:var(--toggleSwitch-border) solid ", ";border-radius:var(--toggleSwitch-borderRadius);transition:color var(--toggleSwitch-duration) ease,border-color var(--toggleSwitch-duration) ease,background-color var(--toggleSwitch-duration) ease;cursor:pointer;&:focus{border-color:", ";.k-ToggleSwitch__circle{border-color:", ";}}.k-ToggleSwitch__circle{position:absolute;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;left:calc(-1 * var(--toggleSwitch-border));top:calc(-1 * var(--toggleSwitch-border));width:var(--toggleSwitch-height);height:var(--toggleSwitch-height);background-color:", ";border:var(--toggleSwitch-border) solid ", ";border-radius:var(--border-radius-rounded);transition:left var(--toggleSwitch-duration) ease,color var(--toggleSwitch-duration) ease,border-color var(--toggleSwitch-duration) ease,background-color var(--toggleSwitch-duration) ease;}&[aria-pressed='true']{color:var(--toggleSwitch-checkedColor);border-color:currentColor;.k-ToggleSwitch__circle{left:calc( var(--toggleSwitch-width) - var(--toggleSwitch-height) - var(--toggleSwitch-border) );border-color:currentColor;}}&:active{color:var(--toggleSwitch-activeColor);&,.k-ToggleSwitch__circle{border-color:var(--toggleSwitch-activeColor);}}&[disabled]{cursor:not-allowed;.k-ToggleSwitch__circle{pointer-events:none;}}}.k-ToggleSwitch__label{padding-left:", ";", " font-size:", ";color:", ";transition:color var(--toggleSwitch-duration) ease;cursor:pointer;::selection{background:transparent;}::-moz-selection{background:transparent;}}&:hover .k-ToggleSwitch__label{color:", ";}&:active .k-ToggleSwitch__label{color:", ";}& button[disabled] + .k-ToggleSwitch__label{color:var(--toggleSwitch-disabledColor);cursor:not-allowed;}"], (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(10), _colorsConfig.default.line2, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.line2, (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles['400'], (0, _typography.stepToRem)(0), _colorsConfig.default.font1, _colorsConfig.default.primary1, _colorsConfig.default.primary3);

const ToggleSwitch = _ref => {
  let {
    activeColor,
    checkedColor,
    defaultColor,
    disabled,
    disabledColor,
    id,
    isChecked,
    isLabelVisible,
    label,
    labelProps,
    locked,
    reverseOrder,
    switchProps,
    onChange,
    style,
    ...others
  } = _ref;
  const [isPressed, setPressedState] = (0, _react.useState)(isChecked);

  const handleClick = () => {
    onChange && onChange(!isPressed);
    setPressedState(current => !current);
  };

  return /*#__PURE__*/_react.default.createElement(SwitchWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ToggleSwitch', {
      'k-ToggleSwitch--disabled': disabled || locked,
      'k-ToggleSwitch--reverseOrder': reverseOrder,
      'k-ToggleSwitch--locked': locked
    }),
    style: {
      '--toggleSwitch-activeColor': activeColor,
      '--toggleSwitch-checkedColor': checkedColor,
      '--toggleSwitch-defaultColor': defaultColor,
      '--toggleSwitch-disabledColor': disabledColor,
      ...style
    }
  }, others), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ToggleSwitch__button'),
    type: "button",
    disabled: disabled || locked,
    "aria-pressed": isPressed,
    "aria-label": isLabelVisible ? null : label,
    "aria-labelledby": isLabelVisible ? id + "_label" : null,
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
    id: id + "_label"
  }), label));
};

exports.ToggleSwitch = ToggleSwitch;
ToggleSwitch.defaultProps = {
  activeColor: _colorsConfig.default.primary3,
  checkedColor: _colorsConfig.default.primary1,
  defaultColor: _colorsConfig.default.line1,
  disabled: false,
  disabledColor: _colorsConfig.default.line2,
  isChecked: false,
  isLabelVisible: true,
  label: 'switch',
  locked: false,
  reverseOrder: false,
  onChange: () => {}
};
ToggleSwitch.propTypes = {
  activeColor: _propTypes.default.string,
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