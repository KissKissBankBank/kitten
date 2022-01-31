import React from 'react'
import { Progress } from './index'
import { COLORS } from '../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Feedback/Progress',
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
  },
  argTypes: {
    value: {
      name: 'value',
      control: 'number',
    },
    color: {
      name: 'color',
      control: 'color',
    },
    rampProps: {
      name: 'rampProps',
      control: 'object',
    },
  },
}

export const Default = args => <Progress {...args} />
