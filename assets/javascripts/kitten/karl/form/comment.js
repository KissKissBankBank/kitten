import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { Comment } from 'kitten/components/form/comment'
import { CommentForm } from 'kitten/components/form/comment-form'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlComment = () => (
  <Fragment>
    <KarlExampleTitle>Comment</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <Comment
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          ownerName="Lorem ipsum"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Comment small text</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <Comment text="Foo Bar" ownerName="Lorem ipsum" />
      </Marger>
    </Container>
  </Fragment>
)

export const KarlCommentForm = () => (
  <Fragment>
    <KarlExampleTitle>Comment form</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <CommentForm
          ownerImgProps={(src = 'https://placehold.it/80x80/caf4fe/caf4fe')}
          ownerTime="2 min"
          placeholder="Leave a comment on the project"
          commentButton="Comment"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Comment form error</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <CommentForm text="Foo Bar" ownerName="Lorem ipsum" />
      </Marger>
    </Container>
  </Fragment>
)
