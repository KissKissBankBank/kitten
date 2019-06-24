import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { TextInputWithLimit } from './index'

const info = {
  text: `
    # TextInputWithLimit
    &nbsp;

    ## Import
    ~~~js
    import { TextInputWithLimit } from '@kisskissbankbank/kitten/src/components/form/text-input-with-limit'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <TextInputWithLimit />
    ~~~

   #### Size
    ~~~js
    <TextInputWithLimit tiny />
    ~~~

    #### State
    ~~~js
    <TextInputWithLimit error />
    <TextInputWithLimit disabled />
    ~~~
  `,
}

storiesOf('Form/TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Text input with limit', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="6">
          <TextInputWithLimit
            disabled={boolean('Disabled', false)}
            tiny={boolean('Tiny', false)}
          />
        </GridCol>
      </Grid>
    )
  })
