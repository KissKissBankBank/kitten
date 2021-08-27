import React from 'react'
import { Progress } from './index'
import { COLORS } from '../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Progress" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        <div>{story()}</div>
      </div>
    ),
  ],
  args: {
    value: 50,
    color: COLORS.primary1,
    rampProps: { style: { height: 6 } },
    variant: 'andromeda',
  },
  argTypes: {
    value: {
      name: 'value',
      control: { type: 'number' },
    },
    color: {
      name: 'color',
      control: { type: 'color' },
    },
    rampProps: {
      name: 'rampProps',
      control: { type: 'object' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
  },
}

export const Default = args => <Progress {...args} />
