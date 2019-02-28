"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownParagraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _paragraph = require("../../../typography/paragraph");

var _marger = require("../../../layout/marger");

var _context = require("./context");

var MarkdownParagraph = function MarkdownParagraph(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var paragraphModifier = _ref2.paragraphModifier;
    return _react.default.createElement(_marger.Marger, {
      bottom: "2.6"
    }, _react.default.createElement(_paragraph.Paragraph, {
      modifier: paragraphModifier,
      margin: false
    }, children));
  });
};

exports.MarkdownParagraph = MarkdownParagraph;