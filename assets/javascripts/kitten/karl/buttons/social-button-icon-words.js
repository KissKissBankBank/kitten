import React from 'react'
import { Button } from 'kitten/components/buttons/button'
import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
  LinkedinButtonIconWords,
} from 'kitten/components/buttons/social-button-icon-words'

export const KarlFacebookButtonIconWords = props => {
  return (
    <FacebookButtonIconWords className="k-u-margin-bottom-single">
      Continuer avec Facebook
    </FacebookButtonIconWords>
  )
}

export const KarlTwitterButtonIconWords = props => {
  return (
    <TwitterButtonIconWords className="k-u-margin-bottom-single">
      Continuer avec Twitter
    </TwitterButtonIconWords>
  )
}

export const KarlLinkedinButtonIconWords = props => {
  return (
    <LinkedinButtonIconWords>
      Continuer avec Linkedin
    </LinkedinButtonIconWords>
  )
}
