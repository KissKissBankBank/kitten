import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { MarkdownPage } from '../../../components/typography/markdown/markdown-page'
import { Container } from '../../../components/grid/container'

const defaultText = `
# H1
## H2
### H3

# Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

# List

1. First ordered list item

2. Another item
  *Unordered sub-list.

  3. Ordered sub-list

* Unordered list can use asterisks
- Or minuses
+ Or pluses

# Link

[I'm an inline-style link](https://www.google.com)

# Blockquotes

> Blockquotes are very handy in email to emulate reply text.
`

storiesOf('Typo/Markdown-Page', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <MarkdownPage content={text('Markdown', defaultText)} />
  })
