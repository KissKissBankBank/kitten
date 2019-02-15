import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { MarkdownPage } from '../../components/typography/markdown-page'
import MarkdownExample from '../../karl/examples/markdown-example'

storiesOf('Typo/Markdown-Page', module).add('Markdown-page', () => {
  return <MarkdownExample />
})
