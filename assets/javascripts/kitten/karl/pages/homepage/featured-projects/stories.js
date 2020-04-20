import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { FeaturedProjects } from './index'

export default {
  component: FeaturedProjects,
  title: 'pages/homepage/FeaturedProjects',
  decorators: [withKnobs],
  parameters: {
    component: FeaturedProjects,
  },
}

export const DefaultProps = () => (
  <FeaturedProjects />
)
