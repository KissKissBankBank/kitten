import React from 'react'
import { CommentAvatar as DefaultCommentAvatar } from '../../../components/comments/comment-avatar'
import { Deprecated } from '../../../helpers/utils/deprecated'

export const CommentAvatar = props => {
  const message = `You can use the CommentAvatar instead.
    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment-avatar.js`

  return (
    <Deprecated warningMessage={message}>
      <DefaultCommentAvatar {...props} />
    </Deprecated>
  )
}
