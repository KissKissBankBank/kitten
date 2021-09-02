import React from 'react'
import { VerticalStroke } from './'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/VerticalStroke',
  component: VerticalStroke,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="VerticalStroke" />
      ),
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
    size: 'default',
  },
  argTypes: {
    size: {
      name: 'size',
      options: ['tiny', 'default', 'big', 'huge'],
      control: { type: 'radio' },
    },
  },
}

export const Default = args => <VerticalStroke {...args} />
