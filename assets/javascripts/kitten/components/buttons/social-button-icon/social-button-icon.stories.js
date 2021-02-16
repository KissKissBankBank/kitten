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
}

const StoryContainer = ({ children }) => (
  <div className="story-Container story-Grid story-Grid--thin">{children}</div>
)

export const SocialButtonIcon = () => (
  <StoryContainer>
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
  </StoryContainer>
)
