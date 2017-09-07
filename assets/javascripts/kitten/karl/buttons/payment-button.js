import React from 'react'
import { RadioButton } from 'kitten/components/form/radio-button'
import { TagButton } from 'kitten/components/buttons/tag-button'
import { VisaIcon } from 'kitten/components/icons/visa-icon'
import { MasterCardIcon } from 'kitten/components/icons/mastercard-icon'
import { CbIcon } from 'kitten/components/icons/cb-icon'
import { Line } from 'kitten/components/layout/line'

const paymentButtonWrapper = (WrappedComponent, props) => {
  return class PaymentButtonWrapper extends React.Component {
    render() {
      const text = <TagButton
                     big
                     icon
                     tag="span"
                   >
                     <WrappedComponent className="k-TagButton__icon" />
                   </TagButton>

      return (
        <RadioButton
          text={ text }
          { ...props }
        />
      )
    }
  }
}

export const KarlPaymentButtons = () => (
  <div>
    <KarlPaymentButtonVisa />
    <KarlPaymentButtonMasterCard />
    <KarlPaymentButtonCb />
    <KarlPaymentButtonBankTransfer />
  </div>
)

const KarlPaymentButtonVisa = paymentButtonWrapper(VisaIcon, {
  name: 'payment-button-1',
  width: '36',
})

const KarlPaymentButtonMasterCard = paymentButtonWrapper(MasterCardIcon, {
  name: 'payment-button-1',
  defaultChecked: true,
  width: '36',
})

const KarlPaymentButtonCb = paymentButtonWrapper(CbIcon, {
  name: 'payment-button-1',
  width: '36',
})

const KarlPaymentButtonBankTransfer = props => {
  const text = <TagButton
                 big
                 tag="span"
               >
                 Virement
               </TagButton>

  return (
    <RadioButton
      text={ text }
      name="payment-button-1"
    />
  )
}
