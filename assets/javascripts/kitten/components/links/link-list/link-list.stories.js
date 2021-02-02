import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'
import { LinkList } from './index'

const colorOptions = {
  Light: 'light',
  Dark: 'dark',
}

const marginOptions = {
  Double: 'double',
  Triple: 'triple',
}

const weightOptions = {
  Regular: 'regular',
  Light: 'light',
}

export const Default = () => (
  <LinkList
    color={select('Color', colorOptions, 'light')}
    itemMargin={select('Item margin', marginOptions, 'double')}
    weight={select('weight', weightOptions, 'regular')}
    margin={boolean('Margin', true)}
    items={[
      { key: '1', item: 'Item 1' },
      { key: '2', item: 'Item 2' },
      { key: '3', item: 'Item 3' },
    ]}
  />
)
