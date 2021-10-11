import React from 'react'
import { IconBadge } from './index'
import { StarIcon, COLORS } from '../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/IconBadge',
  component: IconBadge,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="IconBadge" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid">
        <div>{story()}</div>
      </div>
    ),
  ],
  argTypes: {
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    valid: {
      name: 'valid',
      control: 'boolean',
    },
    empty: {
      name: 'empty',
      control: 'boolean',
    },
    borderRadius: {
      name: 'borderRadius',
      control: 'number',
    },
    borderWidth: {
      name: 'borderWidth',
      control: 'number',
    },
    borderColor: {
      name: 'borderColor',
      control: 'color',
    },
    borderStyle: {
      name: 'borderStyle',
      control: 'select',
      options: ['solid', 'dotted', 'dashed'],
    },
    size: {
      name: 'size',
      control: 'select',
      options: ['tiny', 'normal', 'big', 'huge'],
    },
  },
}

const args = {
  disabled: false,
  valid: false,
  empty: false,
  size: 'normal',
  borderRadius: 30,
  borderColor: null,
  borderWidth: null,
  borderStyle: null,
  children: <StarIcon color={COLORS.background1} />,
}

export const Default = args => <IconBadge {...args} />

Default.args = args

export const WithBorder = args => <IconBadge {...args} />

WithBorder.args = {
  ...args,
  borderColor: '#222',
  borderWidth: 2,
  borderStyle: 'solid',
}
