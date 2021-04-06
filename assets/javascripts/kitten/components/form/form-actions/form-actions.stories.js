import React from 'react'
import { FormActions } from './index'
import { Button } from '../../../index'

export default {
  component: FormActions,
  title: 'Form/FormActions',
}

export const Default = () => {
  return (
    <FormActions>
      <FormActions.Item>
        <Button big>Cancel</Button>
      </FormActions.Item>
      <FormActions.Item>
        <Button big modifier="helium">
          Confirm
        </Button>
      </FormActions.Item>
    </FormActions>
  )
}
