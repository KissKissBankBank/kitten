import React from 'react'
import { Button } from './index'
import { HeartIcon, PayPalIcon, Badge, Cart } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

const args = {
  borderRadius: 0,
  fluid: false,
  icon: false,
  small: false,
  modifier: 'hydrogen',
  rounded: false,
  disabled: false,
  size: 'regular',
  tag: undefined,
  variant: 'andromeda',
  children: 'My Button',
}

const argTypes = {
  borderRadius: {
    name: 'borderRadius',
    control: 'number',
  },
  fluid: {
    name: 'fluid',
    control: 'boolean',
  },
  small: {
    name: 'small',
    control: 'boolean',
  },
  icon: {
    name: 'icon',
    control: 'boolean',
  },
  modifier: {
    name: 'modifier',
    options: [
      'hydrogen',
      'helium',
      'lithium',
      'beryllium',
      'carbon',
      'oxygen',
      'checked',
      'copper',
      'boron',
      'neon',
      'iron',
      'social_facebook',
      'social_twitter',
      'social_linkedin',
      'social_instagram',
      'social_youtube',
      'social_pinterest',
    ],
    control: 'select',
  },
  rounded: {
    name: 'rounded',
    control: 'boolean',
  },
  size: {
    name: 'size',
    options: ['nano', 'micro', 'tiny', 'regular', 'big', 'huge', 'giant'],
    control: 'select',
  },
  tag: {
    name: 'tag',
    control: 'text',
  },
  variant: {
    name: 'variant',
    options: ['andromeda', 'orion'],
    control: 'inline-radio',
  },
  children: {
    name: 'children',
    control: 'text',
  },
}

export default {
  title: 'Molecules/Buttons/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={['index.js', 'helpers/modifier-styles.js']}
          importString="Button"
        />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        <div>{story()}</div>
      </div>
    ),
  ],
  argTypes: argTypes,
  args: args,
}

export const Default = args => <Button {...args} />

export const WithIcon = args => (
  <Button {...args} icon>
    <HeartIcon width={15} height={15} />
  </Button>
)

export const WithColorIcon = args => (
  <Button {...args} icon>
    <PayPalIcon />
  </Button>
)

export const WithTextAndIcon = ({ iconPosition, children, ...args }) => {
  return (
    <Button {...args}>
      {iconPosition === 'left' && <HeartIcon width={15} height={15} />}

      <span>{children}</span>

      {iconPosition === 'right' && <HeartIcon width={15} height={15} />}
    </Button>
  )
}
WithTextAndIcon.args = {
  ...args,
  iconPosition: 'left',
}
WithTextAndIcon.argTypes = {
  ...argTypes,
  iconPosition: {
    name: 'iconPosition (story prop)',
    options: ['left', 'right'],
    control: 'inline-radio',
  },
}

export const WithBadge = ({ children, ...args }) => (
  <Button {...args}>
    <span>{children}</span>
    <Badge color="red" Icon={Cart}>
      2
    </Badge>
  </Button>
)
