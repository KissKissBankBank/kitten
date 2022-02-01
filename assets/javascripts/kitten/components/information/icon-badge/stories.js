import React from 'react'
import { IconBadge } from './index'
import { StarIcon, COLORS } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Information/IconBadge',
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
    backgroundColor: {
      name: 'backgroundColor',
      control: 'color',
    },
    empty: {
      name: 'empty',
      control: 'boolean',
    },
    border: {
      name: 'border',
      control: 'object',
    },
    size: {
      name: 'size',
      control: 'select',
      options: ['tiny', 'normal', 'big', 'huge'],
    },
    status: {
      name: 'status',
      control: 'select',
      options: ['info', 'success', 'danger', 'warning', 'disabled'],
    },
    hasBorder: {
      name: 'hasBorder',
      control: 'boolean',
    },
  },
}

const args = {
  empty: false,
  size: 'normal',
  backgroundColor: null,
  children: <StarIcon color={COLORS.background1} />,
  status: 'info',
  hasBorder: false,
}

export const Default = args => <IconBadge {...args} />

Default.args = args

export const WithBorderStyles = args => <IconBadge {...args} />

WithBorderStyles.args = {
  ...args,
  size: 'tiny',
  border: {
    width: 2,
    style: 'solid',
    color: COLORS.primary5,
  },
}
