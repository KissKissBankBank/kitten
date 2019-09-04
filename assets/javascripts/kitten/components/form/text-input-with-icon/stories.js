import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
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
              valid={boolean('Valid', false)}
              error={boolean('Error', false)}
              disabled={boolean('Disabled', false)}
              tiny={boolean('Tiny', false)}
              placeholder={text(
                'Les props sont transmises',
                'Les props sont transmises',
              )}
            >
              <SearchIcon
                aria-label="Search icon"
                aria-hidden="true"
                width="15"
                height="15"
              />
            </TextInputWithIcon>
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
