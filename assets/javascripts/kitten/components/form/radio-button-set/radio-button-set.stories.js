import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { RadioButtonSet } from './index'
import { createGlobalStyle } from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import { GUTTER } from '../../../constants/grid-config'
import { pxToRem } from '../../../helpers/utils/typography'

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
}

export const Default = () => (
  <div className="story-Container">
    <RadioButtonSet
      id={text('ID', 'story-radio-button-set')}
      label={text('Label', null)}
      items={[
        {
          text: text('Option A', 'Option A'),
          id: 'option-a',
          defaultChecked: true,
        },
        {
          text: text('Option B', 'Option B'),
          id: 'option-b',
        },
        {
          text: text('Option C', 'Option C'),
          id: 'option-c',
        },
      ]}
      error={boolean('Error?', false)}
      disabled={boolean('Disabled', false)}
      variant={select(
        'Variant',
        { andromeda: 'andromeda', orion: 'orion' },
        'andromeda',
      )}
      design={select('design', { disc: 'disc', check: 'check' }, 'disc')}
    />
  </div>
)

export const OrionGrid = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <OrionGlobalStyle />
    <RadioButtonSet
      className="k-Form-RadioButtonSet__orionGrid"
      id={text('ID', 'story-radio-button-set')}
      items={[
        {
          text: text('Option A', '25 €'),
          id: 'option-a',
          defaultChecked: true,
        },
        {
          text: text('Option B', '50 €'),
          id: 'option-b',
        },
        {
          text: text('Option C', '100 €'),
          id: 'option-c',
        },
        {
          text: text('Option D', '200 €'),
          id: 'option-d',
        },
        {
          text: text('Option E', '500 €'),
          id: 'option-e',
        },
        {
          text: text('Option F', '1000 €'),
          id: 'option-f',
        },
      ]}
      error={boolean('Error?', false)}
      disabled={boolean('Disabled', false)}
      variant="orion"
      design={select('design', { disc: 'disc', check: 'check' }, 'disc')}
    >
      <h1 className="k-Title k-Title--quaternary k-u-margin-bottom-triple">
        Choisissez le montant que vous souhaitez offrir
      </h1>
    </RadioButtonSet>
  </div>
)
export const OrionGridWithLabel = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <OrionGlobalStyle />
    <RadioButtonSet
      label="Test de label"
      className="k-Form-RadioButtonSet__orionGrid"
      id={text('ID', 'story-radio-button-set')}
      items={[
        {
          text: text('Option A', '25 €'),
          id: 'option-a',
          defaultChecked: true,
        },
        {
          text: text('Option B', '50 €'),
          id: 'option-b',
        },
        {
          text: text('Option C', '100 €'),
          id: 'option-c',
        },
        {
          text: text('Option D', '200 €'),
          id: 'option-d',
        },
        {
          text: text('Option E', '500 €'),
          id: 'option-e',
        },
        {
          text: text('Option F', '1000 €'),
          id: 'option-f',
        },
      ]}
      error={boolean('Error?', false)}
      disabled={boolean('Disabled', false)}
      variant="orion"
      design={select('design', { disc: 'disc', check: 'check' }, 'disc')}
    />
  </div>
)
