import React from 'react'
import { COLORS } from 'kitten'
import { KissKissLoadingAnimation } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Feedback/KissKissLoadingAnimation',
  component: KissKissLoadingAnimation,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="KissKissLoadingAnimation"
        />
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
    color: COLORS.font1,
    svgProps: {},
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'Color of the dots.',
      control: 'color',
    },
    svgProps: {
      name: 'svgProps',
      description: 'Additional props for the SVG element.',
      control: 'object',
    },
  },
}

export const Default = args => <KissKissLoadingAnimation {...args} />
