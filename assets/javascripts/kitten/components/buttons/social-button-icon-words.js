import React from 'react'
import { Button } from 'kitten/components/buttons/button'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { InstagramIcon } from 'kitten/components/icons/instagram-icon'

export const FacebookButtonIconWords = props => (
  <Button
    icon
    modifier="facebook"
    { ...props }
  >
    <FacebookIcon className="k-Button__icon" />
    Continuer avec Facebook
  </Button>
)
