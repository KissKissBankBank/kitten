import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, object, text } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { PasswordInput } from './index'

storiesOf('Form/PasswordInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Password input', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="6">
          <PasswordInput
            iconLabel={text('Icon label', 'Show password')}
            hiddenIconLabel={text('Hidden icon label', 'Hide password')}
            textInputProps={object('textInputProps', {
              placeholder: 'Enter your code',
              tiny: false,
            })}
          />
        </GridCol>
      </Grid>
    )
  })
