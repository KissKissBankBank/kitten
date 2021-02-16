import React from 'react'
import { TitleWithStroke } from '../../../../../components/typography/title-with-stroke'
import { Paragraph } from '../../../../../components/typography/next/paragraph'

export const Tip = ({ title, paragraph }) => (
  <div className="k-u-margin-top-triple k-u-margin-top-none@s-up k-u-margin-top-decuple@l-up">
    <TitleWithStroke modifier="quinary" margin={false}>
      {title}
    </TitleWithStroke>

    <Paragraph modifier="tertiary" margin={false}>
      {paragraph}
    </Paragraph>
  </div>
)
