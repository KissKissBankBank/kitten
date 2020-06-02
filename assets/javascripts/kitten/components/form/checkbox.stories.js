import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Checkbox } from './checkbox'
import { Grid, GridCol } from '../../components/grid/grid'

export default {
  component: Checkbox,
  title: 'Form/Checkbox',
  decorators: [withKnobs],
  parameters: {
    component: Checkbox,
  },
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="8">
      <Checkbox
        id={text('id', 'checkbox_id')}
        onLabelClick={action('label-click')}
        indeterminate={boolean('indeterminate', false)}
      >
        {text('text', 'Checkbox Label')}
      </Checkbox>
    </GridCol>
  </Grid>
)
