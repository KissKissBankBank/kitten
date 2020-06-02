import React, { useRef } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Container } from '../../../components/grid/container'
import { CartRewardCard } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Button } from '../../../components/buttons/button/button'

export default {
  component: CartRewardCard,
  title: 'Cards/CartRewardCard',
  decorators: [withKnobs],
  parameters: {
    component: CartRewardCard,
  },
}

export const Default = () => {
  const cardComponent = useRef(null)

  return (
    <Container>
      <Grid className="k-u-margin-top-quadruple k-u-margin-bottom-quadruple">
        <GridCol offset="1" col="6">
          <CartRewardCard
            ref={cardComponent}
            titleAmount={text('Title Amount', 'For 00€')}
            subtitle={text('Subtitle', 'Don libre')}
            updateAmountTitle={text('Update amount', 'Change donation amount')}
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
        </GridCol>
        <GridCol offset="1" col="4">
          <Button
            fluid
            modifier="helium"
            onClick={() => cardComponent.current.close()}
          >
            Close using close() method
          </Button>
        </GridCol>
      </Grid>
    </Container>
  )
}
