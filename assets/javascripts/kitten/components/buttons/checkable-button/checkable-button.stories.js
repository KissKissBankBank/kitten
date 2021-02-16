import React, { useState } from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { CheckableButton } from './index'

export const Default = () => {
  const [buttonIsChecked, changeButtonState] = useState(true)

  return (
    <>
      <div>
        <CheckableButton
          tiny={boolean('Tiny', false)}
          big={boolean('Big', false)}
          huge={boolean('Huge', false)}
          giant={boolean('Giant', false)}
          disabled={boolean('Disabled', false)}
          error={boolean('Error', false)}
          isChecked={boolean('Checked', false)}
        >
          <span>{text('Text', 'MyButton')}</span>
        </CheckableButton>
        <p>
          <small>Button controlled by the "Checked" knob</small>
        </p>
      </div>
      <div>
        <CheckableButton
          tiny={boolean('Tiny', false)}
          big={boolean('Big', false)}
          huge={boolean('Huge', false)}
          giant={boolean('Giant', false)}
          disabled={boolean('Disabled', false)}
          error={boolean('Error', false)}
          isChecked={buttonIsChecked}
          onClick={() => changeButtonState(!buttonIsChecked)}
        >
          <span>{text('Text', 'MyButton')}</span>
        </CheckableButton>
        <p>
          <small>Clickable button</small>
        </p>
      </div>
    </>
  )
}

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]
