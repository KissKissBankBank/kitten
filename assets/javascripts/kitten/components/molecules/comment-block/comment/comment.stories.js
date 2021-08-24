import React, { useState } from 'react'
import { Comment } from './index'
import { CheckedCircleIcon } from '../../../..'
import { action } from '@storybook/addon-actions'

export const Default = ({showAvatarBadge, showBottomNotes, ...args}) => {
  const [hasLiked, setHasLiked] = useState(false)

  const handleClick = () => {
    action('likeButton onClick')
    setHasLiked(!hasLiked)
    document.activeElement.blur()
  }

  return (
    <Comment
      {...args}
      likeButtonProps={{
        hasLiked,
        children: hasLiked ? '101' : '100',
        onClick: handleClick,
      }}
      avatarBadge={showAvatarBadge && (
          <span aria-label="Owner" role="aside">
            <CheckedCircleIcon
              width="25"
              height="25"
              circleColor="#19b4fa"
              checkedColor="#fff"
              aria-hidden="true"
            />
          </span>
        )
      }
      bottomNotes={showBottomNotes && (
          <div>
            <span>Bottom note #1</span>
            <span>Bottom note #2</span>
            <span>Bottom note #3</span>
          </div>
        )
      }
    />
  )
}

Default.decorators = [story => (
  <div className="story-Container story-Grid story-Grid--large">
    {story()}
  </div>
)]

Default.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
  avatarImgProps: {
    src: '/kitten.jpg',
    alt: '',
  },
  commentDate: '2 min',
  ownerName: 'Lorem ipsum',
  showBottomNotes: false,
  showAvatarBadge: false,
}

Default.argTypes = {
  text: {
    name: 'text',
    control: { type: 'text' },
  },
  avatarImgProps: {
    name: 'avatarImgProps',
    control: { type: 'object' },
  },
  commentDate: {
    name: 'commentDate',
    control: { type: 'text' },
  },
  ownerName: {
    name: 'ownerName',
    control: { type: 'text' },
  },
  showBottomNotes: {
    name: 'showBottomNotes (story prop)',
    control: { type: 'boolean' },
  },
  showAvatarBadge: {
    name: 'showAvatarBadge (story prop)',
    control: { type: 'boolean' },
  },
  bottomNotes: {
    name: 'bottomNotes',
    control: { type: null },
  },
  avatarBadge: {
    name: 'avatarBadge',
    control: { type: null },
  },
  likeButtonProps: {
    name: 'likeButtonProps',
    control: { type: null },
  },
}

