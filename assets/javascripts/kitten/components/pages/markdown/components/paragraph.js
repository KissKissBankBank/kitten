import React from 'react'
import { Paragraph } from '../../../typography/paragraph'
import { Marger } from '../../../layout/marger'
import { Context } from './context'

export const MarkdownParagraph = ({ children }) => (
  <Context.Consumer>
    {({ paragraphModifier }) => (
      <Marger bottom="2.6">
        <Paragraph modifier={paragraphModifier} margin={false}>
          {children}
        </Paragraph>
      </Marger>
    )}
  </Context.Consumer>
)
