import React, { useState } from 'react'
import { DropdownSelect } from './index'
import { Button, ArrowIcon, Text } from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

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

const argTypes = {
  id: {
    name: 'id',
    control: 'text',
  },
  labelText: {
    name: 'labelText',
    control: 'text',
  },
  combobox: {
    name: 'combobox',
    control: 'boolean',
  },
  hideLabel: {
    name: 'hideLabel',
    control: 'boolean',
  },
  options: {
    name: 'options',
    control: 'object',
  },
  placeholder: {
    name: 'placeholder',
    control: 'text',
  },
  labelPropsGetter: {
    name: 'labelPropsGetter',
  },
  size: {
    name: 'size',
    options: ['micro', 'small', 'medium', 'large', 'huge', 'giant'],
    control: 'select',
  },
  a11yStatusError: {
    name: 'a11yStatusError',
    control: 'text',
  },
  a11yStatusValid: {
    name: 'a11yStatusValid',
    control: 'text',
  },
  a11ySelectionMessageDisplayer: {
    name: 'a11ySelectionMessageDisplayer',
  },
  onChange: {
    name: 'onChange',
  },
  onBlur: {
    name: 'onBlur',
  },
  onInputChange: {
    name: 'onInputChange',
  },
  onMenuClose: {
    name: 'onMenuClose',
  },
  onMenuOpen: {
    name: 'onMenuOpen',
  },
  openOnLoad: {
    name: 'openOnLoad',
    control: 'boolean',
  },
  uniqLabelOnSearch: {
    name: 'uniqLabelOnSearch',
    control: 'boolean',
  },
  menuZIndex: {
    name: 'menuZIndex',
    control: 'number',
  },
  comboboxButtonLabelText: {
    name: 'comboboxButtonLabelText',
    control: 'text',
  },
  noResultText: {
    name: 'noResultText',
    control: 'text',
  },
  modifier: {
    control: 'radio',
    options: ['hydrogen', 'nitrogen', 'boron'],
  },
  direction: {
    control: 'inline-radio',
    options: ['up', 'down'],
  },
  arrowPosition: {
    control: 'inline-radio',
    options: ['left', 'right'],
  },
}
const args = {
  id: 'dropdown-select',
  error: false,
  valid: false,
  disabled: false,
  hideLabel: false,
  combobox: false,
  labelText: 'label',
  options: options,
  size: 'medium',
  comboboxButtonLabelText: 'label',
  noResultText: 'No results',
  menuZIndex: 1000,
  modifier: 'hydrogen',
  direction: 'down',
  arrowPosition: 'left',
}

export default {
  component: DropdownSelect,
  title: 'Form/Select/DropdownSelect',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={['index.js', 'combobox.js', 'styles.js']}
          importString="DropdownSelect"
        />
      ),
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  args,
  argTypes,
}

export const Default = args => {
  const [labelProps, setLabelProps] = useState(null)

  return (
    <div>
      <DropdownSelect
        {...args}
        labelPropsGetter={passedLabelProps => {
          passedLabelProps && setLabelProps(passedLabelProps())
        }}
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

export const WithDuplicateValue = args => {
  return (
    <DropdownSelect
      {...args}
      combobox={true}
      options={[
        { value: 'france', label: 'France' },
        { value: 'france', label: 'France' },
        { value: 'irlande', label: 'Irlande' },
      ]}
    />
  )
}

export const WithComponentsForLabel = args => {
  return (
    <DropdownSelect
      {...args}
      options={[
        {
          value: 'France',
          searchableLabel: 'France',
          label: (
            <>
              <ArrowIcon direction="right" />
              <Text weight="600">Un titre de la France</Text>
              Une explication du label
            </>
          ),
        },
        {
          value: 'Espagne',
          searchableLabel: 'Espagne',
          label: (
            <>
              <ArrowIcon direction="right" />
              <Text weight="600">Un titre de l'Espagne</Text>
              Une explication du label
            </>
          ),
        },
      ]}
    />
  )
}

export const ControlledInput = args => {
  const [value, setValue] = useState('felt')

  const getRandomOption = () => {
    const enabledOptions = options.map(option => {
      if (!option.disabled) return option
    })

    const randomOption =
      enabledOptions[Math.floor(Math.random() * enabledOptions.length)]

    return randomOption.value
  }

  return (
    <>
      <DropdownSelect
        {...args}
        hideLabel
        id="ControlledInput"
        value={value}
        onChange={e => {
          action('onChange')(e)
          if (!e) return

          setValue(e.value)
        }}
        onBlur={action('onBlur')}
      />
      <Button onClick={() => setValue(getRandomOption())}>Change Value</Button>
      <Button onClick={() => setValue('')}>Reset Value</Button>
    </>
  )
}

ControlledInput.args = { ...args, controlled: true }
