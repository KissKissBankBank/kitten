import React, { Fragment } from 'react'
import Radium from 'radium'
import { BasketCard } from 'kitten/components/cards/basket-card'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlBasketCard = () => (
  <Fragment>
    <KarlExampleTitle>Basket Card custom amount</KarlExampleTitle>
    <Container>
      <Marger bottom="2">
        <BasketCard
          titleAmount="100€"
          subtitle="Don libre"
          textDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont"
          manageLinkBottom="Modifier le montant"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Basket Card</KarlExampleTitle>
    <Container>
      <Marger bottom="2">
        <BasketCard
          titleAmount="100€"
          subtitle="Don libre"
          textDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont"
          titleBottom="Livraison : "
          valueBottom="Janvier 2018"
        />
      </Marger>
    </Container>
  </Fragment>
)
