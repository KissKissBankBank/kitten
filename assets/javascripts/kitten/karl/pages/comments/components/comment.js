import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Container } from '../../../../components/grid/container'
import { Comment } from '../../../../components/comments/comment'
import { CommentForm } from '../../../../components/comments/comment-form'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Text } from '../../../../components/typography/text'
import { stepToRem } from '../../../../helpers/utils/typography'

const ActionLinks = styled(({ children, className }) => {
  return (
    <Text
      color="font1"
      weight="bold"
      type="button"
      tag="button"
      className={className}
    >
      {children}
    </Text>
  )
})`
  cursor: pointer;
  text-decoration: underline;
  border: 0;
  margin: 0;
  vertical-align: baseline;
  font-size: ${stepToRem(-2)};
`

const CommentPage = props => (
  <Container>
    <Grid>
      <GridCol col-m="8" offset-m="2">
        <Marger top="5" bottom="5">
          <CommentForm
            avatarImgProps={{
              src: 'https://placehold.it/80x80/caf4fe/caf4fe',
              alt: '',
            }}
            placeholder="Laisser un commentaire sur le projet"
            commentButton="Commenter"
          />
        </Marger>

        <Marger top="5">
          <Comment
            avatarImgProps={{
              src: 'https://placehold.it/80x80/caf4fe/caf4fe',
              alt: '',
            }}
            text="Youpi Youpi !!!voila les bons jus qui arrivent! Pleins de bonheur de partage et de revitalisation ! Rose"
            ownerName="rose-jourdan"
            commentDate="20 jours"
            bottomNotes={<ActionLinks children="Supprimer" />}
          />
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

export default CommentPage
