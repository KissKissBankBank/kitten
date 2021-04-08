import React from 'react'
import { text, object, boolean } from '@storybook/addon-knobs'
import { CommentForm } from './index'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'

export const Default = () => (
  <CommentForm
    avatarImgProps={object('Src/Alt', {
      src: 'https://placehold.it/80x80/caf4fe/caf4fe',
      alt: '',
    })}
    placeholder={text('placeholder', 'Leave a comment on the project')}
    commentButton={text('Comment button', 'Comment')}
    error={boolean('Is error', false)}
    errorMessage={text(
      'Error message',
      'Cum sociis natoque penatibus et magnis',
    )}
    avatarBadge={
      boolean('Avatar badge', false) && (
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
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]
