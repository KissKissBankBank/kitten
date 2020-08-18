import React, { useState } from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { CheckableButton } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

export const IsCheckable = () => {
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
}
