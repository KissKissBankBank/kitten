import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { MarkdownPage } from '../../pages/markdown/index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

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

* Unordered list can use asterisks
- Or minuses
+ Or pluses

# Link

[I'm an inline-style link](https://www.google.com)
`

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

const modifierOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Quaternary: 'quaternary',
}

export default {
  title: 'Pages/Markdown-Page',
  component: MarkdownPage,
}

export const Default = () => {
  return (
    <StoryContainer>
      <MarkdownPage
        children={text('children', defaultText)}
        paragraphModifier={select(
          'Modifier paragraph',
          modifierOptions,
          'primary',
        )}
      />
    </StoryContainer>
  )
}
