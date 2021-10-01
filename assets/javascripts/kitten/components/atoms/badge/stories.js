import React from 'react'
import { Badge } from './index'
import { COLORS } from '../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Badge" />,
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
    spaced: false,
    withBorder: true,
    color: COLORS.primary1,
    Icon: false,
    a11yText: '',
    children: '2',
  },
  argTypes: {
    spaced: {
      name: 'spaced',
      defaultValue: false,
      description: 'Adds an horizontal margin to the badge.',
      control: 'boolean',
    },
    withBorder: {
      name: 'withBorder',
      defaultValue: true,
      description: 'Adds a border to the badge.',
      control: 'boolean',
    },
    color: {
      name: 'color',
      description: 'Color of the badge.',
      control: 'color',
    },
    Icon: {
      name: 'icon? (story prop)',
      description: 'Controls the display of `Icon` property.',
      control: 'boolean',
    },
    a11yText: {
      name: 'a11yText',
      description: 'Context for assistive technologies.',
      control: 'text',
    },
    children: {
      name: 'children',
      description: 'Content of the badge.',
      control: 'text',
    },
  },
}

export const Default = args => <Badge {...args} />
