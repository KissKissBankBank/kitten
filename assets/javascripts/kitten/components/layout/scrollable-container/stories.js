import React from 'react'
import { ScrollableContainer } from './index'
import { COLORS } from '../../..'
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
  args: {
    shadowColor: COLORS.background1,
  },
  argTypes: {
    shadowColor: {
      name: 'shadowColor',
      control: {
        type: 'color',
      },
    },
  },
}

export const Default = args => (
  <ScrollableContainer {...args} style={{ backgroundColor: COLORS.line1 }}>
    <div style={{ height: '100px', lineHeight: '100px' }}>
      {'🚗 '.repeat(100)}
    </div>
  </ScrollableContainer>
)
