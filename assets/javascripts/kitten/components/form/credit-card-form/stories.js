import React from 'react'
import { CreditCardForm } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../layout/container'
import { DefaultExample, CustomExample } from './examples'
import { DocsPage } from 'storybook/docs-page'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

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
}

export const Default = () => {
  return (
    <StoryContainer>
      <DefaultExample />
    </StoryContainer>
  )
}

export const withCustomComponents = () => {
  return (
    <StoryContainer>
      <CustomExample />
    </StoryContainer>
  )
}
