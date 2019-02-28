import React from 'react'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import { MarkdownHeading } from './components/heading'
import { MarkdownLink } from './components/link'
import { MarkdownList } from './components/list'
import { MarkdownParagraph } from './components/paragraph'
import { Context } from './components/context'

export const MarkdownPage = ({ children, modifierParagraph }) => (
  <Context.Provider value={{ modifierParagraph }}>
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
}

MarkdownPage.propTypes = {
  children: PropTypes.node.isRequired,
  modifierParagraph: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
  ]),
}

MarkdownPage.defaultProps = {
  modifierParagraph: 'quaternary',
}
