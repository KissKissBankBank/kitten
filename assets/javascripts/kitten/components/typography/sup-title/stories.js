import React from 'react'
import { SupTitle } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: SupTitle,
  title: 'Typography/SupTitle',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="SupTitle" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container">
        {story()}
      </div>
    ),
  ],

  args: {
    children: 'Lorem ipsum dolor sit amet…',
  },

  argTypes: {
    children: {
      name: 'children',
      description: 'Content of the SupTitle',
      control: 'text',
    },
  },
}

export const Default = args => <SupTitle {...args} />
