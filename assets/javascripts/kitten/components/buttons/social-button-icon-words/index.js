import React from 'react'
import { Button } from '../../../components/buttons/button/button'
import { FacebookIcon } from '../../../components/icons/facebook-icon'
import { TwitterIcon } from '../../../components/icons/twitter-icon'
import { LinkedinIcon } from '../../../components/icons/linkedin-icon'
import { InstagramIcon } from '../../../components/icons/instagram-icon'

export const FacebookButtonIconWords = ({ children, ...props }) => (
  <Button big {...props} modifier="social_facebook">
    <FacebookIcon height="14" width="7" />
    <span>{children}</span>
  </Button>
)

export const TwitterButtonIconWords = ({ children, ...props }) => (
  <Button big {...props} modifier="social_twitter">
    <TwitterIcon height="12" width="15" />
    <span>{children}</span>
  </Button>
)

export const InstagramButtonIconWords = ({ children, ...props }) => (
  <Button big {...props} modifier="social_instagram">
    <InstagramIcon height="16" width="16" />
    <span>{children}</span>
  </Button>
)

export const LinkedinButtonIconWords = ({ children, ...props }) => (
  <Button big {...props} modifier="social_linkedin">
    <LinkedinIcon height="12" width="12" />
    <span>{children}</span>
  </Button>
)
