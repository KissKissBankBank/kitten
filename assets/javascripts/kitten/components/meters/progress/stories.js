import React from 'react'
import { number, color, select } from '@storybook/addon-knobs'
import { Progress as _Progress } from './index'
import COLORS from '../../../constants/colors-config'

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

export default {
  title: 'Meters/Progress',
  component: _Progress,
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
}

export const Progress = args => (
  <_Progress
    {...args}
    value={number('Value', 50)}
    color={color('Color', COLORS.primary1)}
    rampProps={{ style: { height: 6 } }}
    variant={select('Variant', variantOptions, 'andromeda')}
  />
)
