import React from 'react'
import { ButtonGroup } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Action/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ButtonGroup" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  argTypes: {},
  args: {},
}

export const Default = args => (
  <ButtonGroup aria-label="Button label" {...args}>
    <ButtonGroup.Button>Button1</ButtonGroup.Button>
    <ButtonGroup.Button active modifier="helium">
      Button2
    </ButtonGroup.Button>
    <ButtonGroup.Button>Button3</ButtonGroup.Button>
  </ButtonGroup>
)
