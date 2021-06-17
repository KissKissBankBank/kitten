import React from 'react'
import { text, boolean, number, radios, select } from '@storybook/addon-knobs'
import { Button, buttonModifiers } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { HeartIcon } from '../../icons/heart-icon'
import { PayPalIcon } from '../../icons/paypal-icon'
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

const sizeOptions = {
  Nano: 'nano',
  Micro: 'micro',
  Tiny: 'tiny',
  Regular: 'regular',
  Big: 'big',
  Huge: 'huge',
  Giant: 'giant',
}

const fitOptions = [
  'icon',
  'min-width',
  'content',
  'fluid',
]

export const WithText = () => (
  <Button
    size={select('Size', sizeOptions, 'regular')}
    fluid={boolean('Fluid', false)}
    modifier={select('Modifier', buttonModifiers, 'hydrogen')}
    variant={select('Variant', variantOptions, 'andromeda')}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Border radius', 0, radiusBorderRange)}
    fit={select('fit', fitOptions, 'min-width')}
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
    size={select('Size', sizeOptions, 'regular')}
    rounded={boolean('Rounded', false)}
    modifier={select('Modifier', buttonModifiers, 'hydrogen')}
    variant={select('Variant', variantOptions, 'andromeda')}
    fluid={boolean('Fluid', false)}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Border radius', 0, radiusBorderRange)}
    fit={select('fit', fitOptions, 'min-width')}
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

export const WithColorIcon = () => (
  <Button
    size={select('Size', sizeOptions, 'regular')}
    rounded={boolean('Rounded', false)}
    modifier={select('Modifier', buttonModifiers, 'hydrogen')}
    variant={select('Variant', variantOptions, 'andromeda')}
    fluid={boolean('Fluid', false)}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Border radius', 0, radiusBorderRange)}
    fit={select('fit', fitOptions, 'min-width')}
  >
    <PayPalIcon />
  </Button>
)

WithColorIcon.decorators = [
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
      size={select('Size', sizeOptions, 'regular')}
      fluid={boolean('Fluid', false)}
      modifier={select('Modifier', buttonModifiers, 'hydrogen')}
      variant={select('Variant', variantOptions, 'andromeda')}
      disabled={boolean('Disabled', false)}
      borderRadius={number('Border radius', 0, radiusBorderRange)}
      fit={select('fit', fitOptions, 'min-width')}
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
    size={select('Size', sizeOptions, 'regular')}
    modifier={select('Modifier', buttonModifiers, 'helium')}
    variant={select('Variant', variantOptions, 'andromeda')}
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
