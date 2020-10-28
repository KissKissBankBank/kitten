import React from 'react'
import { Comment as DefaultComment } from '../../../components/comments/comment'
import { Deprecated } from '../../../helpers/utils/deprecated'

export const Comment = props => {
  const message = `You can use the Comment instead.
    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment.js`

  return (
    <Deprecated warningMessage={message}>
      <DefaultComment {...props} />
    </Deprecated>
  )
}
