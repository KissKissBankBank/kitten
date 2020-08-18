import React from 'react'
import { ScrollableContainer } from './index'
import COLORS from '../../../constants/colors-config'

export default {
  title: 'Grid/ScrollableContainer',
  component: ScrollableContainer,
}

export const Default = () => (
  <ScrollableContainer
    backgroundColor={COLORS.line1}
    style={{ backgroundColor: COLORS.line1 }}
  >
    <div style={{ height: '100px', lineHeight: '100px' }}>
      {'🚗 '.repeat(100)}
    </div>
  </ScrollableContainer>
)
