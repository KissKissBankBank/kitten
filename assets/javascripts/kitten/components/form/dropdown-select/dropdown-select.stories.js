import React, { useState } from 'react'
import { text, boolean, select, number } from '@storybook/addon-knobs'
import { DropdownSelect } from './index'
import { ArrowIcon } from '../../icons/arrow-icon'
import { Text } from '../../typography/text'

export default {
  component: DropdownSelect,
  title: 'Form/DropdownSelect',
  parameters: {
    component: DropdownSelect,
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
}

const options = [
  {
    value: 'bianchi',
    label: 'Bianchi',
    children: [
      { value: 'bmc', label: 'BMC' },
      { value: 'cannondale', label: 'Cannondale' },
    ],
  },
  { value: 'canyon', label: 'Canyon' },
  { value: 'cervelo', label: 'Cervelo' },
  { value: 'diamondback', label: 'Diamondback' },
  { value: 'eddy merckx', label: 'Eddy Merckx', disabled: true },
  { value: 'felt', label: 'Felt' },
  { value: 'focus', label: 'Focus' },
  {
    value: 'fuji',
    label:
      'Fuji Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod.',
  },
]

export const Default = () => {
  const [labelProps, setLabelProps] = useState(null)

  return (
    <div>
      <DropdownSelect
        id={text('id', 'dropdown-select')}
        error={boolean('error', false)}
        valid={boolean('valid', false)}
        disabled={boolean('disabled', false)}
        hideLabel={boolean('hide label?', false)}
        combobox={boolean('combobox?', false)}
        labelText={text('LabelText', 'label')}
        options={options}
        labelPropsGetter={passedLabelProps => {
          passedLabelProps && setLabelProps(passedLabelProps())
        }}
        size={select(
          'size',
          ['tiny', 'normal', 'big', 'huge', 'giant'],
          'normal',
        )}
        variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
        defaultSelectedValue="focus"
        comboboxButtonLabelText={text('Buton aria-label', 'label')}
        noResultText={text('No results text', 'No results')}
        menuZIndex={number('menuZIndex', 1000)}
      />
      <p>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam
        porta sem malesuada magna mollis euismod.
      </p>
      <p>labelPropsGetter props:</p>
      <ul>
        {labelProps &&
          Object.keys(labelProps).map(prop => (
            <li key={prop}>
              {prop}: {labelProps[prop]}
            </li>
          ))}
      </ul>
    </div>
  )
}

export const WithDuplicateValue = () => {
  return (
    <DropdownSelect
      id={text('id', 'dropdown-select')}
      error={boolean('error', false)}
      valid={boolean('valid', false)}
      disabled={boolean('disabled', false)}
      hideLabel={boolean('hide label?', false)}
      combobox={true}
      labelText={text('LabelText', 'label')}
      options={[
        { value: 'france', label: 'France' },
        { value: 'france', label: 'France' },
        { value: 'irlande', label: 'Irlande' },
      ]}
      size={select(
        'size',
        ['tiny', 'normal', 'big', 'huge', 'giant'],
        'normal',
      )}
      variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
      defaultSelectedValue="focus"
      comboboxButtonLabelText={text('Buton aria-label', 'label')}
      noResultText={text('No results text', 'No results')}
      uniqLabelOnSearch={boolean('uniqLabelOnSearch', false)}
      menuZIndex={number('menuZIndex', 1000)}
    />
  )
}

export const WithComponentsForLabel = () => {
  return (
    <DropdownSelect
      id={text('id', 'dropdown-select')}
      error={boolean('error', false)}
      valid={boolean('valid', false)}
      disabled={boolean('disabled', false)}
      hideLabel={boolean('hide label?', false)}
      combobox={true}
      labelText={text('LabelText', 'label')}
      options={[
        {
          value: 'France',
          searchableLabel: 'France',
          label: (
            <>
              <ArrowIcon direction="left" />
              <Text weight="bold">Un titre de la France</Text>
              Une explication du label
            </>
          ),
        },
        {
          value: 'Espagne',
          searchableLabel: 'Espagne',
          label: (
            <>
              <ArrowIcon direction="left" />
              <Text weight="bold">Un titre de l'Espagne</Text>
              Une explication du label
            </>
          ),
        },
      ]}
      size={select(
        'size',
        ['tiny', 'normal', 'big', 'huge', 'giant'],
        'normal',
      )}
      variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
      defaultSelectedValue="focus"
      comboboxButtonLabelText={text('Buton aria-label', 'label')}
      noResultText={text('No results text', 'No results')}
      uniqLabelOnSearch={boolean('uniqLabelOnSearch', false)}
      menuZIndex={number('menuZIndex', 1000)}
    />
  )
}
