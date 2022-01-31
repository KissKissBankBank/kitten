import React from 'react'
import { TagButton } from './index'
import { VisaIcon } from '../../../../graphics/icons/visa-icon'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Actions/TagButton',
  component: TagButton,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TagButton" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        <div>{story()}</div>
      </div>
    ),
  ],
  argTypes: {
    size: { control: 'radio', options: ['tiny', 'regular', 'big', 'huge'] },
    active: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    size: 'regular',
    active: false,
    children: 'My Tag',
  },
}

export const Default = args => <TagButton {...args} />

export const WithIcon = args => (
  <TagButton {...args} icon>
    <VisaIcon />
  </TagButton>
)
