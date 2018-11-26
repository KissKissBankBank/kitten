import React from 'react'
import { ButtonIcon } from '../../components/buttons/button-icon'
import { FacebookIcon } from '../../components/icons/facebook-icon'
import { TwitterIcon } from '../../components/icons/twitter-icon'
import { LinkedinIcon } from '../../components/icons/linkedin-icon'
import { InstagramIcon } from '../../components/icons/instagram-icon'
import { YoutubeIcon } from '../../components/icons/youtube-icon'
import { PinterestIcon } from '../../components/icons/pinterest-icon'

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
  <ButtonIcon {...props} modifier="linkedin" aria-label="LinkedIn">
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
