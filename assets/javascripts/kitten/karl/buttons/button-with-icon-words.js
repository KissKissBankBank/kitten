import React from 'react'
import { Button } from '../../components/buttons/button'
import { HeartIcon } from '../../components/icons/heart-icon'

export const KarlButtonIconWordsLeft = props => (
  <Button icon {...props}>
    <HeartIcon className="k-Button__icon" />
    Button
  </Button>
)

export const KarlButtonIconWordsRight = props => (
  <Button icon iconOnRight {...props}>
    Button
    <HeartIcon className="k-Button__icon" />
  </Button>
)
