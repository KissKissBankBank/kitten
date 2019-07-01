import React, { PureComponent } from 'react'
import Styled from 'styled-components'
import { Container } from '../../../../components/grid/container'
import { Comment } from '../../../../components/comments/comment'
import { CommentForm } from '../../../../components/comments/comment-form'
import { Grid, GridCol } from '../../../../components/grid/grid'

const Comment = props => (
  <Container>
    <Grid>
      <GridCol col-l="8" offset-l="2">
        <CommentForm />
      </GridCol>
    </Grid>
  </Container>
)

export default Comment
