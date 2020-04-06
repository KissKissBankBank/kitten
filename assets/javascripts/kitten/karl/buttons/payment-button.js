import React, { Component } from 'react'
import { RadioButton } from '../../components/form/radio-button'
import { TagButton } from '../../components/buttons/tag-button'
import { VisaIcon } from '../../components/icons/visa-icon'
import { MasterCardIcon } from '../../components/icons/mastercard-icon'
import { CbIcon } from '../../components/icons/cb-icon'

const paymentButtonWrapper = (WrappedComponent, props) => {
  return class PaymentButtonWrapper extends Component {
    render() {
      const text = (
        <TagButton icon big tag="span">
          <WrappedComponent className="k-TagButton__icon" />
        </TagButton>
      )

      return <RadioButton text={text} {...props} />
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

const KarlPaymentButtonBankTransfer = () => {
  const text = (
    <TagButton big tag="span">
      Virement
    </TagButton>
  )

  return <RadioButton text={text} name="payment-button-1" />
}
