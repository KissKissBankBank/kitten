import React from 'react'
import { withKnobs, number, color } from '@storybook/addon-knobs'
import { InTheNews } from './index'

export default {
  component: InTheNews,
  title: 'pages/homepage/InTheNews',
  decorators: [withKnobs],
  parameters: {
    component: InTheNews,
  },
}

export const DefaultProps = () => (
  <InTheNews />
)
