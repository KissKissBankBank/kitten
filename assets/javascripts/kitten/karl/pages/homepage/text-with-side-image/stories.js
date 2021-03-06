import React from 'react'
import { TextWithSideImage } from './index'
import { Container } from '../../../../components/grid/container'

export default {
  component: TextWithSideImage,
  title: 'pages/homepage/TextWithSideImage',
  parameters: {
    component: TextWithSideImage,
  },
}

export const DefaultProps = () => (
  <Container>
    <TextWithSideImage />
  </Container>
)
