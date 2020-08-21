import React, { useState } from 'react'
import { text, object, boolean } from '@storybook/addon-knobs'
import { Comment } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'

const CommentExample = props => {
  const [hasLiked, setHasLiked] = useState(false)
  const [likeButtonChildren, setLikeButtonChildren] = useState('100')

  const handleClick = () => {
    setHasLiked(!hasLiked)
    setLikeButtonChildren(hasLiked ? '100' : '101')
    document.activeElement.blur()
  }

  return (
    <Comment
      {...props}
      likeButtonProps={{
        hasLiked,
        children: likeButtonChildren,
        onClick: handleClick,
      }}
    />
  )
}

export const Default = () => (
  <CommentExample
    avatarBadge={
      boolean('Avatar badge', false) && (
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
    avatarImgProps={object('Src/Alt', {
      src: 'https://placehold.it/80x80/caf4fe/caf4fe',
      alt: '',
    })}
    commentDate={text('Comment date', '2 min')}
    text={text(
      'Text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    )}
    ownerName={text('Owner name', 'Lorem ipsum')}
    bottomNotes={
      boolean('With bottom notes?', false) && (
        <div>
          <span>Bottom note #1</span>
          <span>Bottom note #2</span>
          <span>Bottom note #3</span>
        </div>
      )
    }
  />
)

Default.decorators = [
  Story => (
    <Grid style={{ marginTop: '5em' }}>
      <GridCol offset="1" col="8">
        <Story />
      </GridCol>
    </Grid>
  ),
]
