import React from 'react'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
  YoutubeButtonIcon,
  PinterestButtonIcon,
} from './index'

export default {
  component: SocialButtonIcon,
  title: 'Buttons/SocialButtonIcon',
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--thin">
        <Story />
      </div>
    ),
  ],
}

export const SocialButtonIcon = () => (
  <>
    <div>
      <FacebookButtonIcon>Facebook</FacebookButtonIcon>
    </div>

    <div>
      <TwitterButtonIcon>Twitter</TwitterButtonIcon>
    </div>

    <div>
      <InstagramButtonIcon>Instagram</InstagramButtonIcon>
    </div>

    <div>
      <LinkedinButtonIcon>Linkedin</LinkedinButtonIcon>
    </div>

    <div>
      <YoutubeButtonIcon>Youtube</YoutubeButtonIcon>
    </div>

    <div>
      <PinterestButtonIcon>Pinterest</PinterestButtonIcon>
    </div>
  </>
)
