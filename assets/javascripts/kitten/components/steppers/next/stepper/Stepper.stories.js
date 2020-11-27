import React from 'react'
import { action } from '@storybook/addon-actions'
import { Stepper, StepperLink, StepperItem } from './index'

export default {
  component: Stepper,
  title: 'Steppers/Next/Stepper',
  parameters: {
    component: Stepper,
    subcomponents: { 'Stepper.Item': StepperItem, 'Stepper.Link': StepperLink },
  },
}

export const Default = () => {
  return (
    <Stepper>
      <Stepper.Item>Default Item</Stepper.Item>
      <Stepper.Item state="progress">Progress Item</Stepper.Item>
      <Stepper.Item
        state="validated"
        onClick={action('Clicked on Item')}
        pointer
      >
        Validated Item
      </Stepper.Item>
      <Stepper.Link href="https://www.kisskissbankbank.com">
        Regular Link
      </Stepper.Link>
      <Stepper.Link
        href="https://www.kisskissbankbank.com"
        linkProps={{ 'aria-current': 'page' }}
      >
        Regular Link with props
      </Stepper.Link>
      <Stepper.Link href="https://www.kisskissbankbank.com" external>
        External Link
      </Stepper.Link>
      <Stepper.Link href="https://www.kisskissbankbank.com" state="progress">
        Progress Link
      </Stepper.Link>
    </Stepper>
  )
}
