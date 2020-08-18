import React from 'react'
import { Container } from './index'
import COLORS from '../../../constants/colors-config'

export default {
  title: 'Grid/Container',
  component: Container,
}

export const Default = args => (
  <Container {...args}>
    <div
      style={{
        height: '100px',
        backgroundColor: COLORS.line1,
      }}
    />
  </Container>
)

export const WithCustomStyles = args => (
  <Container
    {...args}
    style={{
      position: 'relative',

      [`@media (max-width: 1337px)`]: {
        paddingBottom: 80,
      },
    }}
  >
    <div
      style={{
        height: '100px',
        backgroundColor: COLORS.line1,
      }}
    />
  </Container>
)
