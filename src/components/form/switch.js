"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Switch = function Switch(_ref) {
  var id = _ref.id,
      isChecked = _ref.isChecked,
      disabled = _ref.disabled,
      label = _ref.label,
      big = _ref.big,
      others = (0, _objectWithoutProperties2.default)(_ref, ["id", "isChecked", "disabled", "label", "big"]);
  return _react.default.createElement("div", {
    className: "k-Switch"
  }, _react.default.createElement("input", (0, _extends2.default)({}, others, {
    id: id,
    type: "checkbox",
    className: (0, _classnames.default)('k-Switch__input', others.className),
    defaultChecked: isChecked,
    disabled: disabled
  })), _react.default.createElement("label", {
    htmlFor: id,
    className: (0, _classnames.default)('k-Switch__label', {
      'k-Switch__label--big': big
    })
  }, label));
};

exports.Switch = Switch;