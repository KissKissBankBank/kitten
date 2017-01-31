import React from 'react'
import { RadioButton } from 'kitten/components/form/radio-button'
import { TagButton } from 'kitten/components/buttons/tag-button'
import { VisaIcon } from 'kitten/components/icons/visa-icon'

export const KarlPaymentButton = (props) => {
  const text = <TagButton big={ true } icon={ true } tag="span">
                 <VisaIcon />
               </TagButton>

  return (
    <RadioButton id="payment-button" text={ text } />
  )
}
