import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import EngagementsCarousel from './index'

export default {
  component: EngagementsCarousel,
  title: 'pages/homepage/EngagementsCarousel',
  decorators: [withKnobs],
  parameters: {
    component: EngagementsCarousel,
  },
}

export const DefaultProps = () => (
  <EngagementsCarousel />
)
