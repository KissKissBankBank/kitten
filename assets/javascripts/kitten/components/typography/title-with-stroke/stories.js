import React from 'react'
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs'
import { TitleWithStroke } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../typography/text'

const modifierOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Quaternary: 'quaternary',
  Quinary: 'quinary',
  Senary: 'senary',
  Septenary: 'septenary',
}

export default {
  component: TitleWithStroke,
  title: 'Typography/TitleWithStroke',
  decorators: [withKnobs],
  parameters: {
    component: TitleWithStroke,
    componentSubtitle: 'List of TitleWithStroke',
  },
}

export const DefaultProps = () => (
  <Container>
    <Marger top="4">
      <TitleWithStroke
        modifier={select("Modifier", modifierOptions, 'primary')}
        italic={boolean("Italic", false)}
        margin={boolean("Margin", false)}
      >
        {text('Title', "Lorem ipsum dolor sit amet")}
      </TitleWithStroke>
    </Marger>
  </Container>
)

export const Modifier = () => (
  <>
    <Marger>
      <Text weight="bold">Primary</Text>
      <br/>
      <Text size="micro">• Desktop version - 64px</Text>
      <br/>
      <TitleWithStroke modifier="primary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 48px</Text>
        <br/>
        <TitleWithStroke modifier="secondary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 36px</Text>
        <br/>
        <TitleWithStroke modifier="tertiary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="bold">Secondary</Text>
      <br/>
      <Text size="micro">• Desktop version - 48px</Text>
      <br/>
      <TitleWithStroke modifier="secondary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 36px</Text>
        <br/>
        <TitleWithStroke modifier="tertiary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 32px</Text>
        <br/>
        <TitleWithStroke modifier="quaternary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="bold">Tertiary</Text>
      <br/>
      <Text size="micro">• Desktop version - 36px</Text>
      <br/>
      <TitleWithStroke modifier="tertiary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 32px</Text>
        <br/>
        <TitleWithStroke modifier="quaternary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 28px</Text>
        <br/>
        <TitleWithStroke modifier="quinary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="bold">Quaternary</Text>
      <br/>
      <Text size="micro">• Desktop version - 32px</Text>
      <br/>
      <TitleWithStroke modifier="quaternary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 28px</Text>
        <br/>
        <TitleWithStroke modifier="quinary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 24px</Text>
        <br/>
        <TitleWithStroke modifier="senary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
    </Marger>

     <Marger top="7">
      <Text weight="bold">Quinary</Text>
      <br/>
      <Text size="micro">• Desktop version - 28px</Text>
      <br/>
      <TitleWithStroke modifier="quinary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 24px</Text>
        <br/>
        <TitleWithStroke modifier="senary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 20px</Text>
        <br/>
        <TitleWithStroke modifier="septenary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
    </Marger>

     <Marger top="7">
      <Text weight="bold">Senary</Text>
      <br/>
      <Text size="micro">• Desktop version - 24px</Text>
      <br/>
      <TitleWithStroke modifier="senary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 20px</Text>
        <br/>
        <TitleWithStroke modifier="septenary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 18px</Text>
        <br/>
        <Text size="big" weight="bold">Lorem ipsum dolor sit amet…</Text>
      </Marger>
    </Marger>

     <Marger top="7">
      <Text weight="bold">Septenary</Text>
      <br/>
      <Text size="micro">• Desktop version - 20px</Text>
      <br/>
      <TitleWithStroke modifier="septenary">Lorem ipsum dolor sit amet…</TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 18px</Text>
        <br/>
        <Text size="big" weight="bold">Lorem ipsum dolor sit amet…</Text>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 16px</Text>
        <br/>
        <Text size="default" weight="bold">Lorem ipsum dolor sit amet…</Text>
      </Marger>
    </Marger>
  </>
)

export const AlignCenter = () => (
  <TitleWithStroke modifier="primary" align="center">Lorem ipsum dolor sit amet</TitleWithStroke>
)

export const AlignRight = () => (
  <TitleWithStroke modifier="primary" align="right">Lorem ipsum dolor sit amet</TitleWithStroke>
)

export const Italic = () => (
  <TitleWithStroke modifier="primary" italic>Lorem ipsum dolor sit amet…</TitleWithStroke>
)
