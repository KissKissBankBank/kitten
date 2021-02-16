import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { TextCopy } from './index'

const StoryContainer = ({ children }) => (
  <div className="story-Container story-Grid story-Grid--large">{children}</div>
)

export default {
  title: 'TextCopy/TextCopy',
  component: TextCopy,
}

export const Default = () => {
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
}
