import React from 'react'
import { storiesOf } from '@storybook/react'
import CommentPage from './components/comment'

storiesOf('Pages/Comment', module).add('Comment page', () => {
  return <CommentPage />
})
