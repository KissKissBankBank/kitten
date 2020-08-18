import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { TextInputWithIcon } from './index'
import { SearchIcon } from '../../../components/icons/search-icon'

export const Default = () => (
  <TextInputWithIcon
    disabled={boolean('Disabled', false)}
    placeholder={text('Placeholder', 'Les props sont transmises')}
    icon={
      <SearchIcon
        aria-label="Search icon"
        aria-hidden="true"
        width="15"
        height="15"
      />
    }
  />
)
