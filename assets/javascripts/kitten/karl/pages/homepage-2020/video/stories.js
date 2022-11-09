import React from 'react'
import { Video } from './index'
import { Container } from 'kitten'

export default {
  component: Video,
  title: 'pages/Homepage 2020/Video',
  parameters: {
    component: Video,
  },
}

export const DefaultProps = () => (
  <Container>
    <Video />
  </Container>
)
