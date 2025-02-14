import React from 'react'
import { CommentForm } from './index'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Interaction/CommentBlock/CommentForm',
  component: CommentForm,
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="CommentForm" />,
    },
  },
  args: {
    avatarImgProps: {
      src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
      alt: '',
    },
    placeholder: 'Leave a comment',
    buttonText: 'Comment',
    onClose: action('onClose'),
    error: false,
    errorMessage: 'Cum sociis natoque penatibus et magnis',
    onSubmit: action('onSubmit'),
    onChange: action('onChange'),
    disabled: false,
    'aria-label': 'This is the aria label',
  },
  argTypes: {
    avatarImgProps: {
      name: 'avatarImgProps',
      control: 'object',
    },
    placeholder: {
      name: 'placeholder',
      control: 'text',
    },
    buttonText: {
      name: 'buttonText',
      control: 'text',
    },
    error: {
      name: 'error',
      control: 'boolean',
    },
    errorMessage: {
      name: 'errorMessage',
      control: 'text',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    defaultValue: {
      name: 'defaultValue',
      control: 'text',
    },
    id: {
      name: 'id',
      control: 'text',
    },
    'aria-label': { control: 'text' },
  },
}

export const Default = args => <CommentForm {...args} />

export const WithDefaultValue = args => (
  <CommentForm {...args} defaultValue="Hello, world" />
)
