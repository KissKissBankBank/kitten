import React from 'react'
import { GiftIcon } from '../../../..'
import { ButtonWithTooltip } from './index'

const args = {
  iconTitle: 'Carte cadeau',
}

const argsTypes = {
  iconTitle: {
    name: 'iconTitle',
    control: 'text',
  },
}

export default {
  title: 'Molecules/Buttons/ButtonWithTooltip',
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
  args: {},
}

export const Default = args => (
  <ButtonWithTooltip
    {...args}
    children="Button"
  />
)

export const WithButtonIcon = args => (
  <ButtonWithTooltip
    {...args}
    children={ <GiftIcon width="17" height="15" /> }
  />
)

WithButtonIcon.args = {
  buttonProps: {
    icon: true,
    borderRadius: 100,
    size: 'tiny',
  },
}
WithButtonIcon.argTypes = {
  buttonProps: { control: 'object' },
}
