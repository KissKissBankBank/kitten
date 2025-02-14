import React from 'react'
import { FormActions } from './index'
import { Button } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: FormActions,
  title: 'Form/FormActions',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="FormActions" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
}

export const Default = () => {
  return (
    <FormActions>
      <FormActions.Item>
        <Button size="large">Cancel</Button>
      </FormActions.Item>
      <FormActions.Item>
        <Button size="large" modifier="helium">
          Confirm
        </Button>
      </FormActions.Item>
    </FormActions>
  )
}
