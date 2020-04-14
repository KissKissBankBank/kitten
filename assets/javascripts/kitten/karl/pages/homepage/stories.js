import React from 'react'
import { withKnobs, number, color } from '@storybook/addon-knobs'
import HomePage from './index'

export default {
  component: HomePage,
  title: 'pages/homepage',
  decorators: [withKnobs],
  parameters: {
    component: HomePage,
  },
}

export const Homepage = () => (
  <HomePage />
)
