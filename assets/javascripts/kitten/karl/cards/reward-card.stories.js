import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { RewardCard } from 'kitten/components/cards/reward-card'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Cards/RewardCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <RewardCard
              titleAmount={text('Title Amount', 'For 00€')}
              titleDescription={text(
                'Title Description',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              )}
              textDescription={text(
                'Text Description',
                'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.',
              )}
              titleContributors={text('Title Contributors', 'Contributors : ')}
              valueContributors={text('Value Contributors', '35')}
              titleDelivery={text('Title Delivery', 'Delivery : ')}
              valueDelivery={text('Value Delivery', 'January 2018')}
              titleAvailability={text('Title Availability', 'Availability : ')}
              valueAvailability={text('Value Availability', '200')}
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
              valueContributors={boolean('Value contributor', false)}
              valueDelivery={boolean('Value delivery', false)}
              valueAvailability={boolean('Value availability', false)}
              imageProps={object('Src/Alt', {
                src: 'http://via.placeholder.com/200x240/caf4fe/caf4fe',
                alt: '',
              })}
            />
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
