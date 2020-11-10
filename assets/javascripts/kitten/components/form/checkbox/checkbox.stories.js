import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Checkbox } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

export default {
  component: Checkbox,
  title: 'Form/Checkbox',
  parameters: {
    component: Checkbox,
  },
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="8">
      <Checkbox
        onLabelClick={action('label-click')}
        indeterminate={boolean('indeterminate', false)}
        id={text('id', 'checkbox_id')}
        disabled={boolean('disabled', false)}
      >
        {text('text', 'Checkbox Label')}
      </Checkbox>
    </GridCol>
    <GridCol offset="1" col="8">
      <Checkbox
        id="checkbox_id_2"
        indeterminate={boolean('indeterminate', false)}
        disabled={boolean('disabled', false)}
      >
        This label has a <a href="#link">link</a>.
      </Checkbox>
    </GridCol>
  </Grid>
)

export const WithContent = () => (
  <Grid>
    <GridCol offset="1" col="8">
      <Checkbox
        indeterminate={boolean('indeterminate', false)}
        id={text('id', 'checkbox_id')}
        disabled={boolean('disabled', false)}
        label={text('label', 'Checkbox Label')}
      >
        {text('content', 'Checkbox content')}
      </Checkbox>
    </GridCol>
  </Grid>
)
