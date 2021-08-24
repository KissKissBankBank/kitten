import React from 'react'
import { Row } from './index'
import { Text } from '../../..'
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
      control: { type: 'boolean' },
    },
    light: {
      name: 'light',
      control: { type: 'boolean' },
    },
    dark: {
      name: 'dark',
      control: { type: 'boolean' },
    },
    lightTopBorder: {
      name: 'lightTopBorder',
      control: { type: 'boolean' },
    },
    lightBottomBorder: {
      name: 'lightBottomBorder',
      control: { type: 'boolean' },
    },
    padded: {
      name: 'padded',
      control: { type: 'boolean' },
    },
  },
}

export const Default = args => (
  <Row {...args}>
    <Text weight="light">FooBar</Text>
  </Row>
)
