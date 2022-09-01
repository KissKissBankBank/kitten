import React from 'react'
import { TagButton } from './index'
import { VisaIcon } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Action/TagButton',
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
    size: { control: 'radio', options: ['small', 'medium', 'large', 'huge'] },
    active: { control: 'boolean' },
    rounded: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    size: 'medium',
    active: false,
    rounded: false,
    children: 'My Tag',
  },
}

export const Default = args => <TagButton {...args} />

export const WithIcon = args => (
  <TagButton {...args} fit="icon">
    <VisaIcon />
  </TagButton>
)
