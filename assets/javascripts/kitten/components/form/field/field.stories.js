import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import {
  FieldInputExample,
  FieldRadioButtonSetExample,
  FieldSelect,
} from './field.examples'

storiesOf('Form/Field', module)
  .addDecorator(withKnobs)
  .add('with input', () => {
    return (
      <FieldInputExample
        id={text('ID', 'input')}
        label={text('Label', 'Label')}
        tooltip={text('Tooltip', null)}
        tooltipId={text('Tooltip ID', 'tooltip')}
        placeholder={text('Placeholder', 'Placeholder…')}
        error={boolean('Error?', false)}
        errorMessage={text('Error', 'Error message…')}
      />
    )
  })
  .add('with radio buttons', () => {
    return (
      <FieldRadioButtonSetExample
        id={text('ID', 'option-a')}
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
  })
  .add('with select', () => {
    return (
      <FieldSelect
        id={text('ID', 'select')}
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
  })
