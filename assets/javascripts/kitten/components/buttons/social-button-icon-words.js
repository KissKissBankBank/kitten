import React from 'react'
import { Button } from 'kitten/components/buttons/button'
import { FacebookIconWithBackground } from 'kitten/components/icons/facebook-icon-with-background'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'

export const FacebookButtonIconWords = ({ children, ...props }) => (
  <Button icon modifier="facebook" {...props}>
    <FacebookIconWithBackground className="k-Button__icon k-Button__icon--facebook" />
    {children}
  </Button>
)

export const TwitterButtonIconWords = ({ children, ...props }) => (
  <Button icon size="big" modifier="twitter" {...props}>
    <TwitterIcon className="k-Button__icon" />
    {children}
  </Button>
)

export const LinkedinButtonIconWords = ({ children, ...props }) => (
  <Button icon size="big" modifier="linkedin" {...props}>
    <LinkedinIcon className="k-Button__icon" />
    {children}
  </Button>
)
