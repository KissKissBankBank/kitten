import React from 'react'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import { MarkdownHeading } from './components/heading'
import { MarkdownLink } from './components/link'
import { MarkdownList } from './components/list'
import { MarkdownParagraph } from './components/paragraph'
import { MarkdownLinkList } from './components/link-list'
import { Context } from './components/context'

export const MarkdownPage = ({ children, paragraphModifier }) => (
  <Context.Provider value={{ paragraphModifier }}>
    <Markdown
      source={children}
      renderers={markdownRenderers}
      escapeHtml={false}
    />
  </Context.Provider>
)

const markdownRenderers = {
  paragraph: MarkdownParagraph,
  list: MarkdownList,
  link: MarkdownLink,
  heading: MarkdownHeading,
  blockquote: MarkdownLinkList,
}

MarkdownPage.propTypes = {
  children: PropTypes.node.isRequired,
  paragraphModifier: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
  ]),
}

MarkdownPage.defaultProps = {
  paragraphModifier: 'quaternary',
}
