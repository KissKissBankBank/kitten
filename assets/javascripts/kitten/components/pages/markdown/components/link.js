import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const MarkdownLink = props => (
  <a href={props.href} className="k-Paragraph__link">
    {props.children}
  </a>
)

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
