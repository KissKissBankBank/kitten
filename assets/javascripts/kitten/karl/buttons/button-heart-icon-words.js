import React from 'react'
import { Button } from 'kitten/components/buttons/button'
import { HeartIcon } from 'kitten/components/icons/heart-icon'

export const KarlButtonIconHeartLeft = (props) => {
  return (
    <Button className="k-Button--icon" { ...props }>
      <HeartIcon className="k-Button__icon" />
      Button
    </Button>
  )
}

export const KarlButtonIconHeartRight = (props) => {
  return (
    <Button className="k-Button--icon" iconOnRight={ true } { ...props }>
      Button
      <HeartIcon className="k-Button__icon" />
    </Button>
  )
}
