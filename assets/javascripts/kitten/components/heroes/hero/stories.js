import React from 'react'
import COLORS from '../../../constants/colors-config'
import { Hero } from './index'
import { text, boolean, color, select } from '@storybook/addon-knobs'

export default {
  component: Hero,
  title: 'Heroes/Hero',
  parameters: {
    component: Hero,
  },
  decorators: [
    Story => (
      <div className="story-Container">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => (
  <Hero
    direction={select('direction', { Left: 'left', Right: 'right' }, 'left')}
    imageSrc={text('imageSrc', 'http://placekitten.com/800/800')}
    tiny={boolean('Tiny', false)}
    contentBackgroundColor={color('contentBackgroundColor', COLORS.font1)}
    contentColor={color('contentColor', COLORS.background1)}
  >
    <div className="k-u-margin-top-decuple k-u-margin-bottom-decuple k-u-align-center">
      FooBar
    </div>
  </Hero>
)
