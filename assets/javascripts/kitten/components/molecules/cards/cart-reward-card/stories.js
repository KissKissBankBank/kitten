import React, { useRef } from 'react'
import { CartRewardCard } from './index'
import { Button } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: CartRewardCard,
  title: 'Molecules/Cards/CartRewardCard',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="CartRewardCard" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    titleAmount: 'For 00€',
    titleTag: 'h1',
    subtitle: 'Don libre',
    descriptionTag: 'p',
    updateAmountTitle: 'Change donation amount',
    updateAmountLink: '#',
    onAfterClose: () => {},
    onCloseClick: null,
    deleteButtonA11yText: 'Delete',
  },
  argTypes: {
    titleAmount: { control: 'text' },
    titleTag: { control: 'text' },
    subtitle: { control: 'text' },
    descriptionTag: { control: 'text' },
    updateAmountTitle: { control: 'text' },
    updateAmountLink: { control: 'text' },
    onAfterClose: { control: null },
    onCloseClick: { control: null },
    deleteButtonA11yText: { control: 'text' },
    shippingTitle: {
      control: null,
      description: 'Deprecated. Replaced by `<CartRewardCard.Information />`',
    },
    shippingValue: {
      control: null,
      description: 'Deprecated. Replaced by `<CartRewardCard.Information />`',
    },
    textDescription: {
      control: null,
      description: 'Deprecated. Replaced by `<CartRewardCard.Description />`',
    },
  },
}

export const Default = args => {
  const cardComponent = useRef(null)

  return (
    <>
      <CartRewardCard ref={cardComponent} {...args}>
        <CartRewardCard.Information title="Shipping:" value="January 2018" />
        <CartRewardCard.Information title="Variation:" value="Size L" />
        <CartRewardCard.Description>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis
          natoque penatibus et magnis dis parturient mont.
        </CartRewardCard.Description>
      </CartRewardCard>
      <Button
        fluid
        modifier="helium"
        onClick={() => cardComponent.current.close()}
      >
        Close using close() method
      </Button>
    </>
  )
}
