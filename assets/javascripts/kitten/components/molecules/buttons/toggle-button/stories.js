import React from 'react'
import { ToggleButton } from './index'

export default {
  title: 'Molecules/Buttons/ToggleButton',
  component: ToggleButton,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ToggleButton" />,
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

export const Default = args => <ToggleButton {...args} />
