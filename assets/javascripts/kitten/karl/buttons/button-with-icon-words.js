import React from 'react'
import { Button } from 'kitten/components/buttons/button'
import { HeartIcon } from 'kitten/components/icons/heart-icon'

export const KarlButtonIconWordsLeft = (props) => {
  return (
    <Button className="k-Button--icon" { ...props }>
      <HeartIcon className="k-Button__icon" />
      Button
    </Button>
  )
}

export const KarlButtonIconWordsRight = (props) => {
  return (
    <Button className="k-Button--icon" iconOnRight { ...props }>
      Button
      <HeartIcon className="k-Button__icon" />
    </Button>
  )
}
