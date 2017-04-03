import React from 'react'
import { RadioButton } from 'kitten/components/form/radio-button'
import { TagButton } from 'kitten/components/buttons/tag-button'
import { VisaIcon } from 'kitten/components/icons/visa-icon'
import { MastercardIcon } from 'kitten/components/icons/mastercard-icon'
import { CbIcon } from 'kitten/components/icons/cb-icon'

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

export const KarlPaymentButtonCb = props => {
  const text = <TagButton big={ true } icon={ true } tag="span">
                 <CbIcon />
               </TagButton>

  return (
    <RadioButton id="payment-button" text={ text } { ...props } />
  )
}

export const KarlPaymentButtonVirement = props => {
  const text = <TagButton big={ true } icon={ true } tag="span">
                 Virement
               </TagButton>

  return (
    <RadioButton id="payment-button" text={ text } { ...props } />
  )
}
