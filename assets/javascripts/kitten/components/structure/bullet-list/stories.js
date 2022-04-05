import React from 'react'
import { BulletList } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: BulletList,
  title: 'Structure/BulletList',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="BulletList" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],

  args: {
    size: 'regular',
    items: [
      { key: '1', item: 'Dis Manibus' },
      { key: '2', item: 'Calpurnia Felicla' },
      { key: '3', item: 'Germulio coniugi' },
    ],
  },

  argTypes: {
    size: {
      name: 'size',
      options: ['micro', 'small', 'medium', 'large', 'huge'],
      control: 'select',
    },
    items: {
      name: 'items',
      control: 'object',
    },
  },
}

export const Default = args => <BulletList {...args} />
