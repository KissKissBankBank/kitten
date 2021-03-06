import React from 'react'
import { boolean, number } from '@storybook/addon-knobs'
import { List } from './index'
import { Text } from '../../typography/text'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'

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
  title: 'List/List',
  component: List,
}

export const SimpleList = () => {
  return (
    <List>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </List>
  )
}

export const ListWithButtonItem = () => {
  return (
    <List bottomBorderRadiusValue={number('bottomBorderRadiusValue', 0)}>
      <List.ButtonItem hasArrow={boolean('hasArrow', true)} withTopBorder>
        <ExampleWrapper>
          <ExampleText tag="p" weight="regular" color="font1" size="tiny">
            Taille XS
          </ExampleText>
          <Text tag="small" color="font1" size="micro">
            Disponibilité: 10/30
          </Text>
        </ExampleWrapper>
      </List.ButtonItem>
      <List.ButtonItem
        hasArrow={boolean('hasArrow', true)}
        disabled={boolean('disabled', false)}
        active={boolean('active', false)}
      >
        <ExampleWrapper>
          <ExampleText tag="p" weight="regular" size="tiny">
            Taille M
          </ExampleText>
          <Text tag="small" size="micro">
            Disponibilité: 10/30
          </Text>
        </ExampleWrapper>
      </List.ButtonItem>
      <List.ButtonItem hasArrow={boolean('hasArrow', true)}>
        <ExampleWrapper>
          <ExampleText tag="p" weight="regular" size="tiny">
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
