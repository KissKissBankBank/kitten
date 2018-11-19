"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlHugeVerticalStroke = exports.KarlBigVerticalStroke = exports.KarlTinyVerticalStroke = exports.KarlVerticalStroke = void 0;

var _react = _interopRequireDefault(require("react"));

var _verticalStroke = require("kitten/components/layout/vertical-stroke");

var _marger = require("kitten/components/layout/marger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlVerticalStroke = function KarlVerticalStroke() {
  return _react.default.createElement(_marger.Marger, {
    top: "3",
    bottom: "2"
  }, _react.default.createElement(_verticalStroke.VerticalStroke, null));
};

exports.KarlVerticalStroke = KarlVerticalStroke;

var KarlTinyVerticalStroke = function KarlTinyVerticalStroke() {
  return _react.default.createElement(_marger.Marger, {
    top: "3",
    bottom: "2"
  }, _react.default.createElement(_verticalStroke.VerticalStroke, {
    size: "tiny"
  }));
};

exports.KarlTinyVerticalStroke = KarlTinyVerticalStroke;

var KarlBigVerticalStroke = function KarlBigVerticalStroke() {
  return _react.default.createElement(_marger.Marger, {
    top: "3",
    bottom: "2"
  }, _react.default.createElement(_verticalStroke.VerticalStroke, {
    size: "big"
  }));
};

exports.KarlBigVerticalStroke = KarlBigVerticalStroke;

var KarlHugeVerticalStroke = function KarlHugeVerticalStroke() {
  return _react.default.createElement(_marger.Marger, {
    top: "3",
    bottom: "2"
  }, _react.default.createElement(_verticalStroke.VerticalStroke, {
    size: "huge"
  }));
};

exports.KarlHugeVerticalStroke = KarlHugeVerticalStroke;