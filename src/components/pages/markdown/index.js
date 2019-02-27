"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownPage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _heading = require("./components/heading");

var _link = require("./components/link");

var _list = require("./components/list");

var _paragraph = require("./components/paragraph");

var MarkdownPage = function MarkdownPage(props) {
  return _react.default.createElement(_reactMarkdown.default, {
    source: props.children,
    renderers: markdownRenderers,
    escapeHtml: false
  });
};

exports.MarkdownPage = MarkdownPage;
var markdownRenderers = {
  paragraph: _paragraph.MarkdownParagraph,
  list: _list.MarkdownList,
  link: _link.MarkdownLink,
  heading: _heading.MarkdownHeading
};
MarkdownPage.propTypes = {
  children: _propTypes.default.node.isRequired
};