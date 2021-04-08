import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
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
      <div className="story-Container story-Grid">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  return (
    <div>
      <DropdownPhoneSelect
        id={text('id', 'dropdown-select')}
        error={boolean('error', false)}
        valid={boolean('valid', false)}
        disabled={boolean('disabled', false)}
        hideLabel={boolean('hide label?', false)}
        labelText={text('LabelText', 'label')}
        resetOnBackspace
        highlightOptionBox
        placeholder={text('placeholder', 'Téléphone')}
        phoneProps={{
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
        }}
        value={text('value', '+33 1 23 45 67 89')}
        locale={select('locale', ['fr', 'en', 'nl'], 'fr')}
        flagsUrl={flagFile}
      />
      <p>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam
        porta sem malesuada magna mollis euismod.
      </p>
    </div>
  )
}

export const WithoutValues = () => {
  return (
    <DropdownPhoneSelect
      id={text('id', 'dropdown-select')}
      error={boolean('error', false)}
      valid={boolean('valid', false)}
      disabled={boolean('disabled', false)}
      hideLabel={boolean('hide label?', false)}
      labelText={text('LabelText', 'label')}
      resetOnBackspace
      highlightOptionBox
      placeholder={text('placeholder', 'Téléphone')}
      phoneProps={{
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
      }}
      locale={select('locale', ['fr', 'en', 'nl'], 'fr')}
      flagsUrl={flagFile}
    />
  )
}
