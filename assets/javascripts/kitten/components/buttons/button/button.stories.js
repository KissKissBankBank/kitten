import React from 'react'
import { text, boolean, number, radios, select } from '@storybook/addon-knobs'
import { Button } from './index'
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
  Social_facebook: 'social_facebook',
  Social_twitter: 'social_twitter',
  Social_linkedin: 'social_linkedin',
  Social_instagram: 'social_instagram',
  Social_youtube: 'social_youtube',
  Social_pinterest: 'social_pinterest',
}

const sizeOptions = {
  Nano: 'nano',
  Micro: 'micro',
  Tiny: 'tiny',
  Big: 'big',
  Huge: 'huge',
  Giant: 'giant',
  Normal: 'normal',
}

export const WithText = () => (
  <Button
    size={select('Size', sizeOptions, 'normal')}
    fluid={boolean('Fluid', false)}
    modifier={select('Modifier', modifierOptions, 'hydrogen')}
    variant={select('Variant', variantOptions, 'andromeda')}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Border radius', 0, radiusBorderRange)}
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
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
    size={select('Size', sizeOptions, 'normal')}
    rounded={boolean('Rounded', false)}
    modifier={select('Modifier', modifierOptions, 'hydrogen')}
    variant={select('Variant', variantOptions, 'andromeda')}
    fluid={boolean('Fluid', false)}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Border radius', 0, radiusBorderRange)}
    icon
    nano={boolean('Nano', false)}
    micro={boolean('Micro', false)}
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
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
      size={select('Size', sizeOptions, 'normal')}
      fluid={boolean('Fluid', false)}
      modifier={select('Modifier', modifierOptions, 'hydrogen')}
      variant={select('Variant', variantOptions, 'andromeda')}
      disabled={boolean('Disabled', false)}
      borderRadius={number('Border radius', 0, radiusBorderRange)}
      tiny={boolean('Tiny', false)}
      big={boolean('Big', false)}
      huge={boolean('Huge', false)}
      giant={boolean('Giant', false)}
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
    size={select('Size', sizeOptions, 'normal')}
    modifier={select('Modifier', modifierOptions, 'helium')}
    variant={select('Variant', variantOptions, 'andromeda')}
    disabled={boolean('Disabled', false)}
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
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
