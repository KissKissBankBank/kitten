"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _heading = require("./components/heading");

var _link = require("./components/link");

var _list = require("./components/list");

var _paragraph = require("./components/paragraph");

var _context = require("./components/context");

var MarkdownPage = function MarkdownPage(_ref) {
  var children = _ref.children,
      paragraphModifier = _ref.paragraphModifier;
  return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: {
      paragraphModifier: paragraphModifier
    }
  }, /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, {
    source: children,
    renderers: markdownRenderers,
    escapeHtml: false
  }));
};

exports.MarkdownPage = MarkdownPage;
var markdownRenderers = {
  paragraph: _paragraph.MarkdownParagraph,
  list: _list.MarkdownList,
  link: _link.MarkdownLink,
  heading: _heading.MarkdownHeading
};
MarkdownPage.propTypes = {
  children: _propTypes.default.node.isRequired,
  paragraphModifier: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'quaternary'])
};
MarkdownPage.defaultProps = {
  paragraphModifier: 'quaternary'
};