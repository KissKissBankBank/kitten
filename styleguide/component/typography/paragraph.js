import React from 'react'
import {
  KarlParagraph,
  KarlParagraphQuaternary,
  KarlParagraphSecondary,
  KarlParagraphTertiary,
  KarlParagraphWithLink,
} from '../../../assets/javascripts/kitten/karl/typography/paragraph'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Paragraph 1">
        <KarlParagraph />
      </Example>
      <Example title="Paragraph 2">
        <KarlParagraphSecondary />
      </Example>
      <Example title="Paragraph 3">
        <KarlParagraphTertiary />
      </Example>
      <Example title="Paragraph 4">
        <KarlParagraphQuaternary />
      </Example>
      <Example title="Paragraph with link">
        <KarlParagraphWithLink />
      </Example>
      <Example title="Paragraph with italic typo">
        <KarlParagraph italic />
      </Example>
    </div>
  )
}
