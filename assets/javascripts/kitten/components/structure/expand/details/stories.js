import React from 'react'
import { Details } from './index'
import { Text } from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Structure/Expand/Details',
  component: Details,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Details" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    summaryRender: {
      name: 'summaryRender',
      control: null,
    },
    onToggle: {
      name: 'onToggle',
      control: null,
    },
    children: {
      name: 'children',
      control: null,
    },
    open: {
      name: 'open',
      control: 'boolean',
    },
    summaryProps: {
      name: 'summaryProps',
      control: 'object',
    },
  },
}

export const Default = args => <Details {...args} />
Default.args = {
  summaryRender: ({ open }) => (
    <Text
      tag="p"
      weight="regular"
      size="tiny"
      color="primary1"
      className="k-u-link k-u-link-primary1"
    >
      {open && 'Close me!'}
      {!open && 'Open me!'}
    </Text>
  ),
  onToggle: action('onToggle'),
  open: false,
  summaryProps: {},
  children: (
    <Text tag="p" weight="light" size="tiny">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  ),
}
