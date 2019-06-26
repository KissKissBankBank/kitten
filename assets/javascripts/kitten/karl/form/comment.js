import React, { Fragment } from 'react'
import Radium from 'radium'
import { Comment } from '../../components/comments/comment'
import { CommentForm } from '../../components/comments/comment-form'
import { Container } from '../../components/grid/container'
import { Marger } from '../../components/layout/marger'
import { KarlExampleTitle } from '../../karl/examples/title'

export const KarlCommentForm = () => (
  <Fragment>
    <KarlExampleTitle>Comment form</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <CommentForm
          avatarImgProps={{
            src: 'https://placehold.it/80x80/caf4fe/caf4fe',
            alt: '',
          }}
          placeholder="Leave a comment on the project"
          commentButton="Comment"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Comment form error</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <CommentForm
          avatarImgProps={{
            src: 'https://placehold.it/80x80/caf4fe/caf4fe',
            alt: '',
          }}
          placeholder="Leave a comment on the project"
          commentButton="Comment"
          errorMessage="Cum sociis natoque penatibus et magnis"
          error
        />
      </Marger>
    </Container>
  </Fragment>
)

export const KarlComment = () => (
  <Fragment>
    <KarlExampleTitle>Comment</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <Comment
          avatarImgProps={{
            src: 'https://placehold.it/80x80/caf4fe/caf4fe',
            alt: '',
          }}
          commentDate="2 min"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          ownerName="Lorem ipsum"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Comment with bottom notes</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <Comment
          avatarImgProps={{
            src: 'https://placehold.it/80x80/caf4fe/caf4fe',
            alt: '',
          }}
          commentDate="2 min"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          ownerName="Lorem ipsum"
          bottomNotes="incididunt ut labore et dolore magna aliqua"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Comment small text</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <Comment
          avatarImgProps={{
            src: 'https://placehold.it/80x80/caf4fe/caf4fe',
            alt: '',
          }}
          commentDate="2 min"
          text="Foo Bar"
          ownerName="Lorem ipsum"
        />
      </Marger>
    </Container>
  </Fragment>
)
