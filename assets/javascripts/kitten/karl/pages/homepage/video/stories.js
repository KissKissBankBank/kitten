import React from 'react'
import { Video } from './index'
import { Container } from 'kitten'

export default {
  component: Video,
  title: 'pages/homepage/Video',
  parameters: {
    component: Video,
  },
}

export const DefaultProps = () => (
  <Container>
    <Video />
  </Container>
)
