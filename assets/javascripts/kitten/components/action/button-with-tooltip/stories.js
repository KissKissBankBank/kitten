import React from 'react'
import { GiftIcon } from 'kitten'
import { ButtonWithTooltip } from './index'
import { DocsPage } from 'storybook/docs-page'

const args = {
  tooltipText: 'Carte cadeau',
  position: 'center',
}

const argTypes = {
  tooltipText: {
    name: 'tooltipText',
    control: 'text',
  },
  position: {
    control: 'radio',
    options: ['left', 'center', 'right'],
  },
}

export default {
  title: 'Action/ButtonWithTooltip',
  component: ButtonWithTooltip,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ButtonWithTooltip" />
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
  args: args,
  argTypes: argTypes,
}

export const Default = args => <ButtonWithTooltip {...args} children="Button" />

export const WithButtonIcon = args => (
  <ButtonWithTooltip {...args} children={<GiftIcon width="17" height="15" />} />
)

WithButtonIcon.args = {
  ...args,
  buttonProps: {
    fit: 'icon',
    borderRadius: 100,
    size: 'small',
  },
}
WithButtonIcon.argTypes = {
  ...argTypes,
  buttonProps: { control: 'object' },
}
