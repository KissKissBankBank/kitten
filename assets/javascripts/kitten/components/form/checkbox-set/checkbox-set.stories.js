import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { CheckboxSet } from './index'

export default {
  component: CheckboxSet,
  title: 'Form/CheckboxSet',
  parameters: {
    component: CheckboxSet,
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => (
  <CheckboxSet
    variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
    id={text('ID', 'story-radio-button-set')}
    label={text('Label', null)}
    items={[
      {
        label: text('Option A', 'Option A'),
        id: 'option-a',
        defaultChecked: true,
      },
      {
        label: text('Option B', 'Option B'),
        id: 'option-b',
      },
      {
        label: text('Option C', 'Option C'),
        id: 'option-c',
      },
    ]}
    error={boolean('Error?', false)}
    disabled={boolean('Disabled', false)}
  />
)
