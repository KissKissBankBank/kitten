import React from 'react'
import { text, number, boolean } from '@storybook/addon-knobs'
import {
  FieldInputExample,
  FieldPasswordExample,
  FieldRadioButtonSetExample,
  FieldSelectExample,
  FieldAutocompleteExample,
} from './field.examples'

export default {
  title: 'Form/Field',
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
}

export const WithInput = () => {
  return (
    <FieldInputExample
      id={text('ID', 'input')}
      tiny={boolean('Tiny', false)}
      label={text('Label', 'Label')}
      tooltip={text('Tooltip', null)}
      tooltipId={text('Tooltip ID', 'tooltip')}
      placeholder={text('Placeholder', 'Placeholder…')}
      error={boolean('Error?', false)}
      errorMessage={text('Error', 'Error message…')}
      limit={number('Limit', undefined)}
      unit={text('Unit', undefined)}
    />
  )
}

export const WithPassword = () => {
  return (
    <FieldPasswordExample
      id={text('ID', 'input')}
      tiny={boolean('Tiny', false)}
      label={text('Label', 'Label')}
      tooltip={text('Tooltip', null)}
      tooltipId={text('Tooltip ID', 'tooltip')}
      placeholder={text('Placeholder', 'Placeholder…')}
      error={boolean('Error?', false)}
      errorMessage={text('Error', 'Error message…')}
    />
  )
}

export const WithRadioButtons = () => {
  return (
    <FieldRadioButtonSetExample
      id={text('ID', 'option-a')}
      tiny={boolean('Tiny', false)}
      label={text('Label', 'Label')}
      tooltip={text('Tooltip', null)}
      tooltipId={text('Tooltip ID', 'tooltip')}
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
      errorMessage={text('Error', 'Error message…')}
    />
  )
}

export const WithSelect = () => {
  return (
    <FieldSelectExample
      id={text('ID', 'select')}
      tiny={boolean('Tiny', false)}
      label={text('Label', 'Label')}
      tooltip={text('Tooltip', null)}
      tooltipId={text('Tooltip ID', 'tooltip')}
      placeholder={text('Placeholder', 'Select…')}
      options={[
        { value: 'a', label: text('Option A', 'Option A') },
        { value: 'b', label: text('Option B', 'Option B') },
        { value: 'c', label: text('Option C', 'Option C') },
      ]}
      error={boolean('Error?', false)}
      errorMessage={text('Error', 'Error message…')}
    />
  )
}

export const WithAutocomplete = () => {
  return (
    <FieldAutocompleteExample
      id={text('ID', 'select')}
      tiny={boolean('Tiny', false)}
      label={text('Label', 'Label')}
      tooltip={text('Tooltip', null)}
      tooltipId={text('Tooltip ID', 'tooltip')}
      placeholder={text('Placeholder', 'Select…')}
      items={[
        'Abyssin',
        'Anatoli',
        'Angora turc',
        'Asian',
        'Chartreux',
        'Cymric',
        'Mandarin',
        'Oriental shorthair',
        'Persan',
        'Sibérien',
      ]}
      error={boolean('Error?', false)}
      errorMessage={text('Error', 'Error message…')}
    />
  )
}
