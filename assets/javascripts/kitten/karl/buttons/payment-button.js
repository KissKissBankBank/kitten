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
      const text = <TagButton big icon tag="span">
                     <WrappedComponent className="k-TagButton__icon" />
                   </TagButton>

      return (
        <RadioButton text={ text }
                     { ...props } />
      )
    }
  }
}

export const KarlPaymentButtons = () => (
  <Line>
    <Line.Item>
      <KarlPaymentButtonVisa />
    </Line.Item>
    <Line.Item>
      <KarlPaymentButtonMasterCard />
    </Line.Item>
    <Line.Item>
      <KarlPaymentButtonCb />
    </Line.Item>
    <Line.Item>
      <KarlPaymentButtonBankTransfer />
    </Line.Item>
  </Line>
)

const KarlPaymentButtonVisa = paymentButtonWrapper(VisaIcon, {
  name: 'payment-button-1',
})

const KarlPaymentButtonMasterCard = paymentButtonWrapper(MasterCardIcon, {
  name: 'payment-button-1',
  defaultChecked: true,
})

const KarlPaymentButtonCb = paymentButtonWrapper(CbIcon, {
  name: 'payment-button-1',
})

const KarlPaymentButtonBankTransfer = props => {
  const text = <TagButton big tag="span">
                 Virement
               </TagButton>

  return (
    <RadioButton text={ text }
                 name='payment-button-1' />
  )
}
