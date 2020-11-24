import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { CheckboxSet } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

export default {
  component: CheckboxSet,
  title: 'Form/CheckboxSet',
  parameters: {
    component: CheckboxSet,
  },
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="8">
      <CheckboxSet
        id={text('ID', 'story-radio-button-set')}
        label={text('Label', null)}
        items={[
          {
            label: text('Option A', 'Option A'),
            id: 'option-a',
            defaultChecked: true,
          },
          {
            label: text('Option B', 'Option B'),
            id: 'option-b',
          },
          {
            label: text('Option C', 'Option C'),
            id: 'option-c',
          },
        ]}
        error={boolean('Error?', false)}
        disabled={boolean('Disabled', false)}
      />
    </GridCol>
  </Grid>
)
