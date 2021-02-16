import React from 'react'
import { text } from '@storybook/addon-knobs'
import { AdaptableGrid, AdaptableGridCol } from './index'

export const Default = () => (
  <div className="story-Container">
    <AdaptableGrid colNumber={10} as={text('Container tag', 'div')}>
      <AdaptableGridCol
        as={text('First child tag', 'div')}
        col={4}
        offset={3}
        col-s={5}
        offset-s={0}
        col-l={2}
      >
        <div style={{ background: '#fae9d8', textAlign: 'center' }}>
          {'🚲 '.repeat(5)}
        </div>
      </AdaptableGridCol>
      <AdaptableGridCol
        as={text('Second child tag', 'div')}
        col-s={3}
        offset-s={2}
        col-l={6}
        offset-l={1}
      >
        <div style={{ background: '#fae9d8', textAlign: 'center' }}>
          {'🚲 '.repeat(8)}
        </div>
      </AdaptableGridCol>
    </AdaptableGrid>
  </div>
)
