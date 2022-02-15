import React from 'react'
import { LinkList } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: LinkList,
  title: 'Navigation/LinkList',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="LinkList" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],

  argTypes: {
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
  },

  args: {
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
  },
}

export const Default = args => {
  return <LinkList {...args} />
}

export const WithDarkBackground = args => {
  return (
    <div className={args.color === 'light' && 'has-overrides dark-background'}>
      <LinkList {...args} />
    </div>
  )
}

WithDarkBackground.decorators = Default.decorators
WithDarkBackground.args = Default.args
WithDarkBackground.argTypes = Default.argTypes
