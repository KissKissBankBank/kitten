import React from 'react'
import { number, color } from '@storybook/addon-knobs'
import { HighlightHalo } from './index'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import COLORS from '../../../constants/colors-config'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="10" style={{ marginLeft: 60 }}>
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Atoms/HighlightHalo',
  component: HighlightHalo,
}

export const Default = () => {
  return (
    <StoryContainer>
      <HighlightHalo
        haloColor={color('Halo Color:', COLORS.primary1)}
        haloSize={number('Halo Size:', 120, {
          range: true,
          min: 1,
          max: 500,
          step: 10,
        })}
        animationCycles={number('Animation Cycles:', 3, {
          range: true,
          min: 0,
          max: 20,
          step: 1,
        })}
        animationCycleDuration={number('Cycle Duration:', 4, {
          range: true,
          min: 1,
          max: 20,
          step: 1,
        })}
        animationDelay={number('Animation Delay:', 0, {
          range: true,
          min: 0,
          max: 20,
          step: 1,
        })}
        onHaloAnimationEnd={() => {
          console.warn('Animation has ended.')
        }}
      />
    </StoryContainer>
  )
}
