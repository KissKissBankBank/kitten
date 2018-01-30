import React from 'react'
import { Button } from 'kitten/components/buttons/button'
import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
  LinkedinButtonIconWords,
} from 'kitten/components/buttons/social-button-icon-words'

export const KarlFacebookButtonIconWords = props => (
  <FacebookButtonIconWords
    className="k-u-margin-bottom-single"
    onClick="Continuer avec Facebook"
  >
    Continuer avec Facebook
  </FacebookButtonIconWords>
)

export const KarlTwitterButtonIconWords = props => (
  <TwitterButtonIconWords
    className="k-u-margin-bottom-single"
    onClick="Continuer avec Twitter"
  >
    Continuer avec Twitter
  </TwitterButtonIconWords>
)

export const KarlLinkedinButtonIconWords = props => (
  <LinkedinButtonIconWords onClick="Continuer avec LinkedIn">
    Continuer avec Linkedin
  </LinkedinButtonIconWords>
)
