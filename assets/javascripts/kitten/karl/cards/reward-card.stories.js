import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { RewardCard } from 'kitten/components/cards/reward-card'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('RewardCard', module)
  .addDecorator(withKnobs)
  .add('RewardCard', () => (
    <StyleRoot>
      <Grid>
        <GridCol offset="1" col="10">
          <RewardCard
            titleAmount={text('Title Amount', 'Pour 15€')}
            titleDescription={text(
              'Title Description',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            )}
            textDescription={text(
              'Text Description',
              'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.',
            )}
            titleContributors={text('Title Contributors', 'Contributeurs')}
            titleSmallContributors={text(
              'Title Small Contributors',
              'Contributeurs : ',
            )}
            valueContributors={text('Value Contributors', '35')}
            titleDelivery={text('Title Delivery', 'Livraison')}
            titleSmallDelivery={text('Title Small Delivery', 'Livraison : ')}
            valueDelivery={text('Value Delivery', 'Janvier 2018')}
            titleAvailability={text('Title Availability', 'Disponibilité')}
            titleSmallAvailability={text(
              'Title Small Availability',
              'Disponibilité : ',
            )}
            valueAvailability={text('Value Availability', '200')}
            button={text('Button', 'Choisir')}
            myContribution={text(
              'My Contribution',
              'Vous avez contribué à ce projet',
            )}
            manageContribution={text(
              'Manage Contribution',
              'Gérer ma contribution',
            )}
            isDisabled={boolean('Is Disabled', false)}
            isCompleted={boolean('Is Completed', false)}
            imageSrcSmall={boolean('Small image', false)}
            imageSrc={boolean('Default image', false)}
          />
        </GridCol>
      </Grid>
    </StyleRoot>
  ))
