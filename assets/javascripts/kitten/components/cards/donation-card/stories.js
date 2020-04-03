import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  boolean,
  object,
  select,
} from '@storybook/addon-knobs'
import { DonationCard } from './index'
import { Grid, GridCol } from '../../grid/grid'

const versionOptions = {
  Default: 'default',
  Tiny: 'tiny',
}

const info = {
  text: `
    #DonationCard
    &nbsp;

    ## Import
    ~~~js
    import { DonationCard } from '@kisskissbankbank/kitten/src/components/cards/donation-card'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <DonationCard />
    ~~~

    #### Title
    ~~~js
    <DonationCard
      title="…"
      titleTag="…"
    />
    ~~~

    #### With isDisabled
    ~~~js
    <DonationCard isDisabled />
    ~~~

   #### Version
    ~~~js
    <DonationCard version="default" />
    <DonationCard version="tiny" />
    ~~~

    ### Props
    ~~~js
      <DonationCard
        donationForm={{
          # show TextInputWithUnitForm component
        }}
      />
    ~~~
  `,
}

storiesOf('Cards/DonationCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Grid style={{ marginTop: '3em' }}>
          <GridCol offset="1" col="10">
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
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
