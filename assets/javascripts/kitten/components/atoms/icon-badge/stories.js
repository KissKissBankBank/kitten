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
    border: {
      name: 'border',
      control: 'number',
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
  children: <StarIcon color={COLORS.background1} />,
}

export const Default = args => <IconBadge {...args} />

Default.args = args

export const WithBorder = args => <IconBadge {...args} />

WithBorder.args = {
  ...args,
  size: 'tiny',
}
