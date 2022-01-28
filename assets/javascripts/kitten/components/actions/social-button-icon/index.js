import React from 'react'
import { Button } from '../../../../components/actions/button'
import { FacebookIcon } from '../../../../components/visuals/icons/facebook-icon'
import { TwitterIcon } from '../../../../components/visuals/icons/twitter-icon'
import { LinkedinIcon } from '../../../../components/visuals/icons/linkedin-icon'
import { InstagramIcon } from '../../../../components/visuals/icons/instagram-icon'
import { YoutubeIcon } from '../../../../components/visuals/icons/youtube-icon'

export const FacebookButtonIcon = props => (
  <Button {...props}>
    <FacebookIcon width="14" height="14" />
  </Button>
)

export const TwitterButtonIcon = props => (
  <Button {...props}>
    <TwitterIcon width="15" height="15" />
  </Button>
)

export const LinkedinButtonIcon = props => (
  <Button {...props}>
    <LinkedinIcon width="12" height="12" />
  </Button>
)

export const InstagramButtonIcon = props => (
  <Button {...props}>
    <InstagramIcon width="16" height="16" />
  </Button>
)

export const YoutubeButtonIcon = props => (
  <Button {...props}>
    <YoutubeIcon width="16" height="16" />
  </Button>
)

const defaultProps = {
  modifier: 'beryllium',
  fit: 'icon',
}

FacebookButtonIcon.defaultProps = defaultProps
TwitterButtonIcon.defaultProps = defaultProps
LinkedinButtonIcon.defaultProps = defaultProps
InstagramButtonIcon.defaultProps = defaultProps
YoutubeButtonIcon.defaultProps = defaultProps
