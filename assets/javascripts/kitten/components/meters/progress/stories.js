import React from 'react'
import { number, color } from '@storybook/addon-knobs'
import { Progress as _Progress } from './index'
import COLORS from '../../../constants/colors-config'

export default {
  title: 'Meters/Progress',
  component: _Progress,
}

export const Progress = args => (
  <_Progress
    {...args}
    value={number('Value', 50)}
    color={color('Color', COLORS.primary1)}
    rampProps={{ style: { height: 6 } }}
  />
)
