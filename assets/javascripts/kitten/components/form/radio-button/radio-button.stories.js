import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { RadioButton } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

export default {
  component: RadioButton,
  title: 'Form/RadioButton',
  parameters: {
    component: RadioButton,
  },
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="8">
      <RadioButton
        id={text('id', 'radio-box_id')}
        onLabelClick={action('label-click')}
        onChange={action('change')}
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
        large={boolean('Large', false)}
        largeContent={boolean('LargeContent', false)}
        text={text('Text', 'RadioButton Label')}
        variant={select(
          'Variant',
          { andromeda: 'andromeda', orion: 'orion' },
          'andromeda',
        )}
        design={select('Design', { disc: 'disc', check: 'check' }, 'radio')}
      >
        {text('Content', null)}
      </RadioButton>
    </GridCol>
  </Grid>
)
