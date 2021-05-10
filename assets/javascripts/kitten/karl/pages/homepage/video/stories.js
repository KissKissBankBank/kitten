import React from 'react'
import { Video } from './index'
import { Container } from '../../../../components/structure/container'

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
