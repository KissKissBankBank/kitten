import React from 'react'
import { Text } from './index'
import { Marger } from '../../layout/marger'
import { text, select, color } from '@storybook/addon-knobs'
import COLORS from '../../../constants/colors-config'

export default {
  component: Text,
  title: 'Typography/Text',
  parameters: {
    component: Text,
    componentSubtitle: 'List of Text',
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
}

const colorOptions = {
  font1: 'font1',
  font2: 'font2',
  primary1: 'primary1',
  background1: 'background1',
  error: 'error',
  valid: 'valid',
}

const decorationOptions = { underline: 'underline', none: 'none' }

const lineHeightOptions = { normal: 'normal', '1': '1', '1.3': '1.3' }

const sizeOptions = {
  huge: 'huge',
  big: 'big',
  default: 'default',
  tiny: 'tiny',
  micro: 'micro',
  nano: 'nano',
}

const fontStyleOptions = { normal: 'normal', italic: 'italic' }

const transformOptions = { uppercase: 'uppercase', null: null }

const weightOptions = { light: 'light', regular: 'regular', bold: 'bold' }

const settingsOptions = { null: null, tnum: 'tnum' }

export const DefaultProp = () => (
  <Text
    color={select('Color', colorOptions, 'font1')}
    cssColor={color('cssColor', COLORS.font1)}
    decoration={select('Decoration', decorationOptions, 'none')}
    lineHeight={select('LineHeight', lineHeightOptions, 'normal')}
    size={select('Size', sizeOptions, 'default')}
    fontStyle={select('FontStyle', fontStyleOptions, 'normal')}
    transform={select('Transform', transformOptions, null)}
    weight={select('Weight', weightOptions, 'regular')}
    setting={select('Setting: tnum', settingsOptions, null)}
  >
    {text('Text', 'Lorem ipsum dolor sit amet…')}
  </Text>
)

export const Size = () => (
  <div>
    <Text size="micro">• size="huge"</Text>
    <br />
    <Text size="huge">Lorem ipsum dolor sit amet…</Text>
    <Marger top="2">
      <Text size="micro">• size="big"</Text>
      <br />
      <Text size="big">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• size="default"</Text>
      <br />
      <Text size="default">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• size="tiny"</Text>
      <br />
      <Text size="tiny">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• size="micro"</Text>
      <br />
      <Text size="micro">Lorem ipsum dolor sit amet…</Text>
    </Marger>
  </div>
)

export const Color = () => (
  <div>
    <Text size="micro">• color="font1"</Text>
    <br />
    <Text color="font1">Lorem ipsum dolor sit amet…</Text>
    <Marger top="2">
      <Text size="micro">• color="font2"</Text>
      <br />
      <Text color="font2">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• color="primary1"</Text>
      <br />
      <Text color="primary1">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• color="background1"</Text>
      <br />
      <Text style={{ backgroundColor: '#222' }} color="background1">
        Lorem ipsum dolor sit amet…
      </Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• color="error"</Text>
      <br />
      <Text color="error">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• color="valid"</Text>
      <br />
      <Text color="valid">Lorem ipsum dolor sit amet…</Text>
    </Marger>
  </div>
)

export const FontStyle = () => (
  <div>
    <Text size="micro">• fontStyle="normal"</Text>
    <br />
    <Text fontStyle="normal">Lorem ipsum dolor sit amet…</Text>
    <Marger top="2">
      <Text size="micro">• fontStyle="italic"</Text>
      <br />
      <Text fontStyle="italic">Lorem ipsum dolor sit amet…</Text>
    </Marger>
  </div>
)

export const Weight = () => (
  <div>
    <Text size="micro">• weight="light" - font-weight: 400, Maax Regular</Text>
    <br />
    <Text weight="light">Lorem ipsum dolor sit amet…</Text>
    <Marger top="2">
      <Text size="micro">
        • weight="regular" - font-weight: 500, Maax Medium
      </Text>
      <br />
      <Text weight="regular">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• weight="bold" - font-weight: 600, Maax Bold</Text>
      <br />
      <Text weight="bold">Lorem ipsum dolor sit amet…</Text>
    </Marger>
  </div>
)

export const Decoration = () => (
  <div>
    <Text size="micro">• decoration="underline"</Text>
    <br />
    <Text decoration="underline">Lorem ipsum dolor sit amet…</Text>
  </div>
)

export const Transform = () => (
  <div>
    <Text size="micro">• transform="uppercase"</Text>
    <br />
    <Text transform="uppercase">Lorem ipsum dolor sit amet…</Text>
  </div>
)
