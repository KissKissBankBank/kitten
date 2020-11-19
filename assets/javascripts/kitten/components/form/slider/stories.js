import React, { createContext, useContext, useEffect, useState } from 'react'
import { Slider } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../typography/text'
import merge from 'lodash/fp/merge'

const defaultProps = {
  values: {
    day: '',
  },
  onChange: _values => {},
}

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

const SliderContext = createContext(defaultProps)
export const useSliderContext = () => useContext(SliderContext)

export default {
  title: 'Sliders/Slider',
  component: Slider,
}

export const SliderDefault = ({ ...props }) => {
  const [sliderMin, setSliderMin] = useState(0)
  const [sliderMax, setSliderMax] = useState(100)

  const [sliderValues, updateSliderValues] = useState(
    merge(defaultProps.values)(props.values),
  )
  const contextValues = merge(defaultProps)({
    ...props,
    values: sliderValues,
    setSliderValues: v => {
      updateSliderValues(merge(sliderValues)(v))
    },
  })

  useEffect(() => {
    contextValues.onChange(sliderValues)
  }, [sliderValues])

  return (
    <StoryContainer>
      <Slider
        name="nombre de jours"
        min={sliderMin}
        max={sliderMax}
        value={contextValues}
        // onChange={ _values => {}}
    />
    </StoryContainer>
  )
}
