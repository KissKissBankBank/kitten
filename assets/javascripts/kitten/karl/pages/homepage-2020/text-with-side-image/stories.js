import React from 'react'
import { TextWithSideImage } from './index'
import { Container } from 'kitten'

export default {
  component: TextWithSideImage,
  title: 'pages/Homepage 2020/TextWithSideImage',
  parameters: {
    component: TextWithSideImage,
  },
}

export const DefaultProps = () => (
  <Container>
    <TextWithSideImage />
  </Container>
)
