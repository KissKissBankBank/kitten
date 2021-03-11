"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownParagraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _next = require("../../../typography/paragraph/next");

var _marger = require("../../../layout/marger");

var _context = require("./context");

var MarkdownParagraph = function MarkdownParagraph(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var paragraphModifier = _ref2.paragraphModifier;
    return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
      bottom: "2.6"
    }, /*#__PURE__*/_react.default.createElement(_next.Paragraph, {
      modifier: paragraphModifier,
      noMargin: true
    }, children));
  });
};

exports.MarkdownParagraph = MarkdownParagraph;