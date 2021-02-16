import React from 'react'
import { text, boolean, number, radios, select } from '@storybook/addon-knobs'
import { Button } from './button'
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
    variant={select('Variant', variantOptions, 'andromeda')}
    disabled={boolean('Disabled', false)}
    borderRadius={number('Border radius', 0, radiusBorderRange)}
  >
    {text('Text', 'MyButton')}
  </Button>
)

export const WithIcon = () => (
  <Button
    micro={boolean('Micro', false)}
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
    modifier={select('Modifier', modifierOptions, 'hydrogen')}
    variant={select('Variant', variantOptions, 'andromeda')}
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
      variant={select('Variant', variantOptions, 'andromeda')}
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

export const WithBadge = () => (
  <Button
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
    modifier={select('Modifier', modifierOptions, 'helium')}
    variant={select('Variant', variantOptions, 'andromeda')}
    disabled={boolean('Disabled', false)}
  >
    <span>{text('Text', 'MyButton')}</span>
    <Badge color={text('Badge color', 'red')} Icon={Cart}>
      {text('Count', '2')}
    </Badge>
  </Button>
)

export default {
  component: Button,
  title: 'Buttons/Button',
  decorators: [
    Story => (
      <div className="story-Container">
        <Story />
      </div>
    ),
  ],
}
