import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Grid, GridCol } from '../../../components/grid/grid'
import { TextInputWithButton } from './index'

storiesOf('Form/TextInputWithButton', module).add(
  'default',
  withInfo('common info')(() => (
    <Grid style={{ marginTop: '5em' }}>
      <GridCol offset="1" col="6">
        <TextInputWithButton
          value="Go !"
          textInputProps={{ placeholder: 'Les props sont transmises' }}
        />
      </GridCol>
    </Grid>
  )),
)
