import React from 'react'
import { boolean, text, select } from '@storybook/addon-knobs'
import { TextInputWithUnitForm } from './index'

const versionOptions = {
  Default: 'default',
  Tiny: 'tiny',
}

export const Default = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <TextInputWithUnitForm
      inputId={text('Id', '')}
      inputLabel={text('Label', '')}
      inputUnit={text('Unit', '€')}
      inputIsOnError={boolean('Error?', false)}
      errorMessage={text('Error', 'Error message…')}
      buttonLabel={text('Button', 'To contribute')}
      align={text('Align', 'center')}
      formIsDisabled={boolean('Disabled?', false)}
      version={select('Version', versionOptions, 'default')}
    />
  </div>
)
