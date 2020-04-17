import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { InTheNews } from './index'

export default {
  component: InTheNews,
  title: 'pages/homepage/ProjectSection',
  decorators: [withKnobs],
  parameters: {
    component: InTheNews,
  },
}

export const DefaultProps = () => (
  <InTheNews />
)
