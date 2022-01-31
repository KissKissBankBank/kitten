import React from 'react'
import { BulletList } from './index'

export const Default = args => <BulletList {...args} />

Default.decorators = [
  story => <div className="story-Container story-Grid">{story()}</div>,
]

Default.args = {
  size: 'regular',
  items: [
    { key: '1', item: 'Dis Manibus' },
    { key: '2', item: 'Calpurnia Felicla' },
    { key: '3', item: 'Germulio coniugi' },
  ],
}

Default.argTypes = {
  size: {
    name: 'size',
    options: ['tiny', 'regular', 'large', 'big', 'huge'],
    control: 'select',
  },
  items: {
    name: 'items',
    control: 'object',
  },
}
