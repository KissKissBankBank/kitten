import React from 'react'
import { Button } from '../../../components/buttons/button'
import { FacebookIcon } from '../../../components/icons/facebook-icon'
import { TwitterIcon } from '../../../components/icons/twitter-icon'
import { LinkedinIcon } from '../../../components/icons/linkedin-icon'

export const FacebookButtonIconWords = ({ children, ...props }) => (
  <Button icon size="big" modifier="facebook" {...props}>
    <FacebookIcon className="k-Button__icon" />
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
