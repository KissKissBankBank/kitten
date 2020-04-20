import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { FeaturedProjects } from './index'
import { Container } from '../../../../components/grid/container'

export default {
  component: FeaturedProjects,
  title: 'pages/homepage/FeaturedProjects',
  decorators: [withKnobs],
  parameters: {
    component: FeaturedProjects,
  },
}

export const DefaultProps = () => (
  <Container>
    <FeaturedProjects />
  </Container>
)
