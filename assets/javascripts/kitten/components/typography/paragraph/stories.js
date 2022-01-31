import React from 'react'
import { Paragraph } from './index'
import { Marger, Text } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: Paragraph,
  title: 'Typography/Paragraph',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={['index.js', 'helpers/modifier-styles.js']}
          importString="Paragraph"
        />
      ),
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

export const Default = args => <Paragraph {...args} />

Default.args = {
  modifier: 'primary',
  noMargin: false,
  normalLineHeight: false,
  italic: false,
  tag: 'p',
  children:
    "Paragraph Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book…",
}

Default.argTypes = {
  modifier: {
    name: 'modifier',
    description:
      'Paragraphs have 4 modifiers, they define different sizes depending on the device (`desktop`, `tablet` and `mobile`).',
    options: ['primary', 'secondary', 'tertiary', 'quaternary'],
    control: 'select',
  },
  noMargin: {
    name: 'noMargin',
    description: 'Removes the default margins the element.',
    control: 'boolean',
  },
  normalLineHeight: {
    name: 'normalLineHeight',
    description: 'Defines `line-height` property as `normal` (~1.2).',
    control: 'boolean',
  },
  italic: {
    name: 'italic',
    description: 'Adds an italic style.',
    control: 'boolean',
  },
  tag: {
    name: 'tag',
    description: 'Changes the paragraph’s element type.',
    control: 'text',
  },
  children: {
    name: 'children',
    description: 'Content of the paragraph.',
    control: 'text',
  },
}

export const ModifierMetrics = () => (
  <>
    <Text weight="bold">Primary</Text>
    <br />
    <Text size="micro">• Desktop version - 20px</Text>
    <Paragraph modifier="primary">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book…
    </Paragraph>
    <Text size="micro">• Tablet version - 18px</Text>
    <Paragraph style={{ fontSize: '18px' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book…
    </Paragraph>
    <Text size="micro">• Mobile version - 16px</Text>
    <Paragraph modifier="secondary">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book…
    </Paragraph>

    <Marger top="6">
      <Text weight="bold">Secondary</Text>
      <br />
      <Text size="micro">• Desktop version - 16px</Text>
      <Paragraph modifier="secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book…
      </Paragraph>
      <Text size="micro">• Tablet version - 16px</Text>
      <Paragraph modifier="secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book…
      </Paragraph>
      <Text size="micro">• Mobile version - 14px</Text>
      <Paragraph modifier="tertiary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book…
      </Paragraph>
    </Marger>

    <Marger top="6">
      <Text weight="bold">Tertiary</Text>
      <br />
      <Text size="micro">• Desktop version - 14px</Text>
      <Paragraph modifier="tertiary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book…
      </Paragraph>
      <Text size="micro">• Tablet version - 14px</Text>
      <Paragraph modifier="tertiary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book…
      </Paragraph>
      <Text size="micro">• Mobile version - 12px</Text>
      <Paragraph modifier="quaternary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book…
      </Paragraph>
    </Marger>

    <Marger top="6">
      <Text weight="bold">Quaternary</Text>
      <br />
      <Text size="micro">• Desktop version - 12px</Text>
      <Paragraph modifier="quaternary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book…
      </Paragraph>
      <Text size="micro">• Tablet version - 12px</Text>
      <Paragraph modifier="quaternary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book…
      </Paragraph>
      <Text size="micro">• Mobile version - 12px</Text>
      <Paragraph modifier="quaternary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book…
      </Paragraph>
    </Marger>
  </>
)
