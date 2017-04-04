import React from 'react'
import { RadioButton } from 'kitten/components/form/radio-button'
import { TagButton } from 'kitten/components/buttons/tag-button'
import { VisaIcon } from 'kitten/components/icons/visa-icon'
import { MastercardIcon } from 'kitten/components/icons/mastercard-icon'
import { CbIcon } from 'kitten/components/icons/cb-icon'

const paymentButtonWrapper = (WrappedComponent, props) => {
  return class PaymentButtonWrapper extends React.Component {
    render() {
      const text = <TagButton big={ true } icon={ true } tag="span">
                     <WrappedComponent />
                   </TagButton>

      return (
        <RadioButton id="payment-button"
                     text={ text }
                     { ...props } />
      )
    }
  }
}

export const KarlPaymentButtonVisa = paymentButtonWrapper(VisaIcon, {
  name: 'payment-button-1'
})

export const KarlPaymentButtonMastercard = paymentButtonWrapper(MastercardIcon, {
  name: 'payment-button-1',
  defaultChecked: true,
  id: 'checked-payment-button'
})

export const KarlPaymentButtonCb = paymentButtonWrapper(CbIcon, {
  name: 'payment-button-1',
  id: 'checked-payment-button-cb'
})

export const KarlPaymentButtonVirement = props => {
  const text = <TagButton big={ true } icon={ true } tag="span">
                 Virement
               </TagButton>

  return (
    <RadioButton text={ text }
                 name='payment-button-1'
                 id="checked-payment-button-mastercard" />
  )
}
