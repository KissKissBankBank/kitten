"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlSeparator = void 0;

var _react = _interopRequireDefault(require("react"));

var _marger = require("kitten/components/layout/marger");

var _separator = require("kitten/components/layout/separator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlSeparator = function KarlSeparator() {
  return _react.default.createElement(_marger.Marger, {
    top: "5"
  }, _react.default.createElement(_separator.Separator, {
    darker: true
  }));
};

exports.KarlSeparator = KarlSeparator;