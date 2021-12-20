"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.parseHtml = void 0;

var _htmlToReact = _interopRequireDefault(require("html-to-react"));

var _dompurify = _interopRequireDefault(require("dompurify"));

var _elementHelper = require("../dom/element-helper");

// We add a span to make parseHtml works with strings.
var parseHtml = function parseHtml(value, options) {
  if (options === void 0) {
    options = {
      sanitize: true
    };
  }

  if (!value) return; // We need to escape "<3" common emoji

  var clean = typeof value === 'string' ? value.replace('<3', '&lt;3') : value;

  if (options.sanitize) {
    clean = _elementHelper.domElementHelper.canUseDom() ? _dompurify.default.sanitize(clean) : '';
  }

  return new _htmlToReact.default.Parser().parse("<span>" + clean + "</span>").props.children;
};

exports.parseHtml = parseHtml;