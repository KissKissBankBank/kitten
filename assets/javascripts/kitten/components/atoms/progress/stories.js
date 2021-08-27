import React from 'react'
import { number, color, select } from '@storybook/addon-knobs'
import { Progress } from './index'
import { COLORS } from '../../..'
import { DocsPage } from 'storybook/docs-page'

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

export default {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Progress" />,
    },
  },
}

export const Default = args => (
  <Progress
    {...args}
    value={number('Value', 50)}
    color={color('Color', COLORS.primary1)}
    rampProps={{ style: { height: 6 } }}
    variant={select('Variant', variantOptions, 'andromeda')}
  />
)
