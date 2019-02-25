import React, { Component } from 'react'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import { MarkdownHeading } from './components/heading'
import { MarkdownLink } from './components/link'
import { MarkdownList } from './components/list'
import { MarkdownParagraph } from './components/paragraph'

export class MarkdownPage extends Component {
  render() {
    return (
      <Markdown
        source={this.props.children}
        renderers={markdownRenderers}
        escapeHtml={false}
      />
    )
  }
}

MarkdownPage.propTypes = {
  children: PropTypes.node.isRequired,
}

const markdownRenderers = {
  paragraph: MarkdownParagraph,
  list: MarkdownList,
  link: MarkdownLink,
  heading: MarkdownHeading,
}
