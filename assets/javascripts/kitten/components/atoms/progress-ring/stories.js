import React from 'react'
import { ProgressRing } from './index'
import { Text, COLORS } from '../../..'

export default {
  component: ProgressRing,
  title: 'Atoms/ProgressRing',
  parameters: {
    component: ProgressRing,
  },
  decorators: [
    story => (
      <div className="story-Container k-u-flex k-u-flex-alignItems-center">
        {story()}
      </div>
    ),
  ],
  args: {
    color: COLORS.primary2,
    value: 50,
    width: 160,
    strokeWidth: 5,
    variant: 'andromeda',
    animationSpeed: 1.4,
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'ProgressRing color.',
      control: { type: 'color' },
    },
    value: {
      name: 'value',
      description: 'Percentage of progress %.',
      control: { type: 'number' },
    },
    width: {
      name: 'width',
      description: 'Width of ProgressRing.',
      control: { type: 'number' },
    },
    strokeWidth: {
      name: 'strokeWidth',
      description: 'Width of circle (stroke).',
      control: { type: 'number' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
    animationSpeed: {
      name: 'animationSpeed',
      control: { type: 'number' },
    },
  },
}

export const DefaultProps = args => (
  <>
    <ProgressRing {...args} />
    <Text
      size="micro"
      color="font1"
      weight="regular"
      className="k-u-margin-left-single"
    >
      Financé à {args.value}%
    </Text>
  </>
)
