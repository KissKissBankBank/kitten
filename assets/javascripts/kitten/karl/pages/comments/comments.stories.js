import React from 'react'
import { storiesOf } from '@storybook/react'
import CommentsPage from './components/comments'

storiesOf('Pages/Comments', module).add('Comments page', () => {
  return <CommentsPage />
})
