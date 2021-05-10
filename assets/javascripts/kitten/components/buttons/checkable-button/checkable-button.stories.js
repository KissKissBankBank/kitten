import React, { useState } from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { CheckableButton } from './index'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { Grid, GridCol } from '../../structure/grid'

export const IsCheckable = () => {
  const [buttonIsChecked, changeButtonState] = useState(true)

  return (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol col={4}>
            <CheckableButton
              size={select(
                'Size',
                ['micro', 'tiny', 'regular', 'big', 'huge', 'giant'],
                'regular',
              )}
              variant={select('Variant', ['andromeda', 'orion'], 'andromeda')}
              checkPosition={select(
                'Check Position',
                ['bottom', 'left'],
                'bottom',
              )}
              disabled={boolean('Disabled', false)}
              error={boolean('Error', false)}
              isChecked={boolean('Checked', false)}
            >
              {text('Text', 'MyButton')}
            </CheckableButton>
            <p className="k-u-weight-light k-u-size-micro">
              Button controlled by the "Checked" knob
            </p>
          </GridCol>
          <GridCol col={4}>
            <CheckableButton
              size={select(
                'Size',
                ['micro', 'tiny', 'regular', 'big', 'huge', 'giant'],
                'regular',
              )}
              variant={select('Variant', ['andromeda', 'orion'], 'andromeda')}
              checkPosition={select(
                'Check Position',
                ['bottom', 'left'],
                'bottom',
              )}
              disabled={boolean('Disabled', false)}
              error={boolean('Error', false)}
              isChecked={buttonIsChecked}
              onClick={() => changeButtonState(!buttonIsChecked)}
            >
              {text('Text', 'MyButton')}
            </CheckableButton>
            <p className="k-u-weight-light k-u-size-micro">Clickable button</p>
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  )
}
