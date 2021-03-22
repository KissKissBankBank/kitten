import React from 'react'
import { color } from '@storybook/addon-knobs'
import { Loader } from './index'

export default {
  title: 'Atoms/LoadingAnimations/Loader',
  component: Loader,
}

export const Default = () => {
  return <Loader color={color('Color', 'black')} />
}
