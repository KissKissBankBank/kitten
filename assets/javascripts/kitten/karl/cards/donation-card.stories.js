import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { DonationCard } from 'kitten/components/cards/donation-card'
import { KarlDonationInput } from 'kitten/karl/cards/donation-card'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Cards/DonationCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <DonationCard
              titleAmount={text('Title Amount', 'For 00€')}
              textDescription={text(
                'Text Description',
                'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.',
              )}
              button={text('Button', 'Choose')}
              myContribution={text(
                'My Contribution',
                'You contributed to this project',
              )}
              manageContribution={text(
                'Manage Contribution',
                'Manage my contribution',
              )}
              manageContributionLink={text(
                'Manage Contribution link',
                'https://www.google.com',
              )}
              isDisabled={boolean('Is Disabled', false)}
              renderAmountInput={() => (
                <KarlDonationInput
                  amountLabel={text('Label Input', 'Enter your amount')}
                  amountPlaceholder={text('Placeholder input', 'Your amount')}
                  isDisabled={boolean('Is Disabled', false)}
                  isError={boolean('Is error', false)}
                  errorTag={text('Error tag', 'lorem ipsum dolor sit amet')}
                />
              )}
            />
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
