import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ToggleSwitch } from './index'

export default {
  component: ToggleSwitch,
  title: 'Form/ToggleSwitch',
  decorators: [withKnobs],
}

export const Default = () => {
  return (
    <Grid style={{ marginTop: '5em' }}>
      <GridCol offset="1" col="6">
        <ToggleSwitch
          id="toggle-switch"
          disabled={boolean('Disabled', false)}
          big={boolean('Big', false)}
          label={text('Label', 'Le label')}
          isLabelVisible={boolean('isLabelVisible', true)}
          reverseOrder={boolean('reverseOrder', false)}
          locked={boolean('Locked?', false)}
        />
      </GridCol>
    </Grid>
  )
}
