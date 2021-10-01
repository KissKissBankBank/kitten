import React from 'react'
import {
  FieldInputExample,
  FieldPasswordExample,
  FieldRadioButtonSetExample,
  FieldAutocompleteExample,
} from './field.examples'

export default {
  title: 'Form/Field',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'components/autocomplete.js',
            'components/checkbox.js',
            'components/error.js',
            'components/input.js',
            'components/label.js',
            'components/password.js',
            'components/radio-button-set.js',
          ]}
          importString="Field"
        />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        <div>{story()}</div>
      </div>
    ),
  ],
}

export const WithInput = args => {
  return <FieldInputExample {...args} />
}
WithInput.args = {
  id: 'input',
  size: 'regular',
  label: 'Label',
  tooltip: null,
  tooltipProps: { actionLabel: 'Learn more' },
  tooltipId: 'tooltip',
  placeholder: 'Placeholder…',
  error: false,
  errorMessage: 'Error message…',
  limit: undefined,
  unit: undefined,
  noMargin: false,
  variant: 'orion',
}
WithInput.argTypes = {
  id: { control: 'text' },
  size: {
    control: 'select',
    options: ['tiny', 'regular', 'big', 'huge', 'giant'],
  },
  label: { control: 'text' },
  tooltip: { control: 'text' },
  tooltipProps: { control: 'object' },
  tooltipId: { control: 'text' },
  placeholder: { control: 'text' },
  error: { control: 'boolean' },
  errorMessage: { control: 'text' },
  limit: { control: 'number' },
  unit: { control: 'text' },
  noMargin: { control: 'boolean' },
  variant: { control: 'select', options: ['andromeda', 'orion'] },
}

export const WithPassword = args => {
  return <FieldPasswordExample {...args} />
}
WithPassword.args = {
  id: 'input',
  size: null,
  label: 'Label',
  tooltip: null,
  tooltipProps: { actionLabel: 'Learn more' },
  tooltipId: 'tooltip',
  placeholder: 'Placeholder…',
  error: false,
  errorMessage: 'Error message…',
  variant: 'orion',
}
WithPassword.argTypes = {
  id: { control: 'text' },
  size: { control: 'boolean' },
  label: { control: 'text' },
  tooltip: { control: 'text' },
  tooltipProps: { control: 'object' },
  tooltipId: { control: 'text' },
  placeholder: { control: 'text' },
  error: { control: 'boolean' },
  errorMessage: { control: 'text' },
  variant: { control: 'select', options: ['andromeda', 'orion'] },
}

export const WithRadioButtons = args => {
  return <FieldRadioButtonSetExample {...args} />
}
WithRadioButtons.args = {
  id: 'option-a',
  size: null,
  label: 'Label',
  tooltip: null,
  tooltipProps: { actionLabel: 'Learn more' },
  tooltipId: 'tooltip',
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
  error: false,
  errorMessage: 'Error message…',
  variant: 'orion',
}
WithRadioButtons.argTypes = {
  id: { control: 'text' },
  size: { control: 'boolean' },
  label: { control: 'text' },
  tooltip: { control: 'text' },
  tooltipProps: { control: 'object' },
  tooltipId: { control: 'text' },
  items: { control: 'object' },
  error: { control: 'boolean' },
  errorMessage: { control: 'text' },
  variant: { control: 'select', options: ['andromeda', 'orion'] },
}

export const WithAutocomplete = args => {
  return <FieldAutocompleteExample {...args} />
}
WithAutocomplete.args = {
  id: 'select',
  size: null,
  label: 'Label',
  tooltip: null,
  tooltipProps: { actionLabel: 'Learn more' },
  tooltipId: 'tooltip',
  placeholder: 'Select…',
  items: [
    'Abyssin',
    'Anatolien',
    'Angora turc',
    'Asian',
    'Chartreux',
    'Cymérien',
    'Mandarin',
    'Oriental shorthair',
    'Persan',
    'Sibérien',
  ],
  error: false,
  errorMessage: 'Error message…',
  variant: 'orion',
}
WithAutocomplete.argTypes = {
  id: { control: 'text' },
  size: { control: 'boolean' },
  label: { control: 'text' },
  tooltip: { control: 'text' },
  tooltipProps: { control: 'object' },
  tooltipId: { control: 'text' },
  placeholder: { control: 'text' },
  items: { control: 'object' },
  error: { control: 'boolean' },
  errorMessage: { control: 'text' },
  variant: { control: 'select', options: ['andromeda', 'orion'] },
}
