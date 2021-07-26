import React from 'react'
import { select } from '@storybook/addon-knobs'
import { Timeline } from './index'

export default {
  component: Timeline,
  title: 'Organisms/Timeline',
  parameters: {
    component: Timeline,
  },
  decorators: [
    Story => (
      <div className="story-Container">
        <Story />
      </div>
    ),
  ],
}

const itemHeightChoices = {
  Large: 'large',
  Thin: 'thin',
}

export const Default = () => (
  <Timeline itemHeight={select('itemHeight', itemHeightChoices, 'large')}>
    <span>foo</span>
    <span>bar</span>
    <span>baz</span>
  </Timeline>
)
