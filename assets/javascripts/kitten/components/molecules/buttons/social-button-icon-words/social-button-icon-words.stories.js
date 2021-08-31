import React from 'react'
import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
  InstagramButtonIconWords,
  LinkedinButtonIconWords,
} from './index'
import { Grid, GridCol } from '../../../..'
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
  decorators: [story => <div className="story-Container">{story()}</div>],
}

export const SocialButtonIconWords = () => (
  <Grid>
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
  </Grid>
)
