import React from 'react'
import { CommentForm } from './index'
import { CheckedCircleIcon } from '../../../..'
import { action } from '@storybook/addon-actions'

export const Default = ({ showAvatarBadge, ...args }) => (
  <CommentForm
    {...args}
    avatarBadge={
      showAvatarBadge && (
        <span aria-label="Owner" role="aside">
          <CheckedCircleIcon
            width="25"
            height="25"
            circleColor="#19b4fa"
            checkedColor="#fff"
          />
        </span>
      )
    }
  />
)

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  avatarImgProps: {
    src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    alt: '',
  },
  placeholder: 'Leave a comment on the project',
  commentButton: 'Comment',
  error: false,
  errorMessage: 'Cum sociis natoque penatibus et magnis',
  showAvatarBadge: false,
  onSubmit: action('onSubmit'),
}

Default.argTypes = {
  avatarImgProps: {
    name: 'avatarImgProps',
    control: 'object',
  },
  placeholder: {
    name: 'placeholder',
    control: 'text',
  },
  commentButton: {
    name: 'commentButton',
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
  isDisabled: {
    name: 'isDisabled',
    control: 'boolean',
  },
  showAvatarBadge: {
    name: 'showAvatarBadge (story prop)',
    control: 'boolean',
  },
  defaultValue: {
    name: 'defaultValue',
    control: 'text',
  },
  commentLabel: {
    name: 'commentLabel',
    control: 'text',
  },
  ariaId: {
    name: 'ariaId',
    control: 'text',
  },
  avatarBadge: { control: { type: null } },
  textareaId: {
    name: 'textareaId',
    control: 'text',
  },
}
