import React from 'react'
import { TitleWithStroke, Paragraph } from 'kitten'

export const Tip = ({ title, paragraph }) => (
  <div className="k-u-margin-top-triple k-u-margin-top-none@s-up k-u-margin-top-decuple@l-up">
    <TitleWithStroke modifier="quinary" margin={false}>
      {title}
    </TitleWithStroke>

    <Paragraph modifier="quaternary" margin={false}>
      {paragraph}
    </Paragraph>
  </div>
)
