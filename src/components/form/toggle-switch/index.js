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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _lockIcon = require("../../../components/graphics/icons/lock-icon");

var transitionDuration = '.15s';
var switchWidth = 60;
var switchHeight = 30;
var borderSize = 2;
var borderRadius = 18;

var StyledSwitchContainer = _styledComponents.default.div.withConfig({
  displayName: "toggle-switch__StyledSwitchContainer",
  componentId: "ski4b0-0"
})(["display:inline-flex;align-items:center;cursor:pointer;", " ", ""], function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled && (0, _styledComponents.css)(["cursor:not-allowed;"]);
}, function (_ref2) {
  var reverseOrder = _ref2.reverseOrder;
  return reverseOrder && (0, _styledComponents.css)(["flex-direction:row-reverse;& ", "{padding-right:", ";padding-left:0;}"], StyledLabel, (0, _typography.pxToRem)(10));
});

var StyledSwitch = _styledComponents.default.button.withConfig({
  displayName: "toggle-switch__StyledSwitch",
  componentId: "ski4b0-1"
})(["display:inline-block;position:relative;box-sizing:border-box;width:", ";height:", ";color:", ";background-color:currentColor;border:", " solid ", ";border-radius:", ";transition:color ", " ease,border-color ", " ease,background-color ", " ease;cursor:pointer;&:focus{border-color:", ";outline:", " solid ", ";outline-offset:", ";.k-ToggleSwitch__circle{border-color:", ";}}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}.k-ToggleSwitch__circle{position:absolute;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;left:-", ";top:-", ";width:", ";height:", ";content:'';background-color:", ";border:", " solid ", ";border-radius:", ";transition:left ", " ease,color ", " ease,border-color ", " ease,background-color ", " ease;}&[aria-pressed='true']{color:", ";border-color:currentColor;.k-ToggleSwitch__circle{left:", ";border-color:currentColor;}}&:active{color:", ";&,.k-ToggleSwitch__circle{border-color:", ";}}&[disabled]{cursor:not-allowed;", " .k-ToggleSwitch__circle{pointer-events:none;}}"], (0, _typography.pxToRem)(switchWidth), (0, _typography.pxToRem)(switchHeight), function (_ref3) {
  var defaultColor = _ref3.defaultColor;
  return defaultColor;
}, (0, _typography.pxToRem)(borderSize), _colorsConfig.default.line2, (0, _typography.pxToRem)(borderRadius), transitionDuration, transitionDuration, transitionDuration, _colorsConfig.default.primary1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(switchHeight), (0, _typography.pxToRem)(switchHeight), _colorsConfig.default.background1, (0, _typography.pxToRem)(borderSize), _colorsConfig.default.line2, (0, _typography.pxToRem)(switchHeight), transitionDuration, transitionDuration, transitionDuration, transitionDuration, function (_ref4) {
  var checkedColor = _ref4.checkedColor;
  return checkedColor;
}, (0, _typography.pxToRem)(switchWidth - switchHeight - borderSize), function (_ref5) {
  var activeColor = _ref5.activeColor;
  return activeColor;
}, function (_ref6) {
  var activeColor = _ref6.activeColor;
  return activeColor;
}, function (_ref7) {
  var locked = _ref7.locked;
  return !locked && (0, _styledComponents.css)(["color:", ";border-color:currentColor;"], function (_ref8) {
    var disabledColor = _ref8.disabledColor;
    return disabledColor;
  });
});

var StyledLabel = _styledComponents.default.label.withConfig({
  displayName: "toggle-switch__StyledLabel",
  componentId: "ski4b0-2"
})(["padding-left:", ";", " font-size:", ";line-height:", ";color:", ";transition:color ", " ease;cursor:pointer;::selection{background:transparent;}::-moz-selection{background:transparent;}", ":hover &{color:", ";}", ":active &{color:", ";}", " button[disabled] + &{color:", ";cursor:not-allowed;}"], (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.light, function (_ref9) {
  var big = _ref9.big;
  return (0, _typography.stepToRem)(big ? 3 : 0);
}, (0, _typography.pxToRem)(switchHeight), _colorsConfig.default.font1, transitionDuration, StyledSwitchContainer, _colorsConfig.default.primary1, StyledSwitchContainer, _colorsConfig.default.primary3, StyledSwitchContainer, function (_ref10) {
  var disabledColor = _ref10.disabledColor;
  return disabledColor;
});

var ToggleSwitch = function ToggleSwitch(_ref11) {
  var activeColor = _ref11.activeColor,
      big = _ref11.big,
      checkedColor = _ref11.checkedColor,
      defaultColor = _ref11.defaultColor,
      disabled = _ref11.disabled,
      disabledColor = _ref11.disabledColor,
      id = _ref11.id,
      isChecked = _ref11.isChecked,
      isLabelVisible = _ref11.isLabelVisible,
      label = _ref11.label,
      labelProps = _ref11.labelProps,
      locked = _ref11.locked,
      reverseOrder = _ref11.reverseOrder,
      switchProps = _ref11.switchProps,
      onChange = _ref11.onChange,
      others = (0, _objectWithoutProperties2.default)(_ref11, ["activeColor", "big", "checkedColor", "defaultColor", "disabled", "disabledColor", "id", "isChecked", "isLabelVisible", "label", "labelProps", "locked", "reverseOrder", "switchProps", "onChange"]);

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

  return /*#__PURE__*/_react.default.createElement(StyledSwitchContainer, (0, _extends2.default)({
    isDisabled: disabled || locked,
    reverseOrder: reverseOrder
  }, others), /*#__PURE__*/_react.default.createElement(StyledSwitch, (0, _extends2.default)({
    onClick: handleClick,
    type: "button",
    id: id,
    disabled: disabled || locked,
    "aria-pressed": isPressed,
    "aria-label": isLabelVisible ? null : label,
    "aria-labelledby": isLabelVisible ? "".concat(id, "_label") : null,
    checkedColor: checkedColor,
    defaultColor: defaultColor,
    disabledColor: disabledColor,
    activeColor: activeColor,
    locked: locked
  }, switchProps), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ToggleSwitch__circle",
    "aria-hidden": "true"
  }, locked && /*#__PURE__*/_react.default.createElement(_lockIcon.LockIcon, {
    width: "12",
    color: _colorsConfig.default.font1
  }))), isLabelVisible && /*#__PURE__*/_react.default.createElement(StyledLabel, (0, _extends2.default)({
    htmlFor: id,
    id: "".concat(id, "_label"),
    disabledColor: disabledColor,
    big: big
  }, labelProps), label));
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