import React from 'react'
import { ArrowContainer } from './index'
import { Text, COLORS } from '../../../..'

export const Default = ({children, ...args}) => (
  <ArrowContainer {...args}>
    <Text size="tiny" color="font1" weight="light">
      {children}
    </Text>
  </ArrowContainer>
)

Default.decorators = [story => (
  <div className="story-Container story-Grid story-Grid">
    <div>{story()}</div>
  </div>
)]

Default.args = {
  color: COLORS.background3,
  size: 10,
  position: 'left',
  distance: 20,
  centered: false,
  distanceAsPercentage: false,
  distanceIsReverse: false,
  shadow: false,
  borderRadius: 0,
  borderColor: COLORS.line1,
  borderWidth: 0,
  padding: 20,
  children: 'Play with me!',
}

Default.argTypes = {
  color: {
    name: 'color',
    control: { type: 'color' },
  },
  size: {
    name: 'size',
    control: { type: 'number' },
  },
  position: {
    name: 'position',
    options: [
      'left',
      'top',
      'right',
      'bottom',
    ],
    control: { type: 'select' },
  },
  distance: {
    name: 'distance',
    control: { type: 'number' },
  },
  centered: {
    name: 'centered',
    control: { type: 'boolean' },
  },
  distanceAsPercentage: {
    name: 'distanceAsPercentage',
    control: { type: 'boolean' },
  },
  distanceIsReverse: {
    name: 'distanceIsReverse',
    control: { type: 'boolean' },
  },
  shadow: {
    name: 'shadow',
    control: { type: 'boolean' },
  },
  borderRadius: {
    name: 'borderRadius',
    control: { type: 'number' },
  },
  borderColor: {
    name: 'borderColor',
    control: { type: 'color' },
  },
  borderWidth: {
    name: 'borderWidth',
    control: { type: 'number' },
  },
  padding: {
    name: 'padding',
    control: { type: 'number' },
  },
  children: {
    name: 'children',
    control: { type: 'text' },
  },
}
