import React from 'react'
import { FormActions } from './index'
import { Button } from '../../../index'

export default {
  component: FormActions,
  title: 'Form/FormActions',
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
