import React from 'react'
import { Button } from '../../../components/buttons/button/button'
import { FacebookIcon } from '../../../components/icons/facebook-icon'
import { TwitterIcon } from '../../../components/icons/twitter-icon'
import { LinkedinIcon } from '../../../components/icons/linkedin-icon'
import { InstagramIcon } from '../../../components/icons/instagram-icon'
import { YoutubeIcon } from '../../../components/icons/youtube-icon'
import { PinterestIcon } from '../../../components/icons/pinterest-icon'

export const FacebookButtonIcon = props => (
  <Button {...props} modifier="social_facebook" icon>
    <FacebookIcon width="14" height="14" title="Facebook" />
  </Button>
)

export const TwitterButtonIcon = props => (
  <Button {...props} modifier="social_twitter" icon>
    <TwitterIcon width="15" height="15" title="Twitter" />
  </Button>
)

export const LinkedinButtonIcon = props => (
  <Button {...props} modifier="social_linkedin" icon>
    <LinkedinIcon width="12" height="12" title="Linkedin" />
  </Button>
)

export const InstagramButtonIcon = props => (
  <Button {...props} modifier="social_instagram" icon>
    <InstagramIcon width="16" height="16" title="Instagram" />
  </Button>
)

export const YoutubeButtonIcon = props => (
  <Button {...props} modifier="social_youtube" icon>
    <YoutubeIcon width="16" height="16" title="Youtube" />
  </Button>
)

export const PinterestButtonIcon = props => (
  <Button {...props} modifier="social_pinterest" icon>
    <PinterestIcon width="16" height="16" title="Pinterest" />
  </Button>
)
