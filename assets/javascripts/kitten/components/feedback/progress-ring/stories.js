import React from 'react'
import { ProgressRing } from './index'
import { Text, COLORS } from '../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: ProgressRing,
  title: 'Feedback/ProgressRing',
  parameters: {
    component: ProgressRing,
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ProgressRing" />
      ),
    },
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
    animationSpeed: 1.4,
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'ProgressRing color.',
      control: 'color',
    },
    value: {
      name: 'value',
      description: 'Percentage of progress %.',
      control: 'number',
    },
    width: {
      name: 'width',
      description: 'Width of ProgressRing.',
      control: 'number',
    },
    strokeWidth: {
      name: 'strokeWidth',
      description: 'Width of circle (stroke).',
      control: 'number',
    },
    animationSpeed: {
      name: 'animationSpeed',
      control: 'number',
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
