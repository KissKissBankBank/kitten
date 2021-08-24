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
  args: {
    disabled: false,
    valid: false,
    empty: false,
    size: 'normal',
    children: <StarIcon color={COLORS.background1} />,
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    valid: {
      name: 'valid',
      control: { type: 'boolean' },
    },
    empty: {
      name: 'empty',
      control: { type: 'boolean' },
    },
    size: {
      name: 'size',
      control: { type: 'select' },
      options: ['tiny', 'normal', 'big', 'huge'],
    },
  },
}

export const Default = args => <IconBadge {...args} />
