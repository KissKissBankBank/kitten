import React from 'react'
import { COLORS } from '../../..'
import { Hero } from './index'

const args = {
  direction: 'left',
  tiny: false,
  imageSrc: '/kitten.jpg',
  contentBackgroundColor: COLORS.font1,
  contentColor: COLORS.background1,
}

const argTypes = {
  direction: {
    name: 'direction',
    options: ['left', 'right'],
    control: { type: 'select' },
  },
  tiny: {
    name: 'tiny',
    control: { type: 'boolean' },
  },
  imageSrc: {
    name: 'imageSrc',
    control: { type: 'text' },
  },
  contentBackgroundColor: {
    name: 'contentBackgroundColor',
    control: { type: 'color' },
  },
  contentColor: {
    name: 'contentColor',
    control: { type: 'color' },
  },
}

export default {
  component: Hero,
  title: 'Organisms/Hero',
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
  args: args,
  argTypes: argTypes,
}

export const Default = args => (
  <Hero {...args}>
    <div className="k-u-margin-top-decuple k-u-margin-bottom-decuple k-u-align-center">
      FooBar
    </div>
  </Hero>
)
