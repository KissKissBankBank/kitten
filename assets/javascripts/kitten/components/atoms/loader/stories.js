import React from 'react'
import { text } from '@storybook/addon-knobs'
import { Loader } from './'

export default {
  title: 'Atoms/Loader',
  component: Loader,
}

export const Default = () => {
  return <Loader color={text('Color', 'black')} />
}
