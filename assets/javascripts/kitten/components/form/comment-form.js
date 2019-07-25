import React from 'react'
import { CommentForm as DefaultCommentForm } from '../../components/comments/comment-form'
import { Deprecated } from '../../helpers/utils/deprecated'

export const CommentForm = props => {
  const message = `You can use the CommentForm instead.
    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment-form.js`

  return (
    <Deprecated warningMessage={message}>
      <DefaultCommentForm {...props} />
    </Deprecated>
  )
}
