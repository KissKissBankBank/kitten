import React from 'react'
import { LoaderWithParagraph } from './index'

export default {
  title: 'Atoms/LoaderWithParagraph',
  component: LoaderWithParagraph,
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
      control: { type: 'text' },
    },
    loaderPosition: {
      name: 'loaderPosition',
      options: ['left', 'top', 'right', 'bottom'],
      control: { type: 'select' },
    },
    loaderProps: {
      name: 'loaderProps',
      control: { type: 'object' },
    },
    paragraphProps: {
      name: 'paragraphProps',
      control: { type: 'object' },
    },
  },
}

export const Default = args => <LoaderWithParagraph {...args} />
