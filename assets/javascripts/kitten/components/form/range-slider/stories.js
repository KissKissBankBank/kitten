import React from 'react'
import styled from 'styled-components'
import { number } from '@storybook/addon-knobs'
import { RangeSlider } from './index'

const Container = styled.div`
  max-width: 300px;
  margin: 30px auto;
`

export default {
  title: 'Form/RangeSlider',
  component: RangeSlider,
}

export const Default = () => (
  <Container>
    <RangeSlider
      min={number('min', 0)}
      max={number('max', 100)}
      step={number('step', 1)}
      initialValue={number('initialValue', 20)}
      name="slider"
    />
  </Container>
)
