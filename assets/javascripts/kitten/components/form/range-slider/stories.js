import React, { useState } from 'react'
import { number, select } from '@storybook/addon-knobs'
import { RangeSlider } from './index'

const Container = props => (
  <div {...props} className="story-Container story-Grid story-Grid--large" />
)

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
export const WithRangeThumbText = () => {
  const [value, setValue] = useState(0)

  return (
    <Container>
      <RangeSlider
        min={number('min', 0)}
        max={number('max', 100)}
        step={number('step', 1)}
        initialValue={number('initialValue', 20)}
        onChange={event => setValue(event.target.value)}
        rangeThumbText={`Value: ${value}`}
        rangeThumbPosition={select(
          'rangeThumbPosition',
          {
            top: 'top',
            bottom: 'bottom',
          },
          'bottom',
        )}
        name="slider"
      />
    </Container>
  )
}
