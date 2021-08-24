import React from 'react'
import { ResponsiveIframeContainer } from './index'
import { text } from '@storybook/addon-knobs'
import COLORS from '../../../../constants/colors-config'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Embed/ResponsiveIframeContainer',
  component: ResponsiveIframeContainer,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="ResponsiveIframeContainer"
        />
      ),
    },
  },
}

export const Default = () => (
  <div style={{ width: 335 }}>
    <ResponsiveIframeContainer ratio={text('ratio', '67.5')}>
      <iframe style={{ backgroundColor: COLORS.line1 }} />
    </ResponsiveIframeContainer>
  </div>
)
