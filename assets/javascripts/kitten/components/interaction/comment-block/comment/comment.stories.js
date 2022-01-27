import React, { useState } from 'react'
import { Comment } from './index'
import { Text } from 'kitten'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/CommentBlock/Comment',
  component: Comment,
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Comment" />,
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    avatarImgProps: {
      src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
      alt: '',
    },
    commentDate: '2 min',
    ownerName: 'Dominique Hipsaume',
    showFooter: true,
    isSecondary: false,
    isHighlighted: false,
    disabledButton: false,
  },
  argTypes: {
    children: {
      name: 'text',
      control: 'text',
    },
    avatarImgProps: {
      name: 'avatarImgProps',
      control: 'object',
    },
    commentDate: {
      name: 'commentDate',
      control: 'text',
    },
    ownerName: {
      name: 'ownerName',
      control: 'text',
    },
    showFooter: {
      name: 'showFooter (story prop)',
      control: 'boolean',
    },
    disabledButton: {
      name: 'disabledButton (story prop)',
      control: 'boolean',
    },
    footer: {
      name: 'footer',
      control: { type: null },
    },
    likeButton: {
      name: 'likeButton',
      control: { type: null },
    },
    headerActions: {
      name: 'headerActions',
      control: { type: null },
    },
    isSecondary: { control: 'boolean' },
    isHighlighted: { control: 'boolean' },
  },
}

export const Default = ({ showFooter, disabledButton, ...args }) => {
  const [hasLiked, setHasLiked] = useState(false)

  const handleClick = e => {
    action('likeButton onClick')(e)
    setHasLiked(!hasLiked)
    document.activeElement.blur()
  }

  return (
    <Comment
      {...args}
      headerActions={
        <Comment.LikeButton
          hasLiked={hasLiked}
          children={hasLiked ? '101' : '100'}
          onClick={handleClick}
          disabled={disabledButton}
        />
      }
      footer={
        showFooter && (
          <>
            <Text
              as="button"
              weight="regular"
              size="micro"
              className="k-u-reset-button k-u-link k-u-link-font1"
              onClick={action('comment')}
            >
              Reply
            </Text>
            <Text
              as="button"
              weight="regular"
              size="micro"
              className="k-u-reset-button k-u-link k-u-link-font1"
              onClick={action('delete')}
            >
              Delete
            </Text>
          </>
        )
      }
    />
  )
}
