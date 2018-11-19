"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlCheckboxError = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkbox = require("kitten/components/form/checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlCheckboxError = function KarlCheckboxError() {
  return _react.default.createElement("div", {
    className: "k-TextInputWithInfo"
  }, _react.default.createElement(_checkbox.Checkbox, {
    error: true,
    id: "input-error"
  }, "Error default"), _react.default.createElement(_checkbox.Checkbox, {
    error: true,
    id: "input-error-checked",
    defaultChecked: true
  }, "Error default checked"));
};

exports.KarlCheckboxError = KarlCheckboxError;