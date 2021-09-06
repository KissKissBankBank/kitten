import React, { useState } from 'react'
import { RangeSlider } from './index'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Form/RangeSlider',
  component: RangeSlider,
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    initialValue: 20,
    name: 'slider',
    onChange: action('onChange'),
    rangeThumbText: null,
    rangeThumbPosition: 'bottom',
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    min: {
      name: 'min',
      control: { type: 'number' },
    },
    max: {
      name: 'max',
      control: { type: 'number' },
    },
    step: {
      name: 'step',
      control: { type: 'number' },
    },
    initialValue: {
      name: 'initialValue',
      control: { type: 'number' },
    },
    name: {
      name: 'name',
      control: { type: 'text' },
    },
    rangeThumbText: {
      name: 'rangeThumbText',
      control: { type: 'text' },
    },
    rangeThumbPosition: {
      name: 'rangeThumbPosition',
      options: ['top', 'bottom'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="RangeSlider" />,
    },
  },
}

export const Default = args => <RangeSlider {...args} />

export const WithRangeThumbText = args => {
  const [value, setValue] = useState(0)

  return (
    <RangeSlider
      {...args}
      onChange={event => setValue(event.target.value)}
      rangeThumbText={`Value: ${value}`}
    />
  )
}

export const Controlled = args => {
  const [value, setValue] = useState(40)
  return (
    <RangeSlider
      {...args}
      max={20}
      min={1}
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  )
}
