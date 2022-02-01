import React from 'react'
import { Row } from './index'
import { Text } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: Row,
  title: 'Layout/Row',
  parameters: {
    docs: { page: () => <DocsPage filepath={__filename} importString="Row" /> },
  },
  args: {
    centered: false,
    light: false,
    dark: false,
    lightTopBorder: false,
    lightBottomBorder: false,
    padded: false,
  },
  argTypes: {
    centered: {
      name: 'centered',
      control: 'boolean',
    },
    light: {
      name: 'light',
      control: 'boolean',
    },
    dark: {
      name: 'dark',
      control: 'boolean',
    },
    lightTopBorder: {
      name: 'lightTopBorder',
      control: 'boolean',
    },
    lightBottomBorder: {
      name: 'lightBottomBorder',
      control: 'boolean',
    },
    padded: {
      name: 'padded',
      control: 'boolean',
    },
  },
}

export const Default = args => (
  <Row {...args}>
    <Text weight="light">FooBar</Text>
  </Row>
)
