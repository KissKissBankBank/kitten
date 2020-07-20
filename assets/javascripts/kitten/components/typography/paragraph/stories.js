import React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { Paragraph } from './index'
import { Text } from '../../../components/typography/text'
import { Marger } from '../../layout/marger'

const modifierOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Quaternary: 'quaternary',
}

export default {
  component: Paragraph,
  title: 'Typography/Paragraph',
  decorators: [withKnobs],
  parameters: {
    component: Paragraph,
    componentSubtitle: 'List of Paragraph',
  },
}

export const DefaultProp = () => (
  <Paragraph
    tag="p"
    modifier={select('Modifier', modifierOptions, 'primary')}
    margin={boolean('Margin', true)}
    normalLineHeight={boolean('Normal line height', false)}
    italic={boolean('Italic', false)}
  >
    {text ('Paragraph',
      "Lorem Ipsum is simply dummy text of the printing and", 
      "typesetting industry. Lorem Ipsum has been the industry's",
      "standard dummy text ever since the 1500s, when an unknown",
      "printer took a galley of type and scrambled it to make a type",
      "specimen book.",
    )}
  </Paragraph>
)

export const Modifier = () => (
  <>
    <Text weight="bold">Primary</Text>
    <br />
    <Text size="micro">• Desktop version - 20px</Text>
    <Paragraph modifier="primary">
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type 
      specimen book…
    </Paragraph>
    <Text size="micro">• Tablet version - 18px</Text>
    <Paragraph style={{ fontSize: "18px"}}>
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type 
      specimen book…
    </Paragraph>
    <Text size="micro">• Mobile version - 16px</Text>
    <Paragraph modifier="secondary">
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type 
      specimen book…
    </Paragraph>

    <Marger top="6">
      <Text weight="bold">Secondary</Text>
      <br />
      <Text size="micro">• Desktop version - 16px</Text>
      <Paragraph modifier="secondary">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book…
      </Paragraph>
      <Text size="micro">• Tablet version - 16px</Text>
      <Paragraph modifier="secondary">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book…
      </Paragraph>
      <Text size="micro">• Mobile version - 14px</Text>
      <Paragraph modifier="tertiary">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book…
      </Paragraph>
    </Marger>

    <Marger top="6">
      <Text weight="bold">Tertiary</Text>
      <br />
      <Text size="micro">• Desktop version - 14px</Text>
      <Paragraph modifier="tertiary">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book…
      </Paragraph>
      <Text size="micro">• Tablet version - 14px</Text>
      <Paragraph modifier="tertiary">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book…
      </Paragraph>
      <Text size="micro">• Mobile version - 12px</Text>
      <Paragraph modifier="quaternary">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book…
      </Paragraph>
    </Marger>

    <Marger top="6">
      <Text weight="bold">Quaternary</Text>
      <br />
      <Text size="micro">• Desktop version - 12px</Text>
      <Paragraph modifier="quaternary">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book…
      </Paragraph>
      <Text size="micro">• Tablet version - 12px</Text>
      <Paragraph modifier="quaternary">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book…
      </Paragraph>
      <Text size="micro">• Mobile version - 12px</Text>
      <Paragraph modifier="quaternary">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book…
      </Paragraph>
    </Marger>
  </>
)

export const Italic = () => (
  <Paragraph italic>
    Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type 
    specimen book…
  </Paragraph>
)

export const NormalLineHeight = () => (
  <Paragraph normalLineHeight>
    Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type 
    specimen book…
  </Paragraph>
)
