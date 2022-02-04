import React from 'react'
import { ResponsiveIframeContainer } from './index'
import { COLORS } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Embed/ResponsiveIframeContainer',
  component: ResponsiveIframeContainer,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="ResponsiveIframeContainer"
        />
      ),
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  argTypes: {
    ratio: {
      name: 'ratio',
      control: 'number',
    },
    children: {
      name: 'children',
      control: null,
    },
  },
  args: {
    ratio: 67.5,
    children: <iframe style={{ backgroundColor: COLORS.line1 }} />,
  },
}

export const Default = args => <ResponsiveIframeContainer {...args} />
