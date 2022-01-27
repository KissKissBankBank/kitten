import React from 'react'
import { Line } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Line',
  component: Line,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Line" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
}

export const Default = () => (
  <Line>
    <Line.Item>Item 1</Line.Item>
    <Line.Item>Item 2</Line.Item>
    <Line.Item>Item 3</Line.Item>
  </Line>
)
