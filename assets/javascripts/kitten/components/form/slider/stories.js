import React from 'react'
import styled from 'styled-components'
import { Slider } from './index'

const Container = styled.div`
  max-width: 300px;
  margin: 30px auto;
`

export default {
  title: 'Form/Slider',
  component: Slider,
}

export const Default = () => (
  <Container>
    <Slider initialValue={50} min={0} max={100} step={5} name="slider" />
  </Container>
)
