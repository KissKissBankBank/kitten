import React from 'react'
import { CreditCardForm } from './index'
import { DefaultExample, CustomExample } from './examples'

export default {
  title: 'Form/CreditCardForm',
  component: CreditCardForm,
  decorators: [
    story => (
      <div className="story-Container">
        {story()}
      </div>
    ),
  ],
}

export const Default = args => <DefaultExample {...args} />

export const withCustomComponents = args => <CustomExample {...args} />
