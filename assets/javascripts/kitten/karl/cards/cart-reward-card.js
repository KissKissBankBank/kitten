import React, { Fragment, Component } from 'react'
import { CartRewardCard } from 'kitten/components/cards/cart-reward-card'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export class KarlCartRewardCard extends Component {
  handleClose = () => {
    alert('Card removed!')
  }

  handleCloseClick = () => {
    if (confirm('Can you remove this card?')) {
      this.card.close()
    }
  }

  render() {
    return (
      <Fragment>
        <KarlExampleTitle>Cart Reward Card custom amount</KarlExampleTitle>
        <Container>
          <Marger bottom="2">
            <CartRewardCard
              titleAmount="100€"
              subtitle="Don libre"
              textDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont"
              updateAmountTitle="Modifier le montant"
            />
          </Marger>
        </Container>

        <KarlExampleTitle>
          Cart Reward Card (without close animation)
        </KarlExampleTitle>
        <Container>
          <Marger bottom="2">
            <CartRewardCard
              ref={node => {
                this.card = node
              }}
              titleAmount="100€"
              textDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont"
              shippingTitle="Livraison : "
              shippingValue="Janvier 2018"
              onClose={this.handleClose}
              onCloseClick={this.handleCloseClick}
            />
          </Marger>
        </Container>
      </Fragment>
    )
  }
}
