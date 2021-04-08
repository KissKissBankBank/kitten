import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { TextCopy } from './index'

export default {
  title: 'TextCopy/TextCopy',
  component: TextCopy,
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  return (
    <TextCopy
      textToCopy={text('Other text to Copy', undefined)}
      alertMessage={text('Alert Message', 'Copied link !')}
      forceOneLine={boolean('Force one line', false)}
      buttonText={text('button text', 'Je suis button !')}
    >
      {text('Text', 'My text to copy on click')}
    </TextCopy>
  )
}
