import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  boolean,
  number,
  radios,
  select,
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

const modifierOptions = {
  Hydrogen: 'hydrogen',
  Helium: 'helium',
  Lithium: 'lithium',
  Beryllium: 'beryllium',
  Carbon: 'carbon',
  Azote: 'azote',
  Oxygen: 'oxygen',
}

const info = {
  text: `
    # Button

    &nbsp;

    #### Default
    ~~~js
    <Button>FooBar</Button>
    ~~~

    #### Size
    ~~~js
    <Button tiny>FooBar</Button>
    <Button big>FooBar</Button>
    ~~~

    #### Display
    ~~~js
    <Button fluid>FooBar</Button>
    ~~~

    #### Modifier
    ~~~js
    <Button modifier="hydrogen">FooBar</Button>
    <Button modifier="helium">FooBar</Button>
    <Button modifier="lithium">FooBar</Button>
    <Button modifier="beryllium">FooBar</Button>
    <Button modifier="carbon">FooBar</Button>
    <Button modifier="azote">FooBar</Button>
    <Button modifier="oxygen">FooBar</Button>
    ~~~

    #### Tag
    ~~~js
    <Button as="a">FooBar</Button>
    ~~~

    #### With some elements
    ~~~js
    <Button>
      <span>Foo</span>
      <span>Bar</span>
    </Button>
    ~~~

    #### With text and icon
    ~~~js
    <Button>
      <MyIcon />
      <span>FooBar</span>
    </Button>
    ~~~

    #### With icon
    ~~~js
    <Button icon>
      <MyIcon />
    </Button>
    ~~~
  `,
  header: false,
  propTablesExclude: [Container, Grid, GridCol, Marger, BurgerIcon],
}

storiesOf('Buttons/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'with text',
    () => {
      return (
        <Marger top="4" bottom="4">
          <Container>
            <Grid>
              <GridCol>
                <Button
                  tiny={boolean('Tiny', false)}
                  big={boolean('Big', false)}
                  fluid={boolean('Fluid', false)}
                  modifier={select('Modifier', modifierOptions, 'hydrogen')}
                >
                  {text('Text', 'MyButton')}
                </Button>
              </GridCol>
            </Grid>
          </Container>
        </Marger>
      )
    },
    { info },
  )
  .add(
    'with text and icon',
    () => {
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
                  modifier={select('Modifier', modifierOptions, 'hydrogen')}
                >
                  {iconPosition === 'left' && (
                    <BurgerIcon
                      width={number('Icon size', 15, svgSizeRange)}
                      height={number('Icon size', 15, svgSizeRange)}
                    />
                  )}

                  <span>{text('Text', 'MyButton')}</span>

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
    },
    { info },
  )
  .add(
    'with icon',
    () => {
      return (
        <Marger top="4" bottom="4">
          <Container>
            <Grid>
              <GridCol>
                <Button
                  tiny={boolean('Tiny', false)}
                  big={boolean('Big', false)}
                  modifier={select('Modifier', modifierOptions, 'hydrogen')}
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
    },
    { info },
  )
