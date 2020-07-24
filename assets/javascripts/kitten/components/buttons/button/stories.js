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
import { Badge } from '../../..'
import { Cart } from '../../icons/cart'

const svgSizeRange = {
  range: true,
  min: 5,
  max: 60,
  step: 5,
}

const radiusBorderRange = {
  range: true,
  min: 0,
  max: 25,
  step: 1,
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
  Oxygen: 'oxygen',
  Checked: 'checked',
  Copper: 'copper',
}

const info = {
  text: `
    # Button
    &nbsp;

    ## Import
    ~~~js
    import { Button } from '@kisskissbankbank/kitten/src/components/buttons/button/button'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <Button>MyButton</Button>
    ~~~

    #### Size
    ~~~js
    <Button tiny>MyButton</Button>
    <Button big>MyButton</Button>
    <Button giant>MyButton</Button>
    ~~~

    #### Display
    ~~~js
    <Button fluid>MyButton</Button>
    ~~~

    #### With borderRadius
    ~~~js
    <Button borderRadius={4}>
      <MyButton />
    </Button>
    ~~~

    #### Modifier
    ~~~js
    <Button modifier="hydrogen">MyButton</Button>
    <Button modifier="helium">MyButton</Button>
    <Button modifier="lithium">MyButton</Button>
    <Button modifier="beryllium">MyButton</Button>
    <Button modifier="carbon">MyButton</Button>
    <Button modifier="oxygen">MyButton</Button>
    ~~~

    #### Tag
    ~~~js
    <Button as="a" href="#">MyButton</Button>
    <Button as="input" type="submit" value="MyButton" />
    ~~~

    #### With some elements
    ~~~js
    <Button>
      <span>My</span>
      <span>Button</span>
    </Button>
    ~~~

    #### With text and icon
    ~~~js
    <Button>
      <MyIcon />
      <span>MyButton</span>
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
                  giant={boolean('Giant', false)}
                  fluid={boolean('Fluid', false)}
                  modifier={select('Modifier', modifierOptions, 'hydrogen')}
                  disabled={boolean('Disabled', false)}
                  borderRadius={number('Border radius', 0, radiusBorderRange)}
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
                  giant={boolean('Giant', false)}
                  fluid={boolean('Fluid', false)}
                  modifier={select('Modifier', modifierOptions, 'hydrogen')}
                  disabled={boolean('Disabled', false)}
                  borderRadius={number('Border radius', 0, radiusBorderRange)}
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
                  giant={boolean('Giant', false)}
                  modifier={select('Modifier', modifierOptions, 'hydrogen')}
                  fluid={boolean('Fluid', false)}
                  disabled={boolean('Disabled', false)}
                  borderRadius={number('Border radius', 0, radiusBorderRange)}
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
  .add('with badge', () => {
    return (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
            <GridCol>
              <Button
                tiny={boolean('Tiny', false)}
                big={boolean('Big', false)}
                giant={boolean('Giant', false)}
                modifier={select('Modifier', modifierOptions, 'helium')}
                disabled={boolean('Disabled', false)}
              >
                <span>{text('Text', 'MyButton')}</span>
                <Badge color={text('Badge color', 'red')} Icon={Cart}>
                  {text('Count', '2')}
                </Badge>
              </Button>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
