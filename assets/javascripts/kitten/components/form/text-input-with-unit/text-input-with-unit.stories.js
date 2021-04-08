import React from 'react'
import { boolean, text, number, select } from '@storybook/addon-knobs'
import { TextInputWithUnit } from './index'

const sizeOptions = {
  Tiny: 'tiny',
  Regular: 'regular',
  Big: 'big',
  Huge: 'huge',
  Giant: 'giant',
}

export const Default = () => (
  <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-auto">
    <TextInputWithUnit
      valid={boolean('Valid', false)}
      disabled={boolean('Disabled', false)}
      size={select('Size', sizeOptions, 'regular')}
      center={boolean('Center', false)}
      error={boolean('Error', false)}
      unit={text('Unit', '€')}
      unitWord={text('UnitWord', null)}
      digits={number('Digits', null)}
      variant={select('Variant', ['andromeda', 'orion'], 'andromeda')}
    />
  </div>
)
