"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHtml = void 0;

var _htmlToReact = _interopRequireDefault(require("html-to-react"));

var _dompurify = _interopRequireDefault(require("dompurify"));

// We add a span to make parseHtml works with strings.
var parseHtml = function parseHtml(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    sanitize: true
  };
  if (!value) return; // We need to escape "<3" common emoji

  var clean = typeof value === 'string' ? value.replace('<3', '&lt;3') : value;

  if (options.sanitize) {
    clean = _dompurify.default.sanitize(clean);
  }

  return new _htmlToReact.default.Parser().parse("<span>".concat(clean, "</span>")).props.children;
};

exports.parseHtml = parseHtml;