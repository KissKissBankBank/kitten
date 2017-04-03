import React from 'react'
import { RadioButton } from 'kitten/components/form/radio-button'
import { TagButton } from 'kitten/components/buttons/tag-button'
import { VisaIcon } from 'kitten/components/icons/visa-icon'
import { MastercardIcon } from 'kitten/components/icons/mastercard-icon'

export const KarlPaymentButtonVisa = props => {
  const text = <TagButton big={ true } icon={ true } tag="span">
                 <VisaIcon />
               </TagButton>

  return (
    <RadioButton id="payment-button" text={ text } { ...props } />
  )
}

export const KarlPaymentButtonMastercard = props => {
  const text = <TagButton big={ true } icon={ true } tag="span">
                 <MastercardIcon />
               </TagButton>

  return (
    <RadioButton id="payment-button" text={ text } { ...props } />
  )
}
