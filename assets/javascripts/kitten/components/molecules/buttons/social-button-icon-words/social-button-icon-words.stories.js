import React from 'react'
import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
  InstagramButtonIconWords,
  LinkedinButtonIconWords,
} from './index'
import { Marger, Container, Grid, GridCol } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: SocialButtonIconWords,
  title: 'Molecules/Buttons/SocialButtonIconWords',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="SocialButtonIconWords" />
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
