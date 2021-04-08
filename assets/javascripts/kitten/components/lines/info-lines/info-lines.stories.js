import React from 'react'
import { boolean, color } from '@storybook/addon-knobs'
import { InfoLines } from './index'

export const Default = () => (
  <InfoLines
    withBorderRadius={boolean('with border radius', false)}
    withLeftRightBorder={boolean('with left right border', false)}
    withoutTopBottomBorder={boolean('without top bottom border', false)}
    withoutResponsive={boolean('without responsive', false)}
    borderColor={color('custom border color', '#eee')}
    infos={[
      { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
      { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
    ]}
  />
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]
