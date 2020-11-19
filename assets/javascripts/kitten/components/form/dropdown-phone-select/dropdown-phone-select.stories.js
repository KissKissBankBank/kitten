import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { DropdownPhoneSelect } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'
import flagFile from 'icons/flags.png'

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
          resetOnBackspace={true}
          highlightOptionBox={true}
          placeholder={text('placeholder', 'Téléphone')}
          phoneProps={{
            preferredCountries: [
              'fr',
              'be',
              'lu',
              're',
              'gp',
              'mq',
              'pf',
              'nc',
              'gf',
              'yt',
            ],
          }}
          country="fr"
          locale={select('locale', ['fr', 'en', 'nl'], 'fr')}
          flagsUrl={flagFile}
        />
        <p>
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Etiam porta sem malesuada magna mollis euismod.
        </p>
      </GridCol>
    </Grid>
  )
}
