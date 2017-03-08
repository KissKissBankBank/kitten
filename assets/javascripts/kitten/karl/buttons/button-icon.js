import React from 'react'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'

export const KarlButtonIconHeart = props => {
  return (
    <ButtonIcon className="k-Button--icon" { ...props }>
      <HeartIcon className="k-ButtonIcon__svg" />
    </ButtonIcon>
  )
}

export const KarlButtonIconMicro = props => {
  return (
    <ButtonIcon className="k-Button--icon" { ...props }>
      <ArrowIcon className="k-ButtonIcon__svg" />
    </ButtonIcon>
  )
}

export const KarlButtonIconFacebookIcon = props => {
  return (
    <ButtonIcon className="k-Button--icon k-u-margin-bottom-single" { ...props }>
      <FacebookIcon className="k-ButtonIcon__svg" />
    </ButtonIcon>
  )
}

export const KarlButtonIconTwitterIcon = props => {
  return (
    <ButtonIcon className="k-Button--icon k-u-margin-bottom-single" { ...props }>
      <TwitterIcon className="k-ButtonIcon__svg" />
    </ButtonIcon>
  )
}

export const KarlButtonIconLinkedinIcon = props => {
  return (
    <ButtonIcon className="k-Button--icon" { ...props }>
      <LinkedinIcon className="k-ButtonIcon__svg" />
    </ButtonIcon>
  )
}
