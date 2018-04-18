import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react'
import { KarlRewardCard } from './reward-card'
import { StyleRoot } from 'radium'

const states = {}

storiesOf('RewardCard', module)
  .addDecorator(withKnobs)
  .add('RewardCard', () => <KarlRewardCard />)
  .add('RewardCard', () => (
    <StyleRoot>
      <RewardCard
        titleMount={text('Title Mount', 'Pour 15€')}
        titleDescription={text(
          'Title Description',
          'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.',
        )}
        titleContributors={text('Title Contributors', 'Contributeurs')}
        titleSmallContributors={text(
          'Title Small Contributors',
          'Contributeurs :',
        )}
        valueContributors={text('Value Contributors', '35')}
        titleDelivery={text('Title Delivery', 'Livraison')}
        titleSmallDelivery={text('Title Small Delivery', 'Livraison :')}
        valueDelivery={text('Value Delivery', 'Janvier 2018')}
        titleAvailability={text('Title Availability', 'Disponibilité')}
        titleSmallAvailability={text(
          'Title Small Availability',
          'Disponibilité :',
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
        href={text('Href', '#')}
        imageSrc={text('Image Src', 'https://placehold.it/40x40/caf4fe/caf4fe')}
      />
    </StyleRoot>
  ))
