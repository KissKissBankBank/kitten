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

   #### Version
    ~~~js
    <DonationCard version="default" />
    <DonationCard version="tiny" />
    ~~~
  `,
}

storiesOf('Cards/DonationCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => {
    return (
      <Grid style={{ marginTop: '3em' }}>
        <GridCol offset="1" col="10">
          <DonationCard
            title={text(
              'Title Amount',
              'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            )}
            isDisabled={boolean('Is Disabled', false)}
            amountLabel={text('Label Input', 'Enter your amount')}
            amountPlaceholder={text('Placeholder input', 'Your amount')}
            isDisabled={boolean('Is Disabled', false)}
            isError={boolean('Is error', false)}
            version={select('Version', versionOptions, 'default')}
            errorTag={text('Error tag', 'lorem ipsum dolor sit amet')}
            donationForm={object('donationForm', {
              inputUnit: '€',
              buttonLabel: 'Choose',
            })}
          />
        </GridCol>
      </Grid>
    )
  })
