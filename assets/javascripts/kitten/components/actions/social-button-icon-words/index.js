import React from 'react'
import { Button } from '../../../../components/actions/button'
import { FacebookIcon } from '../../../../components/visuals/icons/facebook-icon'
import { TwitterIcon } from '../../../../components/visuals/icons/twitter-icon'
import { LinkedinIcon } from '../../../../components/visuals/icons/linkedin-icon'
import { InstagramIcon } from '../../../../components/visuals/icons/instagram-icon'

export const FacebookButtonIconWords = ({ children, ...props }) => (
  <Button {...props}>
    <FacebookIcon height="14" width="7" />
    <span>{children}</span>
  </Button>
)

export const TwitterButtonIconWords = ({ children, ...props }) => (
  <Button {...props}>
    <TwitterIcon height="12" width="15" />
    <span>{children}</span>
  </Button>
)

export const InstagramButtonIconWords = ({ children, ...props }) => (
  <Button {...props}>
    <InstagramIcon height="16" width="16" />
    <span>{children}</span>
  </Button>
)

export const LinkedinButtonIconWords = ({ children, ...props }) => (
  <Button {...props}>
    <LinkedinIcon height="12" width="12" />
    <span>{children}</span>
  </Button>
)

const defaultProps = {
  modifier: 'beryllium',
}

FacebookButtonIconWords.defaultProps = defaultProps
TwitterButtonIconWords.defaultProps = defaultProps
LinkedinButtonIconWords.defaultProps = defaultProps
InstagramButtonIconWords.defaultProps = defaultProps
