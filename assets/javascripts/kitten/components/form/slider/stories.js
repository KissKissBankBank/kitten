import React, { useEffect, useState } from 'react'
import { Slider } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../typography/text'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Sliders/Slider',
  component: Slider,
}

export const SliderDefault = () => {
  const sliderMin = useState(0)
  const sliderMax = useState(100)
  const [sliderValue, setSliderValue] = useState(0)
  
  return (
    <StoryContainer>   
      <Slider
        name="nombre de jours"
        min={sliderMin}
        max={sliderMax}
        value={sliderValue}
        // onChange={value => {
        //   setSliderValue(value)
        //   cropperInstance.zoomTo(value / 100)
        // }}
    />
    </StoryContainer>
  )
}
