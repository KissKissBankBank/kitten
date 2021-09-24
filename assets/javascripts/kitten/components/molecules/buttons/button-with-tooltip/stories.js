import React from 'react'
import { ButtonWithTooltip } from './index'

const args = {
  iconTitle: 'Carte cadeau',
}

const argsTypes = {
  iconTitle: {
    name: 'iconTitle',
    control: 'text',
  }
}

export default {
  title: 'Molecules/Buttons/ButtonWithTooltip',
  component: ButtonWithTooltip,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ButtonWithTooltip" />,
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

export const Default = args => <ButtonWithTooltip {...args} />
