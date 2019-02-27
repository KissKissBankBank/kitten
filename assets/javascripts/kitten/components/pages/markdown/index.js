import React, { Component } from 'react'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import { MarkdownHeading } from './components/heading'
import { MarkdownLink } from './components/link'
import { MarkdownList } from './components/list'
import { MarkdownParagraph } from './components/paragraph'

export const MarkdownPage = props => {
  console.log('props', props)
  return (
    <Markdown
      source={props.children}
      renderers={markdownRenderers}
      escapeHtml={false}
    />
  )
}

const markdownRenderers = {
  paragraph: MarkdownParagraph,
  list: MarkdownList,
  link: MarkdownLink,
  heading: MarkdownHeading,
}

MarkdownPage.propTypes = {
  children: PropTypes.node.isRequired,
}
