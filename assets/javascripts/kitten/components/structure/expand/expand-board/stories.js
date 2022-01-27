import React from 'react'
import styled from 'styled-components'
import { ExpandBoard } from './index'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

const Styles = styled.div`
  .ExpandBoardStory__content {
    padding: 1.5em;
    border-left: var(--border);
    border-right: var(--border);
    border-bottom: var(--border);
  }
`

export default {
  component: ExpandBoard,
  title: 'Molecules/Expand/ExpandBoard',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ExpandBoard" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Styles>{story()}</Styles>
      </div>
    ),
  ],
  argTypes: {
    children: {
      name: 'children',
      description:
        'Children are provided in this story by `ExpandBoard.Button` and `ExpandBoard.Content`',
      control: null,
    },
    animationMaxHeight: {
      name: 'animationMaxHeight',
      control: 'text',
    },
    animationShrinkingDuration: {
      name: 'animationShrinkingDuration',
      control: 'number',
    },
    ariaId: {
      name: 'ariaId',
      control: 'text',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    onClick: {
      name: 'onClick',
      control: null,
    },
    style: {
      name: 'style',
      control: 'object',
    },
    withAnimation: {
      name: 'withAnimation',
      control: 'boolean',
    },
    buttonExpandChildren: {
      name: 'ExpandBoard.Button: expandChildren',
      description: 'Expanded button text',
      control: 'text',
    },
    buttonBorderRadius: {
      name: 'ExpandBoard.Button: borderRadius',
      control: { type: 'range', min: 0, max: 25, step: 1 },
    },
    buttonBig: {
      name: 'ExpandBoard.Button: big',
      control: 'boolean',
    },
    buttonChildren: {
      name: 'ExpandBoard.Button: children',
      control: 'text',
    },
    contentChildren: {
      name: 'ExpandBoard.Content: children',
      control: 'text',
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
    contentChildren:
      'KissKissBankBank et 1 483 037 KissBankers vous aident à réaliser vos projets créatifs, associatifs et entrepreneuriaux. Participez à la naissance de projets inspirants.',
  },
}

export const Default = ({
  contentChildren,
  buttonChildren,
  buttonExpandChildren,
  buttonBorderRadius,
  buttonBig,
  ...args
}) => (
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
