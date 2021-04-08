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
  decorators: [
    Story => (
      <div className="story-Container story-Grid">
        <Story />
      </div>
    ),
  ],
}

export const SocialButtonIconWords = () => (
  <>
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
  </>
)
