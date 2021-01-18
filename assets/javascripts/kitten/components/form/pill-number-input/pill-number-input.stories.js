import React from 'react'
import { number, boolean } from '@storybook/addon-knobs'
import { PillNumberInput } from './index'

export const Default = () => (
  <PillNumberInput
    value={number('Value', 1)}
    min={number('Min', 0)}
    max={number('Max', 99)}
    disableInput={boolean('Disable input?', false)}
    disabled={boolean('Disable component?', false)}
  />
)
