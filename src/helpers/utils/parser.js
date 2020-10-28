"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHtml = void 0;

var _htmlToReact = _interopRequireDefault(require("html-to-react"));

// We add a span to make parseHtml works with strings.
var parseHtml = function parseHtml(value) {
  if (!value) return; // We need to escape "<3" common emoji

  var encodedValue = typeof value === 'string' ? value.replace('<3', '&lt;3') : value;
  return new _htmlToReact.default.Parser().parse("<span>".concat(encodedValue, "</span>")).props.children;
};

exports.parseHtml = parseHtml;