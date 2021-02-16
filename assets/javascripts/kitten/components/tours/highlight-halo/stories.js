import React from 'react'
import { number, color } from '@storybook/addon-knobs'
import { HighlightHalo } from './index'
import COLORS from '../../../constants/colors-config'

export default {
  title: 'Notifications/HighlightHalo',
  component: HighlightHalo,
  decorators: [
    Story => (
      <div className="story-Container story-Grid">
        <div />
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  return (
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
  )
}
