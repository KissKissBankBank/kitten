import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import Video from './index'

export default {
  component: Video,
  title: 'pages/homepage/Video',
  parameters: {
    component: Video,
  },
}

export const DefaultProps = () => (
  <Video />
)
