import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
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

storiesOf('Pages/Markdown-Page', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <MarkdownPage children={defaultText} />
      </StoryContainer>
    )
  })
