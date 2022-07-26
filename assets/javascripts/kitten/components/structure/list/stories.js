import React from 'react'
import { List } from './index'
import styled from 'styled-components'
import { pxToRem, Text, LargeArrowIconNext } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

const ExampleWrapper = styled.div`
  margin: ${pxToRem(16)} 0;
  padding: 0;
`

const ExampleText = styled(Text)`
  margin: 0;
  padding: 0;
  line-height: 1.2;
`

export default {
  title: 'Structure/List',
  component: List,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="List" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  args: {
    bottomBorderRadiusValue: 0,
    gap: 0,
    hasArrow: false,
    disabled: false,
    active: false,
    withBottomBorderRadius: false,
  },
  argTypes: {
    bottomBorderRadiusValue: {
      control: 'number',
    },
    gap: {
      control: 'number',
    },
    hasArrow: {
      name: 'List.ButtonItem: hasArrow',
      control: 'boolean',
    },
    disabled: {
      name: 'List.ButtonItem: disabled',
      control: 'boolean',
    },
    active: {
      name: 'List.ButtonItem: active',
      control: 'boolean',
    },
    withBottomBorderRadius: {
      description: 'Deprecated, use `bottomBorderRadiusValue`.',
      control: null,
    },
  },
}

export const SimpleList = ({ gap }) => {
  return (
    <List gap={gap}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </List>
  )
}

export const ListWithCustomMarker = ({ gap }) => {
  return (
    <List gap={gap} markerElement={<LargeArrowIconNext width="10" />}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </List>
  )
}

export const ListWithButtonItem = ({ hasArrow, disabled, active, ...args }) => {
  return (
    <List {...args}>
      <List.ButtonItem hasArrow={hasArrow} withTopBorder>
        <ExampleWrapper>
          <ExampleText tag="p" weight="500" color="font1" size="small">
            Taille XS
          </ExampleText>
          <Text tag="small" color="font1" size="micro">
            Disponibilité: 10/30
          </Text>
        </ExampleWrapper>
      </List.ButtonItem>
      <List.ButtonItem hasArrow={hasArrow} disabled={disabled} active={active}>
        <ExampleWrapper>
          <ExampleText tag="p" weight="500" size="small">
            Taille M
          </ExampleText>
          <Text tag="small" size="micro">
            Disponibilité: 10/30
          </Text>
        </ExampleWrapper>
      </List.ButtonItem>
      <List.ButtonItem hasArrow={hasArrow}>
        <ExampleWrapper>
          <ExampleText tag="p" weight="500" size="small">
            Taille XXL
          </ExampleText>
          <Text tag="small" size="micro">
            Disponibilité: 10/30
          </Text>
        </ExampleWrapper>
      </List.ButtonItem>
    </List>
  )
}
