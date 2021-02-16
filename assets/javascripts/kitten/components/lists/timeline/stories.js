import React from 'react'
import { select } from '@storybook/addon-knobs'
import { Timeline } from './index'

export default {
  component: Timeline,
  title: 'List/Timeline',
  parameters: {
    component: Timeline,
  },
}

const itemHeightChoices = {
  Large: 'large',
  Thin: 'thin',
}

export const Default = () => (
  <div className="story-Container story-Grid">
    <div></div>
    <Timeline itemHeight={select('itemHeight', itemHeightChoices, 'large')}>
      <span>foo</span>
      <span>bar</span>
      <span>baz</span>
    </Timeline>
  </div>
)
