"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CloseButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _button = require("../../action/button");

var _crossIconNext = require("../../graphics/icons-next/cross-icon-next");

var _excluded = ["closeButtonLabel", "buttonModifier"];

var CloseButton = function CloseButton(_ref) {
  var closeButtonLabel = _ref.closeButtonLabel,
      buttonModifier = _ref.buttonModifier,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
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