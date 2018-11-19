"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlLocationInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _label = require("kitten/components/form/label");

var _locationInput = require("kitten/components/form/location-input");

var _marger = require("kitten/components/layout/marger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlLocationInput = function KarlLocationInput() {
  return _react.default.createElement(_marger.Marger, {
    bottom: "1"
  }, _react.default.createElement(_marger.Marger, {
    bottom: "1"
  }, _react.default.createElement(_label.Label, {
    size: "tiny"
  }, "Localisation")), _react.default.createElement(_marger.Marger, {
    top: "1"
  }, _react.default.createElement(_locationInput.LocationInput, null)));
};

exports.KarlLocationInput = KarlLocationInput;