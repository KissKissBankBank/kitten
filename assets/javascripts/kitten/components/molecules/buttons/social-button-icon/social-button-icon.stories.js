import React from 'react'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
  YoutubeButtonIcon,
  PinterestButtonIcon,
} from './index'
import { Marger, Container, Grid, GridCol } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: SocialButtonIcon,
  title: 'Molecules/Buttons/SocialButtonIcon',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="SocialButtonIcon" />
      ),
    },
  },
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
