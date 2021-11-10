import React from 'react'
import { Button } from '../../../../components/molecules/buttons/button'
import { FacebookIcon } from '../../../../components/graphics/icons/facebook-icon'
import { TwitterIcon } from '../../../../components/graphics/icons/twitter-icon'
import { LinkedinIcon } from '../../../../components/graphics/icons/linkedin-icon'
import { InstagramIcon } from '../../../../components/graphics/icons/instagram-icon'
import { YoutubeIcon } from '../../../../components/graphics/icons/youtube-icon'

export const FacebookButtonIcon = props => (
  <Button {...props} modifier="social_facebook" fit="icon">
    <FacebookIcon width="14" height="14" />
  </Button>
)

export const TwitterButtonIcon = props => (
  <Button {...props} modifier="social_twitter" fit="icon">
    <TwitterIcon width="15" height="15" />
  </Button>
)

export const LinkedinButtonIcon = props => (
  <Button {...props} modifier="social_linkedin" fit="icon">
    <LinkedinIcon width="12" height="12" />
  </Button>
)

export const InstagramButtonIcon = props => (
  <Button {...props} modifier="social_instagram" fit="icon">
    <InstagramIcon width="16" height="16" />
  </Button>
)

export const YoutubeButtonIcon = props => (
  <Button {...props} modifier="social_youtube" fit="icon">
    <YoutubeIcon width="16" height="16" />
  </Button>
)
