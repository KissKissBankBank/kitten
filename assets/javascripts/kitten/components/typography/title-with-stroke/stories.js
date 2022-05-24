import React from 'react'
import { TitleWithStroke } from './index'
import { COLORS, Marger, Text } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: TitleWithStroke,
  title: 'Typography/TitleWithStroke',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="TitleWithStroke" />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
}

export const Default = args => <TitleWithStroke {...args} />

Default.args = {
  modifier: 'primary',
  italic: false,
  align: 'left',
  cssColor: COLORS.font1,
  tag: 'h1',
  children: 'Lorem ipsum dolor sit amet',
}

Default.argTypes = {
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
  italic: {
    name: 'italic',
    description: 'Adds an italic style.',
    control: 'boolean',
  },
  align: {
    name: 'align',
    description: 'Sets the horizontal alignment.',
    options: ['left', 'center', 'right'],
    control: 'inline-radio',
  },
  cssColor: {
    name: 'cssColor',
    description: 'Sets a color from a CSS color string.',
    control: 'color',
  },
  tag: {
    name: 'tag',
    description: 'Changes the title’s element type.',
    control: 'text',
  },
  children: {
    name: 'children',
    control: 'text',
  },
}

export const ModifierMetrics = () => (
  <>
    <Marger>
      <Text weight="600">Primary</Text>
      <br />
      <Text size="micro">• Desktop version - 64px</Text>
      <br />
      <TitleWithStroke modifier="primary">
        Lorem ipsum dolor sit amet…
      </TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 48px</Text>
        <br />
        <TitleWithStroke modifier="secondary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 36px</Text>
        <br />
        <TitleWithStroke modifier="tertiary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="600">Secondary</Text>
      <br />
      <Text size="micro">• Desktop version - 48px</Text>
      <br />
      <TitleWithStroke modifier="secondary">
        Lorem ipsum dolor sit amet…
      </TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 36px</Text>
        <br />
        <TitleWithStroke modifier="tertiary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 32px</Text>
        <br />
        <TitleWithStroke modifier="quaternary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="600">Tertiary</Text>
      <br />
      <Text size="micro">• Desktop version - 36px</Text>
      <br />
      <TitleWithStroke modifier="tertiary">
        Lorem ipsum dolor sit amet…
      </TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 32px</Text>
        <br />
        <TitleWithStroke modifier="quaternary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 28px</Text>
        <br />
        <TitleWithStroke modifier="quinary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="600">Quaternary</Text>
      <br />
      <Text size="micro">• Desktop version - 32px</Text>
      <br />
      <TitleWithStroke modifier="quaternary">
        Lorem ipsum dolor sit amet…
      </TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 28px</Text>
        <br />
        <TitleWithStroke modifier="quinary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 24px</Text>
        <br />
        <TitleWithStroke modifier="senary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="600">Quinary</Text>
      <br />
      <Text size="micro">• Desktop version - 28px</Text>
      <br />
      <TitleWithStroke modifier="quinary">
        Lorem ipsum dolor sit amet…
      </TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 24px</Text>
        <br />
        <TitleWithStroke modifier="senary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 20px</Text>
        <br />
        <TitleWithStroke modifier="septenary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="600">Senary</Text>
      <br />
      <Text size="micro">• Desktop version - 24px</Text>
      <br />
      <TitleWithStroke modifier="senary">
        Lorem ipsum dolor sit amet…
      </TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 20px</Text>
        <br />
        <TitleWithStroke modifier="septenary">
          Lorem ipsum dolor sit amet…
        </TitleWithStroke>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 18px</Text>
        <br />
        <Text size="large" weight="600">
          Lorem ipsum dolor sit amet…
        </Text>
      </Marger>
    </Marger>

    <Marger top="7">
      <Text weight="600">Septenary</Text>
      <br />
      <Text size="micro">• Desktop version - 20px</Text>
      <br />
      <TitleWithStroke modifier="septenary">
        Lorem ipsum dolor sit amet…
      </TitleWithStroke>
      <Marger top="1">
        <Text size="micro">• Tablet version - 18px</Text>
        <br />
        <Text size="large" weight="600">
          Lorem ipsum dolor sit amet…
        </Text>
      </Marger>
      <Marger top="1">
        <Text size="micro">• Mobile version - 16px</Text>
        <br />
        <Text size="medium" weight="600">
          Lorem ipsum dolor sit amet…
        </Text>
      </Marger>
    </Marger>
  </>
)
