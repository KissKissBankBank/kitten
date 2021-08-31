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
    control: { type: 'object' },
  },
  placeholder: {
    name: 'placeholder',
    control: { type: 'text' },
  },
  commentButton: {
    name: 'commentButton',
    control: { type: 'text' },
  },
  error: {
    name: 'error',
    control: { type: 'boolean' },
  },
  errorMessage: {
    name: 'errorMessage',
    control: { type: 'text' },
  },
  isDisabled: {
    name: 'isDisabled',
    control: { type: 'boolean' },
  },
  showAvatarBadge: {
    name: 'showAvatarBadge (story prop)',
    control: { type: 'boolean' },
  },
  defaultValue: {
    name: 'defaultValue',
    control: { type: 'text' },
  },
  commentLabel: {
    name: 'commentLabel',
    control: { type: 'text' },
  },
  ariaId: {
    name: 'ariaId',
    control: { type: 'text' },
  },
  avatarBadge: { control: { type: null } },
  textareaId: {
    name: 'textareaId',
    control: { type: 'text' },
  },
}
