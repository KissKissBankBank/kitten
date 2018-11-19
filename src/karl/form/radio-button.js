"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlRadioButtonContentError = exports.KarlRadioButtonError = void 0;

var _react = _interopRequireDefault(require("react"));

var _radioButton = require("kitten/components/form/radio-button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlRadioButtonError = function KarlRadioButtonError() {
  return _react.default.createElement("div", {
    className: "k-TextInputWithInfo"
  }, _react.default.createElement(_radioButton.RadioButton, {
    error: true,
    name: "karlradiobuttonerror",
    text: "Error default"
  }), _react.default.createElement(_radioButton.RadioButton, {
    error: true,
    name: "karlradiobuttonerror",
    text: "Error default checked",
    defaultChecked: true
  }));
};

exports.KarlRadioButtonError = KarlRadioButtonError;

var KarlRadioButtonContentError = function KarlRadioButtonContentError() {
  return _react.default.createElement("div", {
    className: "k-TextInputWithInfo"
  }, _react.default.createElement(_radioButton.RadioButton, {
    error: true,
    id: "karl-radio-button-with-content-error",
    name: "karl-radio-button-with-content",
    text: "Error"
  }, "Quam multa enim, quae nostra causa numquam faceremus, facimus causa amicorum! precari ab indigno, supplicare, tum acerbius in aliquem invehi insectarique vehementius."));
};

exports.KarlRadioButtonContentError = KarlRadioButtonContentError;