import React from 'react'
import { boolean, text, select } from '@storybook/addon-knobs'
import { TextInputWithIcon } from './index'
import { SearchIcon, CheckedCircleIcon, WarningCircleIcon, Loader, COLORS } from '../../..'

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

export const Default = () => (
  <TextInputWithIcon
    disabled={boolean('Disabled', false)}
    placeholder={text('Placeholder', 'Les props sont transmises')}
    variant={select('Variant', variantOptions, 'andromeda')}
    icon={<SearchIcon aria-label="Search icon" width="15" height="15" />}
    iconPosition={select('iconPosition', ['left', 'right'], 'left')}
  />
)

export const Validation = () => {
  const IconComponent = () => {
    switch(select('State', ['none', 'loading', 'valid', 'error'], 'none')) {
      case 'loading':
        return (<Loader />)
      case 'valid':
        return (<CheckedCircleIcon bgColor={COLORS.valid} color={COLORS.background1} />)
      case 'error':
        return (<WarningCircleIcon bgColor={COLORS.error} color={COLORS.background1} />)
      default:
        return null
    }
  }

  return (
    <TextInputWithIcon
      disabled={boolean('Disabled', false)}
      placeholder={text('Placeholder', 'Les props sont transmises')}
      variant={select('Variant', variantOptions, 'andromeda')}
      icon={<IconComponent />}
      iconPosition="right"
      valid={select('State', ['none', 'loading', 'valid', 'error'], 'none') === 'valid'}
      error={select('State', ['none', 'loading', 'valid', 'error'], 'none') === 'error'}
      accessibilityLabel={select('State', ['none', 'loading', 'valid', 'error'], 'none') === 'loading' && "Loading"}
    />
  )
}
