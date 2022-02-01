import React from 'react'
import { FilterIcon } from './index'
import { COLORS } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Graphics/Icons/FilterIcon',
  component: FilterIcon,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="FilterIcon" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    animated: false,
    color: COLORS.font1,
    duration: '1.5s',
    animated: false,
    type: 'xml',
    name: 'y',
    begin: '0',
    title: '',
  },
  argTypes: {
    animated: { control: 'boolean' },
    duration: { control: 'text' },
    color: { control: 'color' },
    type: { control: 'text' },
    name: { control: 'text' },
    begin: { control: 'text' },
    title: { control: 'text' },
  },
}

export const Default = args => <FilterIcon {...args} />
