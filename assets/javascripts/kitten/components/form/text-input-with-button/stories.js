import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, object } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
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

    #### State
    ~~~js
    <TextInputWithButton valid />
    <TextInputWithButton error />
    <TextInputWithButton disabled />
    ~~~

    ### Props
    ~~~js
      <TextInputWithButton
        textInputProps={{
          #show TextInput component
        }}
      />
    ~~~
  `,
}

storiesOf('Form/TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('with text and button', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="6">
          <TextInputWithButton
            valid={boolean('Valid', false)}
            error={boolean('Error', false)}
            disabled={boolean('Disabled', false)}
            textInputProps={object('Placeholder', {
              placeholder: 'Les props sont transmises',
            })}
          />
        </GridCol>
      </Grid>
    )
  })
