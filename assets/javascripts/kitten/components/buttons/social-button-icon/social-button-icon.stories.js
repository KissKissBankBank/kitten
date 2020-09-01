import React from 'react'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
  YoutubeButtonIcon,
  PinterestButtonIcon,
} from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

export default {
  component: SocialButtonIcon,
  title: 'Buttons/SocialButtonIcon',
}

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      <Grid>{children}</Grid>
    </Marger>
  </Container>
)

export const SocialButtonIcon = () => (
  <StoryContainer>
    <GridCol col-s="3" col-l="2">
      <FacebookButtonIcon>Facebook</FacebookButtonIcon>
    </GridCol>

    <GridCol col-s="3" col-l="2">
      <TwitterButtonIcon>Twitter</TwitterButtonIcon>
    </GridCol>

    <GridCol col-s="3" col-l="2">
      <InstagramButtonIcon>Instagram</InstagramButtonIcon>
    </GridCol>

    <GridCol col-s="3" col-l="2">
      <LinkedinButtonIcon>Linkedin</LinkedinButtonIcon>
    </GridCol>

    <GridCol col-s="3" col-l="2">
      <YoutubeButtonIcon>Youtube</YoutubeButtonIcon>
    </GridCol>

    <GridCol col-s="3" col-l="2">
      <PinterestButtonIcon>Pinterest</PinterestButtonIcon>
    </GridCol>
  </StoryContainer>
)
