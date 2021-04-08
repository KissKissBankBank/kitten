import React from 'react'
import { CreditCardForm } from './index'
import { DefaultExample, CustomExample } from './examples'

export default {
  title: 'Form/CreditCardForm',
  component: CreditCardForm,
  decorators: [
    Story => (
      <div className="story-Container story-Grid">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  return <DefaultExample />
}

export const withCustomComponents = () => {
  return <CustomExample />
}
