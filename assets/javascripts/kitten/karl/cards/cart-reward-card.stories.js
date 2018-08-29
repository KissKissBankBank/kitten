import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { CartRewardCard } from 'kitten/components/cards/cart-reward-card'
import { KarlDonationInput } from 'kitten/karl/cards/donation-card'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Cards/CartRewardCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="8">
            <CartRewardCard
              titleAmount={text('Title Amount', 'For 00€')}
              subtitle={text('Subtitle', 'Don libre')}
              textDescription={text(
                'Text description',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont',
              )}
              shippingTitle={text('Shipping Title', 'Shipping:')}
              shippingValue={text('Shipping Value', 'January 2018')}
              updateAmountTitle={text(
                'Update amount',
                'Change donation amount',
              )}
            />
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
