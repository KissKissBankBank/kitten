import React, { useState } from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { CheckableButton } from './index'
import { buttonSizes, buttonVariants } from '../../buttons/button'
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
              size={select(
                'Size',
                buttonSizes,
                'regular',
              )}
              variant={select('Variant', buttonVariants, 'andromeda')}
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
                buttonSizes,
                'regular',
              )}
              variant={select('Variant', buttonVariants, 'andromeda')}
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
