import React from 'react'
import { SupTitle } from './index'
import { text } from '@storybook/addon-knobs'

export default {
  component: SupTitle,
  title: 'Typography/SupTitle',
  parameters: {
    component: SupTitle,
  },
}

export const DefaultProp = () => (
  <SupTitle>{text('Text', 'Lorem ipsum dolor sit amet…')}</SupTitle>
)
