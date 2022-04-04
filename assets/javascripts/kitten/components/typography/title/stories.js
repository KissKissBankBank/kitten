import React from 'react'
import { Title } from './index'
import { Marger, Text } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

const argTypes = {
  tag: {
    name: 'tag',
    description: 'Changes the title’s element type.',
    control: 'text',
  },
  modifier: {
    name: 'modifier',
    description:
      'Title has seven modifiers, they define different sizes depending on the device (desktop, tablet and mobile)',
    options: [
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
      'quinary',
      'senary',
      'septenary',
    ],
    control: 'select',
  },
  noMargin: {
    name: 'noMargin',
    description: 'Removes the default margins the element.',
    control: 'boolean',
  },
  cssColor: {
    name: 'cssColor',
    description: 'Sets a color from a CSS color string.',
    control: 'color',
  },
  italic: {
    name: 'italic',
    description: 'Adds an underline style.',
    control: 'boolean',
  },
  children: {
    name: 'children',
    control: 'text',
  },
}

const args = {
  tag: 'h1',
  modifier: 'primary',
  noMargin: false,
  italic: false,
  cssColor: null,
  children: 'Lorem ipsum dolor sit amet',
}

export const Default = props => <Title {...props} />

Default.args = args
Default.argTypes = argTypes

export const ModifierMetrics = () => (
  <>
    <Marger>
      <Text weight="bold">Primary</Text>
      <br />
      <Text size="micro">• Desktop version - 64px</Text>
      <br />
      <Title modifier="primary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 48px</Text>
        <br />
        <Title modifier="secondary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 36px</Text>
        <br />
        <Title modifier="tertiary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="bold">Secondary</Text>
      <br />
      <Text size="micro">• Desktop version - 48px</Text>
      <br />
      <Title modifier="secondary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 36px</Text>
        <br />
        <Title modifier="tertiary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 32px</Text>
        <br />
        <Title modifier="quaternary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>
    <Marger top="7">
      <Text weight="bold">Tertiary</Text>
      <br />
      <Text size="micro">• Desktop version - 36px</Text>
      <br />
      <Title modifier="tertiary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 32px</Text>
        <br />
        <Title modifier="quaternary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 28px</Text>
        <br />
        <Title modifier="quinary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>
    <Marger top="7">
      <Text weight="bold">Quaternary</Text>
      <br />
      <Text size="micro">• Desktop version - 32px</Text>
      <br />
      <Title modifier="quaternary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 28px</Text>
        <br />
        <Title modifier="quinary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 24px</Text>
        <br />
        <Title modifier="senary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="bold">Quinary</Text>
      <br />
      <Text size="micro">• Desktop version - 28px</Text>
      <br />
      <Title modifier="quinary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 24px</Text>
        <br />
        <Title modifier="senary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 20px</Text>
        <br />
        <Title modifier="septenary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="bold">Senary</Text>
      <br />
      <Text size="micro">• Desktop version - 24px</Text>
      <br />
      <Title modifier="senary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 20px</Text>
        <br />
        <Title modifier="septenary">Lorem ipsum dolor sit amet…</Title>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 18px</Text>
        <br />
        <Text size="large" weight="bold">
          Lorem ipsum dolor sit amet…
        </Text>
      </Marger>
    </Marger>
    <Marger top="7">
      <Text weight="bold">Septenary</Text>
      <br />
      <Text size="micro">• Desktop version - 20px</Text>
      <br />
      <Title modifier="septenary">Lorem ipsum dolor sit amet…</Title>
      <Marger top="1">
        <Text size="micro">• Tablet version - 18px</Text>
        <br />
        <Text size="large" weight="bold">
          Lorem ipsum dolor sit amet…
        </Text>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 16px</Text>
        <br />
        <Text size="medium" weight="bold">
          Lorem ipsum dolor sit amet…
        </Text>
      </Marger>
    </Marger>
  </>
)

export default {
  component: Title,
  title: 'Typography/Title',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Title" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container k-u-flex k-u-flex-direction-column">
        {story()}
      </div>
    ),
  ],
}
