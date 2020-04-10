import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { CheckableButton } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

const info = {
  text: `
    # CheckableButton
    &nbsp;

    ## Import
    ~~~js
    import { CheckableButton } from '@kisskissbankbank/kitten/src/components/buttons/checkable-button'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <CheckableButton>MyCheckableButton</CheckableButton>
    ~~~

    #### Size
    ~~~js
    <CheckableButton tiny>MyCheckableButton</CheckableButton>
    <CheckableButton big>MyCheckableButton</CheckableButton>
    ~~~

    #### Display
    ~~~js
    <CheckableButton fluid>MyCheckableButton</CheckableButton>
    ~~~

    #### With borderRadius
    ~~~js
    <CheckableButton borderRadius={4}>
      <MyCheckableButton />
    </CheckableButton>
    ~~~

    #### Checked state
    ~~~js
    <CheckableButton isChecked>MyCheckableButton</CheckableButton>
    ~~~

    #### Error
    ~~~js
    <CheckableButton error>MyCheckableButton</CheckableButton>
    ~~~

    #### Disabled
    ~~~js
    <CheckableButton disabled>MyCheckableButton</CheckableButton>
    ~~~
  `,
  header: false,
  propTablesExclude: [Container, Grid, GridCol, Marger],
}

storiesOf('Buttons/Checkable Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'isCheckable',
    () => {
      const [buttonIsChecked, changeButtonState] = useState(true)

      return (
        <Marger top="4" bottom="4">
          <Container>
            <Grid>
              <GridCol col={4}>
                <CheckableButton
                  tiny={boolean('Tiny', false)}
                  big={boolean('Big', false)}
                  disabled={boolean('Disabled', false)}
                  error={boolean('Error', false)}
                  isChecked={boolean('Checked', false)}
                >
                  <span>{text('Text', 'MyButton')}</span>
                </CheckableButton>
                <p>
                  <small>Button controlled by the "Checked" knob</small>
                </p>
              </GridCol>
              <GridCol col={4}>
                <CheckableButton
                  tiny={boolean('Tiny', false)}
                  big={boolean('Big', false)}
                  disabled={boolean('Disabled', false)}
                  error={boolean('Error', false)}
                  isChecked={buttonIsChecked}
                  onClick={() => changeButtonState(!buttonIsChecked)}
                >
                  <span>{text('Text', 'MyButton')}</span>
                </CheckableButton>
                <p>
                  <small>Clickable button</small>
                </p>
              </GridCol>
            </Grid>
          </Container>
        </Marger>
      )
    },
    { info },
  )
