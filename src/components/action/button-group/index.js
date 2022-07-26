"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ButtonGroup = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _button = require("../../action/button");

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

const StyledButtonGroup = _styledComponents.default.div.withConfig({
  displayName: "button-group__StyledButtonGroup",
  componentId: "sc-yndpz0-0"
})(["display:flex;justify-content:center;.k-ButtonGroup__button{position:relative;z-index:0;min-width:auto;width:auto;border-radius:0;&:not(:last-child){margin-right:", ";}&:first-child{border-top-left-radius:var(--border-radius-s);border-bottom-left-radius:var(--border-radius-s);}&:last-child{border-top-right-radius:var(--border-radius-s);border-bottom-right-radius:var(--border-radius-s);}&:active,&:hover{z-index:1;}&.k-ButtonGroup__button--isActive{z-index:2;}&:focus-visible{z-index:3;}}"], (0, _typography.pxToRem)(-1));

const ButtonGroup = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledButtonGroup, (0, _extends2.default)({
    role: "group"
  }, props, {
    className: (0, _classnames.default)('k-ButtonGroup', className)
  }));
};

exports.ButtonGroup = ButtonGroup;

const ButtonGroupButton = _ref2 => {
  let {
    className,
    active,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    active: active,
    className: (0, _classnames.default)('k-ButtonGroup__button', className, {
      'k-ButtonGroup__button--isActive': active
    })
  }));
};

ButtonGroup.Button = ButtonGroupButton;