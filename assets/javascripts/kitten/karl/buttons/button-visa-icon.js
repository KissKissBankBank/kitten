import React from 'react'
import { TagButton } from 'kitten/components/buttons/button'
import { VisaIcon } from 'kitten/components/icons/heart-icon'

export const KarlButtonIconVisa = (props) => {
  return (
    <TagButton className="k-TagButton" { ...props }>
      <VisaIcon className="k-TagButton" />
    </TagButton>
  )
}
