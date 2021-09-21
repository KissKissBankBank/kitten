import React from 'react'
import {
  Button,
  buttonModifiers,
  buttonFitOptions,
  buttonMobileFitOptions,
  buttonSizes,
  buttonVariants,
} from './index'
import { HeartIcon, PayPalIcon, Badge, Cart } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

const args = {
  borderRadius: 0,
  fluid: false,
  icon: false,
  modifier: 'hydrogen',
  rounded: false,
  disabled: false,
  size: 'regular',
  tag: undefined,
  variant: 'andromeda',
  children: 'My Button',
  fit: 'min-width',
  mobileFit: undefined,
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
  icon: {
    name: 'icon',
    control: 'boolean',
  },
  modifier: {
    name: 'modifier',
    options: buttonModifiers,
    control: 'select',
  },
  rounded: {
    name: 'rounded',
    control: 'boolean',
  },
  size: {
    name: 'size',
    options: buttonSizes,
    control: 'select',
  },
  tag: {
    name: 'tag',
    control: 'text',
  },
  variant: {
    name: 'variant',
    options: buttonVariants,
    control: 'inline-radio',
  },
  children: {
    name: 'children',
    control: 'text',
  },
  fit: {
    name: 'fit',
    control: 'select',
    options: buttonFitOptions,
  },
  mobileFit: {
    name: 'mobileFit',
    control: 'select',
    options: buttonMobileFitOptions,
  }
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
