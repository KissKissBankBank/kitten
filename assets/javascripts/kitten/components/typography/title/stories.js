import React from 'react'
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs'
import { Title } from './index'
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
  component: Title,
  title: 'Typography/Title',
  decorators: [withKnobs],

  parameters: {
    component: Title,
    componentSubtitle: 'List of Title',
  }
}

export const defaultProps = () => (
  <Container>
    <Marger top="4">
      <Title
        modifier={select("Modifier", modifierOptions, 'primary')}
        italic={boolean("Italic", false)}
        margin={boolean("Margin", false)}
      >
        {text('Title', "Lorem ipsum dolor sit amet")}
      </Title>
    </Marger>
  </Container>
)

export const modifier = () => (
  <>
    <Marger>
      <Text weight="bold">Primary</Text>
      <br/>
      <Text size="micro">• Desktop version - 64px</Text>
      <br/>
      <Title modifier="primary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 48px</Text>
        <br/>
        <Title modifier="secondary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 36px</Text>
        <br/>
        <Title modifier="tertiary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="bold">Secondary</Text>
      <br/>
      <Text size="micro">• Desktop version - 48px</Text>
      <br/>
      <Title modifier="secondary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 36px</Text>
        <br/>
        <Title modifier="tertiary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 32px</Text>
        <br/>
        <Title modifier="quaternary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="bold">Tertiary</Text>
      <br/>
      <Text size="micro">• Desktop version - 36px</Text>
      <br/>
      <Title modifier="tertiary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 32px</Text>
        <br/>
        <Title modifier="quaternary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 28px</Text>
        <br/>
        <Title modifier="quinary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="bold">Quaternary</Text>
      <br/>
      <Text size="micro">• Desktop version - 32px</Text>
      <br/>
      <Title modifier="quaternary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 28px</Text>
        <br/>
        <Title modifier="quinary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 24px</Text>
        <br/>
        <Title modifier="senary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>

     <Marger top="7">
      <Text weight="bold">Quinary</Text>
      <br/>
      <Text size="micro">• Desktop version - 28px</Text>
      <br/>
      <Title modifier="quinary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 24px</Text>
        <br/>
        <Title modifier="senary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 20px</Text>
        <br/>
        <Title modifier="septenary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>

     <Marger top="7">
      <Text weight="bold">Senary</Text>
      <br/>
      <Text size="micro">• Desktop version - 24px</Text>
      <br/>
      <Title modifier="senary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 20px</Text>
        <br/>
        <Title modifier="septenary">Lorem ipsum dolor sit amet…</Title>
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
      <Title modifier="septenary">Lorem ipsum dolor sit amet…</Title>
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

export const withoutMargin = () => (
  <Title modifier="primary" margin={false}>Lorem ipsum dolor sit amet…</Title>
)

export const italic = () => (
  <Title modifier="primary" italic>Lorem ipsum dolor sit amet…</Title>
)
