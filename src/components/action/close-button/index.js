"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CloseButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _button = require("../../action/button");

var _crossIconNext = require("../../graphics/icons-next/cross-icon-next");

const CloseButton = _ref => {
  let {
    closeButtonLabel,
    buttonModifier,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    fit: "icon",
    type: "button",
    title: closeButtonLabel,
    "aria-label": closeButtonLabel,
    modifier: buttonModifier
  }, others), /*#__PURE__*/_react.default.createElement(_crossIconNext.CrossIconNext, {
    width: "20",
    height: "20"
  }));
};

exports.CloseButton = CloseButton;
CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  borderRadius: 0
};