import React from 'react'
import { ButtonIcon } from './index'
import { QuestionMarkIcon } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: ButtonIcon,
  title: 'Action/ButtonIcon',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ButtonIcon" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    size: {
      name: 'size',
      options: ['nano', 'micro', 'tiny', 'regular', 'big', 'huge', 'giant'],
      control: 'select',
    },
    withoutHover: {
      name: 'withoutHover',
      control: 'boolean',
    },
  },
  args: {
    size: 'regular',
    withoutHover: false,
  },
}

export const Default = args => (
  <ButtonIcon {...args}>
    <QuestionMarkIcon />
  </ButtonIcon>
)
