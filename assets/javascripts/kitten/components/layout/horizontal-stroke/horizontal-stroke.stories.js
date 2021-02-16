import React from 'react'
import { number, select, object } from '@storybook/addon-knobs'
import { HorizontalStroke } from './index'

const sizeOptions = {
  Tiny: 'tiny',
  Default: 'default',
  Big: 'big',
  Huge: 'huge',
}

const modifierOptions = {
  null: null,
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  quaternary: 'quaternary',
  quinary: 'quinary',
  senary: 'senary',
  septenary: 'septenary',
}

export const Default = () => (
  <div className="story-Container story-Grid">
    <HorizontalStroke
      size={select('Size', sizeOptions, 'default')}
      modifier={select('Modifier', modifierOptions)}
      customSize={{
        width: number('Width', null),
        height: number('Height', null),
      }}
      style={object('Style object', { backgroundColor: '#333' })}
    />
  </div>
)
