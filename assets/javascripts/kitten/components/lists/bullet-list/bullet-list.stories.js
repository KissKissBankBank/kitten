import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { BulletList } from './index'

export const Default = () => (
  <BulletList
    small={boolean('Small', false)}
    large={boolean('Large', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    items={[
      { key: '1', item: 'Dis Manibus' },
      { key: '2', item: 'Calpurnia Felicla' },
      { key: '3', item: 'Germulio coniugi' },
    ]}
  />
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid">
      <Story />
    </div>
  ),
]
