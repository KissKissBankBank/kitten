import React from 'react'
import styled from 'styled-components'
import { text, number, boolean } from '@storybook/addon-knobs'
import { ExpandBoard } from './index'
import { Grid, GridCol, COLORS } from '../../../..'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

const Styles = styled.div`
  .ExpandBoardStory__content {
    padding: 1.5em;
    border-left: ${COLORS.line1} 0.125rem solid;
    border-right: ${COLORS.line1} 0.125rem solid;
    border-bottom: ${COLORS.line1} 0.125rem solid;
  }
`

const radiusBottomBorderRange = {
  range: true,
  min: 0,
  max: 25,
  step: 1,
}

export default {
  component: ExpandBoard,
  title: 'Molecules/Expand/ExpandBoard',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ExpandBoard" />,
    },
  },
  decorators: [story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Styles>{story()}</Styles>
    </div>
  )],
  argTypes: {
    children: {
      name: 'children',
      description: 'Children are provided in this story by `ExpandBoard.Button` and `ExpandBoard.Content`',
      control: null
    },
    animationMaxHeight: {
      name: 'animationMaxHeight',
      control: { type: 'text' },
    },
    animationShrinkingDuration: {
      name: 'animationShrinkingDuration',
      control: { type: 'number' },
    },
    ariaId: {
      name: 'ariaId',
      control: { type: 'text' },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    onClick: {
      name: 'onClick',
      control: null,
    },
    style: {
      name: 'style',
      control: { type: 'object' },
    },
    withAnimation: {
      name: 'withAnimation',
      control: { type: 'boolean' },
    },
    buttonExpandChildren: {
      name: 'ExpandBoard.Button: expandChildren',
      description: 'Expanded button text',
      control: { type: 'text' },
    },
    buttonBorderRadius: {
      name: 'ExpandBoard.Button: borderRadius',
      control: { type: 'range', min: 0, max: 25, step: 1 },
    },
    buttonBig: {
      name: 'ExpandBoard.Button: big',
      control: { type: 'boolean' },
    },
    buttonChildren: {
      name: 'ExpandBoard.Button: children',
      control: { type: 'text' },
    },
    contentChildren: {
      name: 'ExpandBoard.Content: children',
      control: { type: 'text' },
    },
  },
  args: {
    animationMaxHeight: '100vh',
    animationShrinkingDuration: 0.5,
    ariaId: 'ExpandBoard',
    disabled: false,
    onClick: action('onClick'),
    style: {},
    withAnimation: true,
    buttonExpandChildren: 'Lancez votre projet',
    buttonBorderRadius: 4,
    buttonBig: false,
    buttonChildren: 'KissKissBankBank & Co.',
    contentChildren: 'KissKissBankBank et 1 483 037 KissBankers vous aident à réaliser vos projets créatifs, associatifs et entrepreneuriaux. Participez à la naissance de projets inspirants.',
  }
}

export const Default = ({contentChildren, buttonChildren, buttonExpandChildren, buttonBorderRadius, buttonBig, ...args}) => (
  <ExpandBoard {...args}>
    <ExpandBoard.Button
      expandChildren={buttonExpandChildren}
      borderRadius={buttonBorderRadius}
      big={buttonBig}
    >
      {buttonChildren}
    </ExpandBoard.Button>
    <ExpandBoard.Content>
      <div className="ExpandBoardStory__content k-u-weight-light">
        {contentChildren}
      </div>
    </ExpandBoard.Content>
  </ExpandBoard>
)
