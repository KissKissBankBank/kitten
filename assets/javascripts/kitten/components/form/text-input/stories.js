import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { TextInput } from './index'

const info = {
  text: `
    # TextInput
    &nbsp;

    ## Import
    ~~~js
    import { TextInput } from '@kisskissbankbank/kitten/src/components/form/text-input'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <TextInput />
    ~~~

    #### Size
    ~~~js
    <TextInput tiny />
    ~~~

    #### Tag
    ~~~js
    <TextInput tag="textarea" />
    <TextInput tag="input" />
    ~~~

    #### State
    ~~~js
    <TextInput valid />
    <TextInput error />
    <TextInput disabled />
    ~~~

    ### Digits
    ~~~js
      <TextInput digits="2" />
      <TextInput digits="6" />
      <TextInput digits="12" />
    ~~~
  `,
}

storiesOf('Form/TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('with text', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="6">
          <TextInput
            valid={boolean('Valid', false)}
            error={boolean('Error', false)}
            disabled={boolean('Disabled', false)}
            tiny={boolean('Tiny', false)}
            placeholder={text('Placeholder', 'Les props sont transmises')}
            digits={number('Digits', 12)}
          />
        </GridCol>
      </Grid>
    )
  })
