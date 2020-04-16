import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import TextWithSideImage from './index'

export default {
  component: TextWithSideImage,
  title: 'pages/homepage/TextWithSideImage',
  parameters: {
    component: TextWithSideImage,
  },
}

export const DefaultProps = () => (
  <TextWithSideImage />
)
