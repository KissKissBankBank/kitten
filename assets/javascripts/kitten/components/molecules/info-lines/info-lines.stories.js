import React from 'react'
import { InfoLines } from './index'
import { COLORS } from '../../..'

export const Default = args => <InfoLines {...args} />

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  infos: [
    { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
    { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
  ],
  borderColor: COLORS.line1,
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
  descriptionTagList: 'dl',
  titleTagList: 'dt',
  itemTagList: 'dd',
}

Default.argTypes = {
  infos: {
    name: 'infos',
    control: { type: 'object' },
  },
  borderColor: {
    name: 'borderColor',
    control: { type: 'color' },
  },
  withBorderRadius: {
    name: 'withBorderRadius',
    control: { type: 'boolean' },
  },
  withLeftRightBorder: {
    name: 'withLeftRightBorder',
    control: { type: 'boolean' },
  },
  withoutTopBottomBorder: {
    name: 'withoutTopBottomBorder',
    control: { type: 'boolean' },
  },
  withoutResponsive: {
    name: 'withoutResponsive',
    control: { type: 'boolean' },
  },
  descriptionTagList: {
    name: 'descriptionTagList',
    control: { type: 'text' },
  },
  titleTagList: {
    name: 'titleTagList',
    control: { type: 'text' },
  },
  itemTagList: {
    name: 'itemTagList',
    control: { type: 'text' },
  },
}
