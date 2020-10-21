import React from 'react'
import { number } from '@storybook/addon-knobs'
import { PillNumberInput } from './index'

export const Default = () => (
  <PillNumberInput
    value={number('Value', 1)}
    min={number('Min', 0)}
    max={number('Max', 99)}
  />
)
