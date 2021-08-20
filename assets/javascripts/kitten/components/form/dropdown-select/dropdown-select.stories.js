import React, { useState } from 'react'
import { DropdownSelect } from './index'
import { Button } from '../../../index'
import { ArrowIcon } from '../../graphics/icons/arrow-icon'
import { Text } from '../../atoms/typography/text'

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

export default {
  component: DropdownSelect,
  title: 'Form/DropdownSelect',
  parameters: {
    component: DropdownSelect,
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
    },
    labelText: {
      name: 'labelText',
      control: { type: 'text' },
    },
    combobox: {
      name: 'combobox',
      control: { type: 'boolean' },
    },
    hideLabel: {
      name: 'hideLabel',
      control: { type: 'boolean' },
    },
    options: {
      name: 'options',
      control: { type: 'object' },
    },
    placeholder: {
      name: 'placeholder',
      control: { type: 'text' },
    },
    labelPropsGetter: {
      name: 'labelPropsGetter',
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
    size: {
      name: 'size',
      options: ['tiny', 'normal', 'big', 'huge', 'giant'],
      control: { type: 'select' },
    },
    a11yStatusError: {
      name: 'a11yStatusError',
      control: { type: 'text' },
    },
    a11yStatusValid: {
      name: 'a11yStatusValid',
      control: { type: 'text' },
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
      control: { type: 'boolean' },
    },
    uniqLabelOnSearch: {
      name: 'uniqLabelOnSearch',
      control: { type: 'boolean' },
    },
    menuZIndex: {
      name: 'menuZIndex',
      control: { type: 'number' },
    },
    comboboxButtonLabelText: {
      name: 'comboboxButtonLabelText',
      control: { type: 'text' },
    },
    noResultText: {
      name: 'noResultText',
      control: { type: 'text' },
    },
  },
  args: {
    id: 'dropdown-select',
    error: false,
    valid: false,
    disabled: false,
    hideLabel: false,
    combobox: false,
    labelText: 'label',
    options: options,
    size: 'normal',
    variant: 'andromeda',
    comboboxButtonLabelText: 'label',
    noResultText: 'No results',
    menuZIndex: 1000,
  },
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
        defaultSelectedValue="focus"
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
              <ArrowIcon direction="right" />
              <Text weight="bold">Un titre de l'Espagne</Text>
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
        combobox
        hideLabel
        value={value}
        onChange={e => {
          console.warn('onChange', e)
          if (!e) return

          setValue(e.value)
        }}
        onBlur={e => console.warn('onBlur', e)}
      />
      <Button onClick={() => setValue(getRandomOption())}>Change Value</Button>
    </>
  )
}
