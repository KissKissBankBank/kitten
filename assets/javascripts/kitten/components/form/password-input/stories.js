import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, object, text } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { PasswordInput } from './index'

const info = {
  text: `
    # PasswordInput
    &nbsp;

    ## Import
    ~~~js
    import { PasswordInput } from '@kisskissbankbank/kitten/src/components/form/password-input'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <PasswordInput />
    ~~~

    ### Props
    ~~~js
      <PasswordInput iconLabel="…" hiddenIconLabel="…" />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Form/PasswordInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'Password input',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="6">
            <PasswordInput
              iconLabel={text('Icon label', 'Show password')}
              hiddenIconLabel={text('Hidden icon label', 'Hide password')}
              placeholder={text('Placeholder', 'Enter your code')}
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
