"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _button = require("../../../components/buttons/button");

var _crossIcon = require("../../../components/icons/cross-icon");

var CloseButton = function CloseButton(_ref) {
  var closeButtonLabel = _ref.closeButtonLabel,
      buttonModifier = _ref.buttonModifier,
      others = (0, _objectWithoutProperties2.default)(_ref, ["closeButtonLabel", "buttonModifier"]);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    icon: true,
    type: "button",
    title: closeButtonLabel,
    "aria-label": closeButtonLabel,
    modifier: buttonModifier
  }, others), /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
    width: "8",
    height: "8"
  }));
};

exports.CloseButton = CloseButton;
CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen'
};