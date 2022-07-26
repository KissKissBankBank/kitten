import React from 'react'
import { VerticalStroke } from './'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Typography/VerticalStroke',
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
    size: 'medium',
  },
  argTypes: {
    size: {
      name: 'size',
      options: ['small', 'medium', 'large', 'huge'],
      control: 'radio',
    },
  },
}

export const Default = args => <VerticalStroke {...args} />
