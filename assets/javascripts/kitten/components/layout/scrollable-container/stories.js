import React from 'react'
import { ScrollableContainer } from './index'
import COLORS from '../../../constants/colors-config'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Layout/ScrollableContainer',
  component: ScrollableContainer,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ScrollableContainer" />
      ),
    },
  },
}

export const Default = () => (
  <ScrollableContainer style={{ backgroundColor: COLORS.line1 }}>
    <div style={{ height: '100px', lineHeight: '100px' }}>
      {'🚗 '.repeat(100)}
    </div>
  </ScrollableContainer>
)
