import React from 'react'
import {
  FieldInputExample,
  FieldPasswordExample,
  FieldRadioButtonSetExample,
  FieldRadioSetExample,
  FieldAutocompleteExample,
} from './examples'
import { DocsPage } from 'storybook/docs-page'

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
            'components/radio-set.js',
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
  size: 'medium',
  label: 'Label',
  tooltip: null,
  tooltipProps: { actionLabel: 'Learn more' },
  tooltipId: 'tooltip',
  placeholder: 'Placeholder…',
  error: false,
  errorMessage: 'Error message…',
  help: false,
  helpMessage: 'Help message…',
  limit: undefined,
  unit: undefined,
  noMargin: false,
}
WithInput.argTypes = {
  id: { control: 'text' },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large', 'huge', 'giant'],
  },
  label: { control: 'text' },
  tooltip: { control: 'text' },
  tooltipProps: { control: 'object' },
  tooltipId: { control: 'text' },
  placeholder: { control: 'text' },
  error: { control: 'boolean' },
  errorMessage: { control: 'text' },
  help: { control: 'boolean' },
  helpMessage: { control: 'text' },
  limit: { control: 'number' },
  unit: { control: 'text' },
  noMargin: { control: 'boolean' },
}

export const WithPassword = args => {
  return <FieldPasswordExample {...args} />
}
WithPassword.args = {
  id: 'input',
  size: 'medium',
  label: 'Label',
  tooltip: null,
  tooltipProps: { actionLabel: 'Learn more' },
  tooltipId: 'tooltip',
  placeholder: 'Placeholder…',
  error: false,
  errorMessage: 'Error message…',
}
WithPassword.argTypes = {
  id: { control: 'text' },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large', 'huge', 'giant'],
  },
  label: { control: 'text' },
  tooltip: { control: 'text' },
  tooltipProps: { control: 'object' },
  tooltipId: { control: 'text' },
  placeholder: { control: 'text' },
  error: { control: 'boolean' },
  errorMessage: { control: 'text' },
}

export const WithRadioButtons = args => {
  return <FieldRadioButtonSetExample {...args} />
}
WithRadioButtons.args = {
  id: 'option-a',
  size: 'medium',
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
}
WithRadioButtons.argTypes = {
  id: { control: 'text' },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large'],
  },
  label: { control: 'text' },
  tooltip: { control: 'text' },
  tooltipProps: { control: 'object' },
  tooltipId: { control: 'text' },
  items: { control: 'object' },
  error: { control: 'boolean' },
  errorMessage: { control: 'text' },
}

export const WithRadio = args => {
  return <FieldRadioSetExample {...args} />
}
WithRadio.args = {
  id: 'option-a',
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
}
WithRadio.argTypes = {
  id: { control: 'text' },
  label: { control: 'text' },
  tooltip: { control: 'text' },
  tooltipProps: { control: 'object' },
  tooltipId: { control: 'text' },
  items: { control: 'object' },
  error: { control: 'boolean' },
  errorMessage: { control: 'text' },
}

export const WithAutocomplete = args => {
  return <FieldAutocompleteExample {...args} />
}
WithAutocomplete.args = {
  id: 'select',
  size: 'medium',
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
}
WithAutocomplete.argTypes = {
  id: { control: 'text' },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large', 'huge', 'giant'],
  },
  label: { control: 'text' },
  tooltip: { control: 'text' },
  tooltipProps: { control: 'object' },
  tooltipId: { control: 'text' },
  placeholder: { control: 'text' },
  items: { control: 'object' },
  error: { control: 'boolean' },
  errorMessage: { control: 'text' },
}
