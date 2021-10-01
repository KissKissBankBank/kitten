import React from 'react'
import { COLORS } from '../../..'
import { Loader } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/Loader',
  component: Loader,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Loader" />,
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
    color: COLORS.font1,
    tag: 'div',
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'Color of the dots.',
      control: 'color',
    },
    tag: {
      name: 'tag',
      description: 'Tag for the wrapper.',
      control: 'text',
    },
  },
}

export const Default = args => <Loader {...args} />
