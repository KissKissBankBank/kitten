import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { ToggleSwitch } from './index'

export default {
  component: ToggleSwitch,
  title: 'Form/ToggleSwitch',
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
    <ToggleSwitch
      id="toggle-switch"
      disabled={boolean('Disabled', false)}
      big={boolean('Big', false)}
      label={text('Label', 'Le label')}
      isLabelVisible={boolean('isLabelVisible', true)}
      reverseOrder={boolean('reverseOrder', false)}
      locked={boolean('Locked?', false)}
    />
  )
}
