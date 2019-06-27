import React from 'react'
import { Comment } from '../../components/comments/comment'
import { Deprecated } from '../../helpers/utils/deprecated'

export const Comment = props => {
  const message = `You can use the RewardComponent instead.
    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment.js`

  return (
    <Deprecated warningMessage={message}>
      <Comment {...props} />
    </Deprecated>
  )
}
