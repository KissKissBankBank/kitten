import React from 'react'
import { ScrollableContainer } from './index'
import COLORS from '../../../constants/colors-config'

export default {
  title: 'Grid/ScrollableContainer',
  component: ScrollableContainer,
}

export const Default = () => (
  <div className="story-Container">
    <ScrollableContainer style={{ backgroundColor: COLORS.line1 }}>
      <div style={{ height: '100px', lineHeight: '100px', fontSize: '1.5em' }}>
        {'😺 '.repeat(100)}
      </div>
    </ScrollableContainer>
  </div>
)
