import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { Text } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const colorOptions = {
  Font1: 'font1',
  Font2: 'font2',
  Primary1: 'primary1',
  Background1: 'background1',
  Error: 'error',
  Valid: 'valid',
}

const sizeOptions = {
  Huge: 'huge',
  Big: 'big',
  Default: 'default',
  Tiny: 'tiny',
  Micro: 'micro'
}

export default {
  component: Text,
  title: 'Typography/Text',
  decorators: [withKnobs],
  parameters: {
    component: Text,
    componentSubtitle: 'List of Text',
  },
}

export const DefaultProp = () => (
  <Container>
    <Marger top="4">
      <Text
        tag="a"
        color={select('Color', colorOptions, 'font1')}
        lineHeight="normal"
        decoration= "none"
        size={select('Size', sizeOptions, 'big')}
        weight="regular"
      >
        {text('Text', 'Lorem ipsum dolor sit amet')}
      </Text>
    </Marger>
  </Container>
)

export const Size = () => (
  <>
    <Marger>
      <Text size="huge">Lorem ipsum dolor sit amet…</Text>
      <br />
      <Text size="big">Lorem ipsum dolor sit amet…</Text>
      <br />
      <Text size="default">Lorem ipsum dolor sit amet…</Text>
      <br />
      <Text size="tiny">Lorem ipsum dolor sit amet…</Text>
      <br />
      <Text size="micro">Lorem ipsum dolor sit amet…</Text>
    </Marger>
  </>

)