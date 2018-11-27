import React from 'react'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { InstagramIcon } from 'kitten/components/icons/instagram-icon'
import { YoutubeIcon } from 'kitten/components/icons/youtube-icon'
import { PinterestIcon } from 'kitten/components/icons/pinterest-icon'

export const FacebookButtonIcon = props => (
  <ButtonIcon {...props} modifier="facebook" aria-label="Facebook">
    <FacebookIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const TwitterButtonIcon = props => (
  <ButtonIcon {...props} modifier="twitter" aria-label="Twitter">
    <TwitterIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const LinkedinButtonIcon = props => (
  <ButtonIcon {...props} modifier="linkedin">
    <LinkedinIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const InstagramButtonIcon = props => (
  <ButtonIcon {...props} modifier="instagram" aria-label="Instagram">
    <InstagramIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const YoutubeButtonIcon = props => (
  <ButtonIcon {...props} modifier="youtube" aria-label="Youtube">
    <YoutubeIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const PinterestButtonIcon = props => (
  <ButtonIcon {...props} modifier="pinterest" aria-label="Pinterest">
    <PinterestIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)
