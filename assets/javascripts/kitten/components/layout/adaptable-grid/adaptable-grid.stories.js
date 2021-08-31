import React from 'react'
import { AdaptableGrid, AdaptableGridCol } from './index'

export const Default = args => (
  <AdaptableGrid {...args}>
    <AdaptableGridCol col={4} offset={3} col-s={5} offset-s={0} col-l={2}>
      <div style={{ background: '#fae9d8', textAlign: 'center' }}>
        {'🚲 '.repeat(5)}
      </div>
    </AdaptableGridCol>
    <AdaptableGridCol col-s={3} offset-s={2} col-l={6} offset-l={1}>
      <div style={{ background: '#fae9d8', textAlign: 'center' }}>
        {'🚲 '.repeat(8)}
      </div>
    </AdaptableGridCol>
  </AdaptableGrid>
)

Default.decorators = [story => <div className="story-Container">{story()}</div>]

Default.args = {
  gutter: 20,
  colNumber: 12,
  colAlign: 'center',
}

Default.argTypes = {
  gutter: {
    name: 'gutter',
    control: 'number',
  },
  colNumber: {
    name: 'colNumber',
    control: 'number',
  },
  colAlign: {
    name: 'colAlign',
    options: ['left', 'right', 'center'],
    control: 'select',
  },
}
