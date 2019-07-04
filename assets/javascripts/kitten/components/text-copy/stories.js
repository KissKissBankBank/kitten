import { Container } from '../grid/container'
import { Marger } from '../..'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { TextCopy } from './index'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('TextCopy', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <TextCopy textToCopy={text('Other text to Copy', undefined)}>
          {text(
            'Text',
            'My tex dklfj sfskl jsdlk jsdl kjsdflk jsdf slk fjsdlk jsd lskjf sl ksjd sdlf kjsdf lsdkjf sdlk jsdlk jsflksdj lkdsjf slkfj flksdj lsdkfj st',
          )}
        </TextCopy>
      </StoryContainer>
    )
  })
