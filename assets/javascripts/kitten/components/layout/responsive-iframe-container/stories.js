import React from 'react'
import { ResponsiveIframeContainer } from './index'
import { text } from '@storybook/addon-knobs'
import COLORS from '../../../constants/colors-config'

export default {
  title: 'Layout/ResponsiveIframeContainer',
  component: ResponsiveIframeContainer,
}

export const Default = () => (
  <div style={{ width: 335 }}>
    <ResponsiveIframeContainer ratio={text('ratio', '67.5')}>
      <iframe style={{ backgroundColor: COLORS.line1 }} />
    </ResponsiveIframeContainer>
  </div>
)
