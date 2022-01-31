import React from 'react'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
  YoutubeButtonIcon,
} from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: SocialButtonIcon,
  title: 'Actions/SocialButtonIcon',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="SocialButtonIcon" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--thin">
        {story()}
      </div>
    ),
  ],
}

export const SocialButtonIcon = () => (
  <>
    <FacebookButtonIcon>Facebook</FacebookButtonIcon>
    <TwitterButtonIcon>Twitter</TwitterButtonIcon>
    <InstagramButtonIcon>Instagram</InstagramButtonIcon>
    <LinkedinButtonIcon>Linkedin</LinkedinButtonIcon>
    <YoutubeButtonIcon>Youtube</YoutubeButtonIcon>
  </>
)
