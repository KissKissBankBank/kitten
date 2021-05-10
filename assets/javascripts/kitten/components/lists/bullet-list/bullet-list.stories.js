import React from 'react'
import { select } from '@storybook/addon-knobs'
import { BulletList } from './index'
import { Container } from '../../structure/container'

const sizeOptions = {
  Tiny: 'tiny',
  Regular: 'regular',
  Large: 'large',
  Big: 'big',
  Huge: 'huge',
}

export const Default = () => (
  <Container>
    <BulletList
      size={select('Size', sizeOptions, 'regular')}
      items={[
        { key: '1', item: 'Dis Manibus' },
        { key: '2', item: 'Calpurnia Felicla' },
        { key: '3', item: 'Germulio coniugi' },
      ]}
    />
  </Container>
)
