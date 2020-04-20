import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { DialogWithPictureBorder } from './index'

export default {
  component: DialogWithPictureBorder,
  title: 'pages/homepage/DialogWithPictureBorder',
  parameters: {
    component: DialogWithPictureBorder,
  },
}

export const DefaultProps = () => (
  <DialogWithPictureBorder />
)
