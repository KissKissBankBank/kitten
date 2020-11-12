import React from 'react'
import { text, boolean, number, radios, select } from '@storybook/addon-knobs'
import { Button } from './button'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { HeartIcon } from '../../icons/heart-icon'
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

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
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

export const WithText = () => (
  <Button
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
    fluid={boolean('Fluid', false)}
    modifier={select('Modifier', modifierOptions, 'hydrogen')}
    modifier={select('Variant', variantOptions, 'andromeda')}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Border radius', 0, radiusBorderRange)}
  >
    {text('Text', 'MyButton')}
  </Button>
)

WithText.decorators = [
  Story => (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol>
            <Story />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ),
]

export const WithIcon = () => (
  <Button
    micro={boolean('Micro', false)}
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
    modifier={select('Modifier', modifierOptions, 'hydrogen')}
    fluid={boolean('Fluid', false)}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Border radius', 0, radiusBorderRange)}
    icon
  >
    <HeartIcon
      width={number('Icon size', 15, svgSizeRange)}
      height={number('Icon size', 15, svgSizeRange)}
    />
  </Button>
)

WithIcon.decorators = [
  Story => (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol>
            <Story />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ),
]

export const WithTextAndIcon = () => {
  const iconPosition = radios('Icon position', svgPositionOptions, 'left')
  return (
    <Button
      tiny={boolean('Tiny', false)}
      big={boolean('Big', false)}
      huge={boolean('Huge', false)}
      giant={boolean('Giant', false)}
      fluid={boolean('Fluid', false)}
      modifier={select('Modifier', modifierOptions, 'hydrogen')}
      disabled={boolean('Disabled', false)}
      borderRadius={number('Border radius', 0, radiusBorderRange)}
    >
      {iconPosition === 'left' && (
        <HeartIcon
          width={number('Icon size', 15, svgSizeRange)}
          height={number('Icon size', 15, svgSizeRange)}
        />
      )}

      <span>{text('Text', 'MyButton')}</span>

      {iconPosition === 'right' && (
        <HeartIcon
          width={number('Icon size', 15, svgSizeRange)}
          height={number('Icon size', 15, svgSizeRange)}
        />
      )}
    </Button>
  )
}
WithTextAndIcon.decorators = [
  Story => (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol>
            <Story />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ),
]

export const WithBadge = () => (
  <Button
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
    modifier={select('Modifier', modifierOptions, 'helium')}
    disabled={boolean('Disabled', false)}
  >
    <span>{text('Text', 'MyButton')}</span>
    <Badge color={text('Badge color', 'red')} Icon={Cart}>
      {text('Count', '2')}
    </Badge>
  </Button>
)

WithBadge.decorators = [
  Story => (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol>
            <Story />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ),
]
