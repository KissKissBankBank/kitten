import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { TextInputWithUnit } from './index'

const info = {
  text: `
    # TextInputWithUnit
    &nbsp;

    ## Import
    ~~~js
    import { TextInputWithUnit } from '@kisskissbankbank/kitten/src/components/form/text-input-with-unit'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <TextInputWithUnit />
    ~~~

   #### Size
    ~~~js
    <TextInputWithUnit tiny />
    ~~~

    #### State
    ~~~js
    <TextInputWithUnit valid />
    <TextInputWithUnit error />
    <TextInputWithUnit disabled />
    ~~~

    ### Unit
    ~~~js
    <TextInputWithUnit>€</TextInputWithUnit>
    ~~~
  `,
}

storiesOf('Form/TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Text input with unit', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="6">
          <TextInputWithUnit
            valid={boolean('Valid', false)}
            error={boolean('Error', false)}
            disabled={boolean('Disabled', false)}
            tiny={boolean('Tiny', false)}
            error={boolean('Error', false)}
            unit={text('Unit', '€')}
            textInputProps={object('textInputProps', {
              digits: 0,
            })}
          />
        </GridCol>
      </Grid>
    )
  })
