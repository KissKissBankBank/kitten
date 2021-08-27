import React from 'react'
import { TagButton } from './index'
import { VisaIcon } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Buttons/TagButton',
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
    modifier: { control: 'radio', options: ['helium', 'hydrogen', 'carbon'] },
    size: { control: 'radio', options: ['tiny', 'regular', 'big', 'huge'] },
    icon: { control: 'boolean' },
    selected: { control: 'boolean' },
    variant: { control: 'inline-radio', options: ['andromeda', 'orion'] },
    children: { control: 'text' },
  },
  args: {
    modifier: 'hydrogen',
    size: 'regular',
    icon: false,
    selected: false,
    variant: 'orion',
    children: 'My Tag',
  },
}

export const Default = args => <TagButton {...args} />

export const WithIcon = args => (
  <TagButton {...args} icon>
    <VisaIcon />
  </TagButton>
)
