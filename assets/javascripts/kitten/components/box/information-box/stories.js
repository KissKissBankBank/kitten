import React from 'react'
import { text } from '@storybook/addon-knobs'
import { InformationBox } from './index'

export default {
  title: 'Box/InformationBox',
  component: InformationBox,
}

export const Default = () => {
  return (
    <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-quadruple">
      <InformationBox
        title={text('Title', 'Title')}
        children={text('Children', 'Children')}
      />
    </div>
  )
}
