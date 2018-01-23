import React from 'react'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { InstagramIcon } from 'kitten/components/icons/instagram-icon'

export const FacebookButtonIcon = props => (
  <ButtonIcon
    { ...props }
    modifier="facebook"
    aria-label="Facebook"
  >
    <FacebookIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const TwitterButtonIcon = props => (
  <ButtonIcon
    { ...props }
    modifier="twitter"
    aria-label="Twitter"
  >
    <TwitterIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const LinkedinButtonIcon = props => (
  <ButtonIcon
    { ...props }
    modifier="linkedin"
    aria-label="Linkedin"
  >
    <LinkedinIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const InstagramButtonIcon = props => (
  <ButtonIcon
    { ...props }
    modifier="instagram"
    aria-label="Instagram"
  >
    <InstagramIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)
