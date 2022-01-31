import React from 'react'
import { TextButton } from './index'
import { HeartIconNext } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Actions/TextButton',
  component: TextButton,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TextButton" />,
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
    children: { control: 'text' },
    size: { control: 'radio', options: ['normal', 'big'] },
  },
  args: {
    children: 'Hello world',
    size: 'normal',
  },
}

export const Default = args => <TextButton {...args} />

export const WithIcon = args => (
  <TextButton {...args}>
    <HeartIconNext />
    1337
  </TextButton>
)
