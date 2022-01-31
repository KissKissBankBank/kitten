import React from 'react'
import { FormActions } from './index'
import { Button } from '../../../index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: FormActions,
  title: 'Forms/FormActions',
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
