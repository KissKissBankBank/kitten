import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { TextInputWithIcon } from './index'
import { SearchIcon } from '../../../components/icons/search-icon'

const info = {
  text: `
    # TextInputWithIcon
    &nbsp;

    ## Import
    ~~~js
    import { TextInputWithIcon } from '@kisskissbankbank/kitten/src/components/form/text-input-with-icon'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <TextInputWithIcon />
    ~~~

    #### Size
    ~~~js
    <TextInputWithIcon tiny />
    ~~~

    #### State
    ### Default props for "TextInput"
    ~~~js
    <TextInputWithIcon valid />
    <TextInputWithIcon error />
    <TextInputWithIcon disabled />
    ~~~

    ### With icon
    ~~~js
    <TextInputWithIcon>
      <MyIcon />
    <TextInputWithIcon>
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Form/TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'Text input with icon',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="6">
            <TextInputWithIcon
              disabled={boolean('Disabled', false)}
              placeholder={text(
                'Les props sont transmises',
                'Les props sont transmises',
              )}
              icon={
                <SearchIcon
                  aria-label="Search icon"
                  aria-hidden="true"
                  width="15"
                  height="15"
                />
              }
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
