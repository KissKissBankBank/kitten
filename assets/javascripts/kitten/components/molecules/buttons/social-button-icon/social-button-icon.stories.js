import React from 'react'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
  YoutubeButtonIcon,
} from './index'
import { Grid, GridCol } from '../../../..'
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
  decorators: [story => <div className="story-Container">{story()}</div>],
}

export const SocialButtonIcon = () => (
  <Grid>
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
  </Grid>
)
