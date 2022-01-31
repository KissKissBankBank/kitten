import React from 'react'
import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
  InstagramButtonIconWords,
  LinkedinButtonIconWords,
} from './index'
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
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
}

export const SocialButtonIconWords = () => (
  <>
    <FacebookButtonIconWords fit="fluid">Facebook</FacebookButtonIconWords>
    <TwitterButtonIconWords fit="fluid">Twitter</TwitterButtonIconWords>
    <InstagramButtonIconWords fit="fluid">Instagram</InstagramButtonIconWords>
    <LinkedinButtonIconWords fit="fluid">Linkedin</LinkedinButtonIconWords>
  </>
)
