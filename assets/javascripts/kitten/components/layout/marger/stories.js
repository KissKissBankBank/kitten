import React from 'react'
import { Marger } from './index'
import { number } from '@storybook/addon-knobs'
import styled from 'styled-components'

const StyledStory = styled.div`
  display: flow-root; // displays margin background color
  background-color: lavenderblush;

  > * {
    background-color: lavender;
  }
`

export default {
  title: 'Layout/Marger',
  component: Marger,
}

export const Default = () => (
  <StyledStory>
    <Marger top={number('top', 2)} bottom={number('bottom', 2)}>
      Marger with {number('top', 2) * 10}px top margin and{' '}
      {number('bottom', 2) * 10}px bottom margin.
    </Marger>
  </StyledStory>
)
