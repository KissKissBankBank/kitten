import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  number,
  radios,
} from '@storybook/addon-knobs'
import { Button } from './button'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { BurgerIcon } from '../../icons/burger-icon'

const svgSizeRange = {
  range: true,
  min: 5,
  max: 60,
  step: 5,
}

const svgPositionOptions = {
  Left: 'left',
  Right: 'right',
}

storiesOf('Buttons/Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => {
    return (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
            <GridCol>
              <Button
                tiny={boolean('Tiny', false)}
                big={boolean('Big', false)}
                fluid={boolean('Fluid', false)}
              >
                {text('Text', 'MyButton')}
              </Button>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
  .add('with text and icon', () => {
    const iconPosition = radios('Icon position', svgPositionOptions, 'left')

    return (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
            <GridCol>
              <Button
                tiny={boolean('Tiny', false)}
                big={boolean('Big', false)}
                fluid={boolean('Fluid', false)}
              >
                {iconPosition === 'left' && (
                  <BurgerIcon
                    width={number('Icon size', 15, svgSizeRange)}
                    height={number('Icon size', 15, svgSizeRange)}
                  />
                )}

                <div>{text('Text', 'MyButton')}</div>

                {iconPosition === 'right' && (
                  <BurgerIcon
                    width={number('Icon size', 15, svgSizeRange)}
                    height={number('Icon size', 15, svgSizeRange)}
                  />
                )}
              </Button>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
  .add('with icon', () => {
    return (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
            <GridCol>
              <Button
                tiny={boolean('Tiny', false)}
                big={boolean('Big', false)}
                icon
              >
                <BurgerIcon
                  width={number('Icon size', 15, svgSizeRange)}
                  height={number('Icon size', 15, svgSizeRange)}
                />
              </Button>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
