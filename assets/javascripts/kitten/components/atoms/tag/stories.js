import React from 'react'
import { Tag } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    docs: { page: () => <DocsPage filepath={__filename} importString="Tag" /> },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid">
        <div>{story()}</div>
      </div>
    ),
  ],
  args: {
    type: 'info',
    children: '5 contributors',
  },
  argTypes: {
    type: {
      name: 'type',
      options: ['info', 'warning', 'success', 'error', 'disabled'],
      control: 'radio',
    },
  },
}

export const Default = args => {
  return <Tag {...args} />
}
