import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { RadioButtonSet } from './index'
import { pxToRem, GUTTER, ScreenConfig, Title } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

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
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="RadioButtonSet" />
      ),
    },
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
      control: 'text',
    },
    label: {
      name: 'label',
      control: 'text',
    },
    items: {
      name: 'items',
      control: 'object',
    },
    error: {
      name: 'error',
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    size: {
      name: 'size',
      options: ['small', 'medium', 'large'],
      control: 'inline-radio',
    },
    design: {
      name: 'design',
      options: ['disc', 'check'],
      control: 'inline-radio',
    },
    weight: {
      name: 'weight',
      options: ['400', '500', '600'],
      control: 'inline-radio',
    },
    paragraphStyle: {
      name: 'paragraphStyle',
      control: 'boolean',
    },
  },
}

const defaultArgs = {
  id: 'story-radio-button-set',
  error: false,
  disabled: false,
  design: 'disc',
  size: 'medium',
  weight: '500',
  paragraphStyle: false,
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
  label: 'Test de label',
}
