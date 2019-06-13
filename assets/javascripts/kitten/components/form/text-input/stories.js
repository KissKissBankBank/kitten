import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
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
    <TextInput>MyTextInput</TextInput>
    ~~~

    #### Size
    ~~~js
    <TextInput tiny>MyTextInput</TextInput>
    ~~~

  #### Tag
    ~~~js
    <TextInput as="textarea">MyTextInput</TextInput>
    <TextInput as="input">MyTextInput</TextInput>
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
          />
        </GridCol>
      </Grid>
    )
  })
