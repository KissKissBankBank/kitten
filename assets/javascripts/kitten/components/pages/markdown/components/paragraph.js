import React from 'react'
import PropTypes from 'prop-types'
import { Paragraph } from '../../../typography/paragraph'
import { Marger } from '../../../layout/marger'

export const MarkdownParagraph = props => (
  <Marger bottom="2.6">
    <Paragraph modifier={props.modifierParagraph} margin={false}>
      {props.children}
    </Paragraph>
  </Marger>
)

MarkdownParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  modifierParagraph: PropTypes.string,
}

MarkdownParagraph.defaultProps = {
  modifierParagraph: 'primary',
}
