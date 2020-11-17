import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { DropdownPhoneSelect } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

export default {
  component: DropdownPhoneSelect,
  title: 'Form/DropdownPhoneSelect',
  parameters: {
    component: DropdownPhoneSelect,
  },
}

export const Default = () => {
  return (
    <Grid>
      <GridCol offset="1" col="8">
        <DropdownPhoneSelect
          id={text('id', 'dropdown-select')}
          error={boolean('error', false)}
          valid={boolean('valid', false)}
          disabled={boolean('disabled', false)}
          hideLabel={boolean('hide label?', false)}
          labelText={text('LabelText', 'label')}
          resetOnBackspace={boolean('resetOnBackspace', false)}
          highlightOptionBox={boolean('highlightOptionBox', true)}
          preferredCountries={['fr', 'lu', 'be']}
        />
        <p>
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p>labelPropsGetter props:</p>
      </GridCol>
    </Grid>
  )
}
