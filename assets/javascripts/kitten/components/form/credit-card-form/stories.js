import React from 'react'
import { CreditCardForm } from './index'
import { DefaultExample, CustomExample } from './examples'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Form/CreditCardForm',
  component: CreditCardForm,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'components/cvc.js',
            'components/expiry.js',
            'components/helpers.js',
            'components/number.js',
          ]}
          importString="CreditCardForm"
        />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
}

export const Default = args => <DefaultExample {...args} />

export const withCustomComponents = args => <CustomExample {...args} />
