import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { StyleRoot } from 'radium'
import { CartRewardCard } from '../../components/cards/cart-reward-card'
import { Grid, GridCol } from '../../components/grid/grid'
import { Marger } from '../../components/layout/marger'

storiesOf('Cards/CartRewardCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="6">
            <Marger top="5" bottom="5">
              <CartRewardCard
                titleAmount={text('Title Amount', 'For 00€')}
                subtitle={text('Subtitle', 'Don libre')}
                updateAmountTitle={text(
                  'Update amount',
                  'Change donation amount',
                )}
              >
                <CartRewardCard.Information
                  title={text('Shipping Title', 'Shipping:')}
                  value={text('Shipping Value', 'January 2018')}
                />
                <CartRewardCard.Information
                  title={text('Other information title', 'Variation:')}
                  value={text('Other information value', 'Size L')}
                />
                <CartRewardCard.Description>
                  {text(
                    'Text description',
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont',
                  )}
                </CartRewardCard.Description>
              </CartRewardCard>
            </Marger>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
