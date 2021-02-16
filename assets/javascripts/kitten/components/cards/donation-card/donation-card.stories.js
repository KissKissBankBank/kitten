import React from 'react'
import { text, boolean, object, select } from '@storybook/addon-knobs'
import { DonationCard } from './index'

const versionOptions = {
  Default: 'default',
  Tiny: 'tiny',
}

export const Default = () => (
  <DonationCard
    title={text(
      'Title Amount',
      'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    )}
    isDisabled={boolean('Disabled', false)}
    version={select('Version', versionOptions, 'default')}
    donationForm={object('donationForm', {
      inputUnit: '€',
      inputLabel: 'Enter your amount',
      inputPlaceholder: 'Enter your amount',
      inputIsOnError: false,
      errorMessage: 'lorem ipsum dolor sit amet',
      buttonLabel: 'Choose',
    })}
  />
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid">
      <Story />
    </div>
  ),
]
