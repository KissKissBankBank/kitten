import React, { useRef } from 'react'
import { text } from '@storybook/addon-knobs'
import { CartRewardCard } from './index'
import { Button } from '../../../components/buttons/button/button'

export default {
  component: CartRewardCard,
  title: 'Cards/CartRewardCard',
  parameters: {
    component: CartRewardCard,
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  const cardComponent = useRef(null)

  return (
    <>
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
      <div>
        <Button
          fluid
          modifier="helium"
          onClick={() => cardComponent.current.close()}
        >
          Close using close() method
        </Button>
      </div>
    </>
  )
}
