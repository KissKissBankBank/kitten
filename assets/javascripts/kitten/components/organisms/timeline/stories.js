import React from 'react'
import { Timeline } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: Timeline,
  title: 'Organisms/Timeline',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Timeline" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args: {
    itemHeight: 'large',
  },
  argTypes: {
    itemHeight: { control: 'radio', options: ['large',
'thin',]},
    children: { control: null },
  }
}

export const Default = (args) => (
  <Timeline {...args}>
    <span>foo</span>
    <span>bar</span>
    <span>baz</span>
  </Timeline>
)
