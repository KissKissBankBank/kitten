import React from 'react'
import { ButtonTag } from 'kitten/components/buttons/button'
import { VisaIcon } from 'kitten/components/icons/heart-icon'

export const KarlButtonIconVisa = (props) => {
  return (
    <ButtonTag className="k-ButtonTag" { ...props }>
      <VisaIcon className="k-ButtonTag" />
    </ButtonTag>
  )
}
