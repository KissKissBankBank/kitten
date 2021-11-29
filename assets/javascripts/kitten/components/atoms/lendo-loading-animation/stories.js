import React from 'react'
import { LendoLoadingAnimation } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/LendoLoadingAnimation',
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
  },
  argTypes: {
  },
}

export const Default = args => <LendoLoadingAnimation {...args} />
