import React from 'react'
import { Paragraph } from '../../../typography/paragraph'
import { Marger } from '../../../layout/marger'
import { Context } from './context'

export const MarkdownParagraph = ({ children }) => (
  <Context.Consumer>
    {({ modifierParagraph }) => (
      <Marger bottom="2.6">
        <Paragraph modifier={modifierParagraph} margin={false}>
          {children}
        </Paragraph>
      </Marger>
    )}
  </Context.Consumer>
)
