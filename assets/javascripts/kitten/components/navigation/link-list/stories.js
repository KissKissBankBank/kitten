import React from 'react'
import { LinkList } from './index'

export const SimpleList = args => {
  return <LinkList {...args} />
}

export const WithDarkBackground = args => {
  return (
    <div className={args.color === 'light' && 'has-overrides dark-background'}>
      <LinkList {...args} />
    </div>
  )
}

SimpleList.decorators = [
  story => <div className="story-Container story-Grid">{story()}</div>,
]
WithDarkBackground.decorators = SimpleList.decorators

SimpleList.args = {
  margin: true,
  items: [
    { key: '1', item: 'Item 1', href: '#', active: true },
    { key: '2', item: 'Item 2', href: '#' },
    { key: '3', item: 'Item 3', href: '#' },
  ],
  color: 'dark',
  lineHeight: null,
  itemMargin: 'double',
  weight: 'regular',
}
WithDarkBackground.args = SimpleList.args

SimpleList.argTypes = {
  margin: {
    name: 'margin',
    control: 'boolean',
  },
  items: {
    name: 'items',
    control: 'object',
  },
  color: {
    name: 'color',
    options: ['light', 'dark'],
    control: 'inline-radio',
  },
  lineHeight: {
    name: 'lineHeight',
    options: [null, 'normal'],
    control: 'inline-radio',
  },
  itemMargin: {
    name: 'itemMargin',
    options: ['double', 'triple'],
    control: 'inline-radio',
  },
  weight: {
    name: 'weight',
    options: ['regular', 'light'],
    control: 'inline-radio',
  },
}
WithDarkBackground.argTypes = SimpleList.argTypes
