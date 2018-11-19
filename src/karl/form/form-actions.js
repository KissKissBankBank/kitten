"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlFormActions = void 0;

var _react = _interopRequireDefault(require("react"));

var _formActions = require("kitten/components/form/form-actions");

var _button = require("kitten/components/buttons/button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlFormActions = function KarlFormActions(props) {
  return _react.default.createElement(_formActions.FormActions, props, _react.default.createElement(_formActions.FormActions.Item, null, _react.default.createElement(_button.Button, {
    className: "karl-FormActions__button",
    tag: "a",
    href: "#",
    modifier: "hydrogen"
  }, "Button")), _react.default.createElement(_formActions.FormActions.Item, null, _react.default.createElement(_button.Button, {
    className: "karl-FormActions__button",
    modifier: "helium"
  }, "Button")));
};

exports.KarlFormActions = KarlFormActions;