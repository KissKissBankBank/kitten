import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { BasketCard } from 'kitten/components/cards/basket-card'
import { KarlDonationInput } from 'kitten/karl/cards/donation-card'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Cards/BasketCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="8">
            <BasketCard
              titleAmount={text('Title Amount', 'For 00€')}
              subtitle={text('Subtitle', 'Don libre')}
              textDescription={text(
                'Text description',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont',
              )}
              titleBottom={text('Title bottom', 'Livraison : ')}
              valueBottom={text('Value bottom', 'Janvier 2018')}
              manageLinkBottom={text(
                'Manage link bottom',
                'Modifier le montant',
              )}
            />
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
