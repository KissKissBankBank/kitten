"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownParagraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _paragraph = require("../../../typography/paragraph");

var _marger = require("../../../layout/marger");

var MarkdownParagraph = function MarkdownParagraph(props) {
  return _react.default.createElement(_marger.Marger, {
    bottom: "2.6"
  }, _react.default.createElement(_paragraph.Paragraph, {
    modifier: props.modifierParagraph,
    margin: false
  }, props.children));
};

exports.MarkdownParagraph = MarkdownParagraph;
MarkdownParagraph.propTypes = {
  children: _propTypes.default.node.isRequired,
  modifierParagraph: _propTypes.default.string
};
MarkdownParagraph.defaultProps = {
  modifierParagraph: 'primary'
};