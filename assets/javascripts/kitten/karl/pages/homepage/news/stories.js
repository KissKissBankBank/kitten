import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import HomepageNews from './index'

export default {
  component: HomepageNews,
  title: 'pages/homepage/HomepageNews',
  parameters: {
    component: HomepageNews,
  },
}

export const DefaultProps = () => (
  <HomepageNews />
)
