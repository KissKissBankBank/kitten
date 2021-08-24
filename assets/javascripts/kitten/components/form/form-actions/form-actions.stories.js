import React from 'react'
import { FormActions } from './index'
import { Button } from '../../../index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: FormActions,
  title: 'Form/FormActions',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="FormActions" />,
    },
  },
}

export const Default = () => {
  return (
    <FormActions>
      <FormActions.Item>
        <Button size="big">Cancel</Button>
      </FormActions.Item>
      <FormActions.Item>
        <Button size="big" modifier="helium">
          Confirm
        </Button>
      </FormActions.Item>
    </FormActions>
  )
}
