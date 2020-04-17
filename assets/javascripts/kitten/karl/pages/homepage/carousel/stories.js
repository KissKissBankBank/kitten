import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { HomepageCarousel } from './index'

export default {
  component: HomepageCarousel,
  title: 'pages/homepage/HomepageCarousel',
  parameters: {
    component: HomepageCarousel,
  },
}

export const DefaultProps = () => (
  <HomepageCarousel />
)

