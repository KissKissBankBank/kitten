import { Container } from '../../structure/container'
import { Marger } from '../../..'
import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { TextCopy } from './index'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Molecules/TextCopy',
  component: TextCopy,
}

export const Default = () => {
  return (
    <StoryContainer>
      <TextCopy
        textToCopy={text('textToCopy', undefined)}
        alertMessage={text('alertMessage', 'Copied link !')}
        forceOneLine={boolean('forceOneLine', false)}
        buttonText={text('buttonText', 'Je suis button !')}
        variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
      >
        {text('Text', 'My text to copy on click')}
      </TextCopy>
    </StoryContainer>
  )
}
