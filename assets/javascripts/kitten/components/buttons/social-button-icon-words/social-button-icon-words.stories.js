import React from 'react'
import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
  InstagramButtonIconWords,
  LinkedinButtonIconWords,
} from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

export default {
  component: SocialButtonIconWords,
  title: 'Buttons/SocialButtonIconWords',
}

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      <Grid>{children}</Grid>
    </Marger>
  </Container>
)

export const SocialButtonIconWords = () => (
  <StoryContainer>
    <GridCol col-s="6" col-l="3">
      <FacebookButtonIconWords fluid>Facebook</FacebookButtonIconWords>
    </GridCol>

    <GridCol col-s="6" col-l="3">
      <TwitterButtonIconWords fluid>Twitter</TwitterButtonIconWords>
    </GridCol>

    <GridCol col-s="6" col-l="3">
      <InstagramButtonIconWords fluid>Instagram</InstagramButtonIconWords>
    </GridCol>

    <GridCol col-s="6" col-l="3">
      <LinkedinButtonIconWords fluid>Linkedin</LinkedinButtonIconWords>
    </GridCol>
  </StoryContainer>
)
