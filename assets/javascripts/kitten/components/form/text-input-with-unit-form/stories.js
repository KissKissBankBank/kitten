import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { TextInputWithUnitForm } from './index'

const versionOptions = {
  Default: 'default',
  Tiny: 'tiny',
}

const info = {
  text: `
    # TextInputWithUnitForm
    &nbsp;

    ## Import
    ~~~js
    import { TextInputWithUnitForm } from '@kisskissbankbank/kitten/src/components/form/text-input-with-unit-form'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <TextInputWithUnitForm />
    ~~~

    ### State
    ~~~js
      <TextInputWithUnitForm inputIsOnError />
      <TextInputWithUnitForm formIsDisabled />
    ~~~

   #### Version
    ~~~js
    <TextInputWithUnitForm version="default" />
    <TextInputWithUnitForm version="tiny" />
    ~~~
  `,
}

storiesOf('Form/TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Text input with unit form', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="6">
          <TextInputWithUnitForm
            inputId={text('Id', '')}
            inputLabel={text('Label', '')}
            inputUnit={text('Unit', '€')}
            inputIsOnError={boolean('Error?', false)}
            errorMessage={text('Error', 'Error message…')}
            buttonLabel={text('Button', 'To contribute')}
            align={text('Align', 'center')}
            formIsDisabled={boolean('Disabled?', false)}
            version={select('Version', versionOptions, 'default')}
          />
        </GridCol>
      </Grid>
    )
  })
