import React from 'react'
import {
  Button,
  buttonModifiers,
  buttonFitOptions,
  buttonMobileFitOptions,
  buttonSizes,
} from './index'
import { HeartIcon, PayPalIcon, Badge, Cart } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

const args = {
  borderRadius: null,
  modifier: 'hydrogen',
  rounded: false,
  disabled: false,
  size: 'medium',
  tag: undefined,
  children: 'My Button',
  fit: 'min-width',
  mobileFit: undefined,
  active: false,
  hasBullet: false,
  bulletColor: undefined,
}

const argTypes = {
  borderRadius: {
    name: 'borderRadius',
    control: 'number',
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
  },
  active: {
    name: 'active',
    control: 'boolean',
  },
  hasBullet: {
    name: 'hasBullet',
    control: 'boolean',
  },
  bulletColor: {
    name: 'bulletColor',
    control: 'color',
  },
}

export default {
  title: 'Action/Button',
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
      <div className="story-Container">
        <div>{story()}</div>
      </div>
    ),
  ],
  argTypes: argTypes,
  args: args,
}

export const Default = args => <Button {...args} />

export const AllModifiers = args => {
  return (
    <>
      {buttonModifiers.map(modifier => (
        <div className="k-u-flex k-u-flex-direction-column k-u-flex-alignItems-center">
          <Button {...args} modifier={modifier} />
          <span className="k-u-margin-top-single k-u-margin-bottom-triple k-u-weight-400">
            {modifier}
          </span>
        </div>
      ))}
    </>
  )
}

AllModifiers.decorators = [
  story => <div className="story-Grid story-Grid--small">{story()}</div>,
]

export const DarkModifiers = args => {
  return (
    <>
      {['beryllium', 'boron', 'scandium'].map(modifier => (
        <div className="k-u-margin-vertical-double k-u-flex k-u-flex-direction-column k-u-flex-alignItems-center">
          <Button {...args} modifier={modifier} />
          <span className="k-u-margin-top-single k-u-margin-bottom-triple k-u-weight-400 k-u-color-background1">
            {modifier}
          </span>
        </div>
      ))}
    </>
  )
}

DarkModifiers.decorators = [
  story => (
    <div className="story-Grid story-Grid--small has-overrides dark-background">
      {story()}
    </div>
  ),
]
export const WithIcon = args => (
  <Button {...args} fit="icon">
    <HeartIcon width={15} height={15} />
  </Button>
)

export const WithColorIcon = args => (
  <Button {...args} fit="icon">
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

export const WithIconBadge = ({ children, ...args }) => (
  <Button {...args}>
    <span>{children}</span>
    <Badge color="red" Icon={Cart}>
      2
    </Badge>
  </Button>
)

export const WithBullet = args => <Button {...args} />

WithBullet.args = {
  ...args,
  hasBullet: true,
}
