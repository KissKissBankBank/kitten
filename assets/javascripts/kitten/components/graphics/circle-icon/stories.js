import React from 'react'
import { CircleIcon } from './index'
import { DocsPage } from 'storybook/docs-page'
import { COLORS } from '../../..'

export default {
  title: 'Graphics/CircleIcon',
  component: CircleIcon,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="CircleIcon" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid">
        <div>{story()}</div>
      </div>
    ),
  ],

  args: {
    strokeColor: COLORS.font1,
    strokeWidth: '2px',
    bgColor: COLORS.error1,
    title: 'Hello',
  },
}

export const Default = args => <CircleIcon {...args} />
