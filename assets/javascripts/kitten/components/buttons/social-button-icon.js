import React from 'react'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'

export const FacebookButtonIcon = props => (
  <ButtonIcon modifier="facebook" { ...props }>
    <FacebookIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const TwitterButtonIcon = props => (
  <ButtonIcon modifier="twitter" { ...props }>
    <TwitterIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

export const LinkedinButtonIcon = props => (
  <ButtonIcon modifier="linkedin" { ...props }>
    <LinkedinIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)
