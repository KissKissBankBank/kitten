import React from 'react'
import { AdaptableGrid, AdaptableGridCol } from './index'

export default {
  component: AdaptableGrid,
  title: 'Layout/AdaptableGrid',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="AdaptableGrid" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container">
        {story()}
      </div>
    ),
  ],

  args: {
    gutter: 20,
    colNumber: 12,
    colAlign: 'center',
  },

  argTypes: {
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
  },
}

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
