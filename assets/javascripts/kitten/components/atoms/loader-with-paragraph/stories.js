import React from 'react'
import { LoaderWithParagraph } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/LoaderWithParagraph',
  component: LoaderWithParagraph,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="LoaderWithParagraph" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container">
        <div>{story()}</div>
      </div>
    ),
  ],
  args: {
    children: 'Loading',
    loaderPosition: 'left',
    loaderProps: {},
    paragraphProps: {},
  },
  argTypes: {
    children: {
      name: 'children',
      control: 'text',
    },
    loaderPosition: {
      name: 'loaderPosition',
      options: ['left', 'top', 'right', 'bottom'],
      control: 'select',
    },
    loaderProps: {
      name: 'loaderProps',
      control: 'object',
    },
    paragraphProps: {
      name: 'paragraphProps',
      control: 'object',
    },
  },
}

export const Default = args => <LoaderWithParagraph {...args} />
