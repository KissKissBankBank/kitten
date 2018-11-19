"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlFormRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _tagButton = require("kitten/components/buttons/tag-button");

var _formRow = require("kitten/components/form/form-row");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlFormRow = function KarlFormRow() {
  return _react.default.createElement(_formRow.FormRow, null, _react.default.createElement(_tagButton.TagButton, {
    className: "k-FormRow__item"
  }, "Button"), _react.default.createElement(_tagButton.TagButton, {
    className: "k-FormRow__item"
  }, "Button"), _react.default.createElement(_tagButton.TagButton, {
    className: "k-FormRow__item"
  }, "Button"));
};

exports.KarlFormRow = KarlFormRow;