import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { MarkdownHeading } from './components/heading';
import { MarkdownLink } from './components/link';
import { MarkdownList } from './components/list';
import { MarkdownParagraph } from './components/paragraph';
import { Context } from './components/context';
export var MarkdownPage = function MarkdownPage(_ref) {
  var children = _ref.children,
      paragraphModifier = _ref.paragraphModifier;
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      paragraphModifier: paragraphModifier
    }
  }, /*#__PURE__*/React.createElement(Markdown, {
    source: children,
    renderers: markdownRenderers,
    escapeHtml: false
  }));
};
var markdownRenderers = {
  paragraph: MarkdownParagraph,
  list: MarkdownList,
  link: MarkdownLink,
  heading: MarkdownHeading
};
MarkdownPage.propTypes = {
  children: PropTypes.node.isRequired,
  paragraphModifier: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary'])
};
MarkdownPage.defaultProps = {
  paragraphModifier: 'quaternary'
};