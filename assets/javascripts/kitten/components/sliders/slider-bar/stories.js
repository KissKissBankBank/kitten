import React from 'react'
import styled from 'styled-components'
import { number } from '@storybook/addon-knobs'
import { SliderBar } from './index'

const Container = styled.div`
  max-width: 300px;
  margin: 30px auto;
`

const options = {
  range: true,
  min: 0,
  max: 1,
  step: 0.01,
}

export default {
  title: 'Sliders/SliderBar',
  component: SliderBar,
}

export const Default = () => (
  <Container>
    <SliderBar ratio={number('Ratio', 0.5, options)} />
  </Container>
)
