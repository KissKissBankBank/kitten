import React from 'react'
import { ArrowContainerButton } from './index'

const args = {
  iconTitle: 'Carte cadeau',
}

const argsTypes = {
  iconTitle: {
    name: 'iconTitle',
    control: 'string',
  }
}

export default {
  title: 'Molecules/Buttons/ArrowContainerButton',
  component: ArrowContainerButton,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ArrowContainerButton" />,
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

export const Default = args => <ArrowContainerButton {...args} />
