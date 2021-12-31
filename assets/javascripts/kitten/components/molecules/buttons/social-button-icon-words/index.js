import React from 'react'
import { Button } from '../../../../components/molecules/buttons/button'
import { FacebookIcon } from '../../../../components/graphics/icons/facebook-icon'
import { TwitterIcon } from '../../../../components/graphics/icons/twitter-icon'
import { LinkedinIcon } from '../../../../components/graphics/icons/linkedin-icon'
import { InstagramIcon } from '../../../../components/graphics/icons/instagram-icon'

export const FacebookButtonIconWords = ({ children, ...props }) => (
  <Button {...props} modifier="beryllium">
    <FacebookIcon height="14" width="7" />
    <span>{children}</span>
  </Button>
)

export const TwitterButtonIconWords = ({ children, ...props }) => (
  <Button {...props} modifier="beryllium">
    <TwitterIcon height="12" width="15" />
    <span>{children}</span>
  </Button>
)

export const InstagramButtonIconWords = ({ children, ...props }) => (
  <Button {...props} modifier="beryllium">
    <InstagramIcon height="16" width="16" />
    <span>{children}</span>
  </Button>
)

export const LinkedinButtonIconWords = ({ children, ...props }) => (
  <Button {...props} modifier="beryllium">
    <LinkedinIcon height="12" width="12" />
    <span>{children}</span>
  </Button>
)
