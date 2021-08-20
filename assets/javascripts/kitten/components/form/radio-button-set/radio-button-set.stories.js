import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { RadioButtonSet } from './index'

const OrionGlobalStyle = createGlobalStyle`
  .k-Form-RadioButtonSet.k-Form-RadioButtonSet__orionGrid .k-Form-RadioButtonSet__radioContainer {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${pxToRem(GUTTER)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .k-Form-RadioButtonSet__radioButton {
      margin: 0;
    }
  }
`

export default {
  component: RadioButtonSet,
  title: 'Form/RadioButtonSet',
  parameters: {
    component: RadioButtonSet,
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: defaultArgs,
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
    },
    label: {
      name: 'label',
      control: { type: 'text' },
    },
    items: {
      name: 'items',
      control: { type: 'object' },
    },
    error: {
      name: 'error',
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    size: {
      name: 'size',
      options: ['regular', 'big'],
      control: { type: 'inline-radio' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
    design: {
      name: 'design',
      options: ['disc', 'check'],
      control: { type: 'inline-radio' },
    },
  },
}

const defaultArgs = {
  id: 'story-radio-button-set',
  error: false,
  disabled: false,
  variant: 'andromeda',
  design: 'disc',
  size: 'regular',
}

export const Default = args => <RadioButtonSet {...args} />

Default.args = {
  ...defaultArgs,
  items: [
    {
      text: 'Option A',
      id: 'option-a',
      defaultChecked: true,
    },
    {
      text: 'Option B',
      id: 'option-b',
    },
    {
      text: 'Option C',
      id: 'option-c',
    },
  ],
}

export const OrionGrid = args => (
  <RadioButtonSet className="k-Form-RadioButtonSet__orionGrid" {...args}>
    <OrionGlobalStyle />
    <Title modifier="quaternary" className="k-u-margin-bottom-triple">
      Choisissez le montant que vous souhaitez offrir
    </Title>
  </RadioButtonSet>
)

OrionGrid.args = {
  ...defaultArgs,
  items: [
    {
      text: '25 €',
      id: 'option-a',
      defaultChecked: true,
    },
    {
      text: '50 €',
      id: 'option-b',
    },
    {
      text: '100 €',
      id: 'option-c',
    },
    {
      text: '200 €',
      id: 'option-d',
    },
    {
      text: '500 €',
      id: 'option-e',
    },
    {
      text: '1000 €',
      id: 'option-f',
    },
  ],
  variant: 'orion',
}

export const OrionGridWithLabel = args => (
  <RadioButtonSet className="k-Form-RadioButtonSet__orionGrid" {...args}>
    <OrionGlobalStyle />
  </RadioButtonSet>
)

OrionGridWithLabel.args = {
  ...defaultArgs,
  items: [
    {
      text: '25 €',
      id: 'option-a',
      defaultChecked: true,
    },
    {
      text: '50 €',
      id: 'option-b',
    },
    {
      text: '100 €',
      id: 'option-c',
    },
    {
      text: '200 €',
      id: 'option-d',
    },
    {
      text: '500 €',
      id: 'option-e',
    },
    {
      text: '1000 €',
      id: 'option-f',
    },
  ],
  variant: 'orion',
  label: 'Test de label',
}
