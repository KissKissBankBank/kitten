import React from 'react'
import { Separator } from './'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Structure/Separator',
  component: Separator,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Separator" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  args: {
    darker: false,
  },
  argTypes: {
    darker: {
      name: 'darker',
      control: 'boolean',
    },
  },
}

export const Default = args => <Separator {...args} />
