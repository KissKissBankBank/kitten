import flagFile from 'icons/flags.png'
import React from 'react'
import { DocsPage } from 'storybook/docs-page'
import { DropdownPhoneSelect } from './index'

export default {
  component: DropdownPhoneSelect,
  title: 'Form/Select/DropdownPhoneSelect',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'data/CountryData.js',
            'data/rawCountries.js',
            'data/rawTerritories.js',
            'data/lang/fr.js',
          ]}
          importString="DropdownPhoneSelect"
        />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
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
      control: 'text',
    },
    error: {
      name: 'error',
      control: 'boolean',
    },
    valid: {
      name: 'valid',
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    hideLabel: {
      name: 'hideLabel',
      control: 'boolean',
    },
    labelText: {
      name: 'labelText',
      control: 'text',
    },
    resetOnBackspace: {
      name: 'resetOnBackspace',
      control: 'boolean',
    },
    highlightOptionBox: {
      name: 'highlightOptionBox',
      control: 'boolean',
    },
    placeholder: {
      name: 'placeholder',
      control: 'text',
    },
    phoneProps: {
      name: 'phoneProps',
      control: 'object',
    },
    locale: {
      name: 'locale',
      options: ['fr', 'en', 'nl'],
      control: 'inline-radio',
    },
    flagsUrl: {
      name: 'flagsUrl',
      control: 'text',
    },
    size: {
      name: 'size',
      options: ['tiny', 'normal', 'big', 'huge', 'giant'],
      control: 'select',
    },
    defaultCountry: {
      name: 'defaultCountry',
      control: 'text',
    },
    value: {
      name: 'value',
      control: 'text',
    },
    inputProps: {
      name: 'inputProps',
      control: 'object',
    },
    assumeCountry: {
      name: 'assumeCountry',
      control: 'text',
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

export const WithParser = args => {
  return (
    <div>
      <DropdownPhoneSelect
        {...{ ...args, value: '+33 06 77 13 82 40' }}
        parser={(value, country) => {
          if (
            country?.countryCode === '33' &&
            value.startsWith('0') &&
            value.length > 2
          ) {
            return value.substring(1)
          }
          return value
        }}
      />
      <p>parser delete first zero on french phone number</p>
    </div>
  )
}
