import React from 'react'
import { LendoLoadingAnimation } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Graphics/Animations/LendoLoadingAnimation',
  component: LendoLoadingAnimation,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="LendoLoadingAnimation" />
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
    width: '45px',
    height: '45px',
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
}

export const Default = args => <LendoLoadingAnimation {...args} />
