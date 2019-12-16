import { Container } from '../grid/container'
import { Marger } from '../..'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
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
        <TextCopy
          textToCopy={text('Other text to Copy', undefined)}
          alertMessage={text('Alert Message', 'Copied link !')}
          forceOneLine={boolean('Force one line', false)}
          buttonText={text('button text', 'Je suis button !')}
        >
          {text('Text', 'My text to copy on click')}
        </TextCopy>
      </StoryContainer>
    )
  })
