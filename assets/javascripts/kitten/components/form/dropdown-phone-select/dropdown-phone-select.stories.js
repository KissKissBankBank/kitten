import React from 'react'
import { DropdownPhoneSelect } from './index'
import flagFile from 'icons/flags.png'

export default {
  component: DropdownPhoneSelect,
  title: 'Form/DropdownPhoneSelect',
  parameters: {
    component: DropdownPhoneSelect,
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'dropdown-select',
    error: false,
    valid: false,
    disabled: false,
    hideLabel: false,
    labelText: 'label',
    resetOnBackspace: true,
    highlightOptionBox: true,
    placeholder: 'Telephone',
    phoneProps: {
      preferredCountries: [
        'fr',
        'be',
        'lu',
        're',
        'gp',
        'mq',
        'pf',
        'nc',
        'gf',
        'yt',
      ],
    },
    locale: 'fr',
    flagsUrl: flagFile,
    size: 'normal',
    defaultCountry: '',
    value: '',
    inputProps: {},
    assumeCountry: '',
  },
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
    },
    error: {
      name: 'error',
      control: { type: 'boolean' },
    },
    valid: {
      name: 'valid',
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    hideLabel: {
      name: 'hideLabel',
      control: { type: 'boolean' },
    },
    labelText: {
      name: 'labelText',
      control: { type: 'text' },
    },
    resetOnBackspace: {
      name: 'resetOnBackspace',
      control: { type: 'boolean' },
    },
    highlightOptionBox: {
      name: 'highlightOptionBox',
      control: { type: 'boolean' },
    },
    placeholder: {
      name: 'placeholder',
      control: { type: 'text' },
    },
    phoneProps: {
      name: 'phoneProps',
      control: { type: 'object' },
    },
    locale: {
      name: 'locale',
      options: ['fr', 'en', 'nl'],
      control: { type: 'inline-radio' },
    },
    flagsUrl: {
      name: 'flagsUrl',
      control: { type: 'text' },
    },
    size: {
      name: 'size',
      options: ['tiny', 'normal', 'big', 'huge', 'giant'],
      control: { type: 'select' },
    },
    defaultCountry: {
      name: 'defaultCountry',
      control: { type: 'text' },
    },
    value: {
      name: 'value',
      control: { type: 'text' },
    },
    inputProps: {
      name: 'inputProps',
      control: { type: 'object' },
    },
    assumeCountry: {
      name: 'assumeCountry',
      control: { type: 'text' },
    },
  },
}

export const Default = args => {
  return (
    <div>
      <DropdownPhoneSelect {...{ ...args, value: '+33 1 23 45 67 89' }} />
      <p>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam
        porta sem malesuada magna mollis euismod.
      </p>
    </div>
  )
}

export const WithoutValues = args => {
  return <DropdownPhoneSelect {...args} />
}
