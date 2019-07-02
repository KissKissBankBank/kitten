import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import Comment from './components/comment'

storiesOf('Pages/Comment', module)
  .addDecorator(withKnobs)
  .add('Comment', () => {
    return (
      <Comment
        avatarImgProps={{
          src: 'https://placehold.it/80x80/caf4fe/caf4fe',
          alt: '',
        }}
      />
    )
  })
