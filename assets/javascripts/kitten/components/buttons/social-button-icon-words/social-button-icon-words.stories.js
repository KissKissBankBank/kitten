import React from 'react'
import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
  InstagramButtonIconWords,
  LinkedinButtonIconWords,
} from './index'

export default {
  component: SocialButtonIconWords,
  title: 'Buttons/SocialButtonIconWords',
}

const StoryContainer = ({ children }) => (
  <div className="story-Container story-Grid">{children}</div>
)

export const SocialButtonIconWords = () => (
  <StoryContainer>
    <div>
      <FacebookButtonIconWords fluid>Facebook</FacebookButtonIconWords>
    </div>

    <div>
      <TwitterButtonIconWords fluid>Twitter</TwitterButtonIconWords>
    </div>

    <div>
      <InstagramButtonIconWords fluid>Instagram</InstagramButtonIconWords>
    </div>

    <div>
      <LinkedinButtonIconWords fluid>Linkedin</LinkedinButtonIconWords>
    </div>
  </StoryContainer>
)
