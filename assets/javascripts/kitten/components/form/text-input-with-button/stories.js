import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Loader } from '../../../components/loaders/loader'
import { TextInputWithButton } from './index'

const info = {
  text: `
    # TextInputWithButton
    &nbsp;

    ## Import
    ~~~js
    import { TextInputWithButton } from '@kisskissbankbank/kitten/src/components/form/text-input-with-button'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <TextInputWithButton />
    ~~~

    #### Size
    ~~~js
    <TextInputWithButton tiny />
    ~~~

    #### State
    ~~~js
    <TextInputWithButton valid />
    <TextInputWithButton error />
    <TextInputWithButton disabled />
    ~~~
  `,
}

const handleChange = e => {
  console.log('e', e)
}

storiesOf('Form/TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'Text input with button',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="6">
            <TextInputWithButton
              valid={boolean('Valid', false)}
              error={boolean('Error', false)}
              disabled={boolean('Disabled', false)}
              tiny={boolean('Tiny', false)}
              value={<Loader />}
              inputValue={text('inputValue', 'Une valeur')}
              placeholder={text(
                'Les props sont transmises',
                'Les props sont transmises',
              )}
              onChange={handleChange}
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
