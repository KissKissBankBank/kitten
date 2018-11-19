"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHtml = void 0;

var _htmlToReact = _interopRequireDefault(require("html-to-react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We add a span to make parseHtml works with strings.
var parseHtml = function parseHtml(value) {
  if (!value) return;
  return new _htmlToReact.default.Parser().parse("<span>".concat(value, "</span>")).props.children;
};

exports.parseHtml = parseHtml;