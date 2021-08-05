import React from 'react'
import { text } from '@storybook/addon-knobs'
import { CounterBlock } from './index'

export const Default = () => {
  return (
    <CounterBlock
      title={text('Title', 'Total validated amount')}
      subTitle={text('Sub Title', 'collected since Novembre 19th 2014')}
      counter={text('Counter', '52 982 287')}
      unit={text('Unit', '€')}
    />
  )
}

export default {
  title: 'Organisms/CounterBlock',
  component: CounterBlock,
}
