import React from 'react'
import { Button } from '../../../components/buttons/button'
import { FacebookIcon } from '../../../components/graphics/icons/facebook-icon'
import { TwitterIcon } from '../../../components/graphics/icons/twitter-icon'
import { LinkedinIcon } from '../../../components/graphics/icons/linkedin-icon'
import { InstagramIcon } from '../../../components/graphics/icons/instagram-icon'
import { YoutubeIcon } from '../../../components/graphics/icons/youtube-icon'
import { PinterestIcon } from '../../../components/graphics/icons/pinterest-icon'

export const FacebookButtonIcon = props => (
  <Button {...props} modifier="social_facebook" icon>
    <FacebookIcon width="14" height="14" />
  </Button>
)

export const TwitterButtonIcon = props => (
  <Button {...props} modifier="social_twitter" icon>
    <TwitterIcon width="15" height="15" />
  </Button>
)

export const LinkedinButtonIcon = props => (
  <Button {...props} modifier="social_linkedin" icon>
    <LinkedinIcon width="12" height="12" />
  </Button>
)

export const InstagramButtonIcon = props => (
  <Button {...props} modifier="social_instagram" icon>
    <InstagramIcon width="16" height="16" />
  </Button>
)

export const YoutubeButtonIcon = props => (
  <Button {...props} modifier="social_youtube" icon>
    <YoutubeIcon width="16" height="16" />
  </Button>
)

export const PinterestButtonIcon = props => (
  <Button {...props} modifier="social_pinterest" icon>
    <PinterestIcon width="16" height="16" />
  </Button>
)
