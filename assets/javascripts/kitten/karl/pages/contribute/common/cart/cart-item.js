import React, { Component } from 'react'
import { Marger } from '../../../../../components/structure/marger'
import { Title } from '../../../../../components/atoms/typography/title'
import { Text } from '../../../../../components/atoms/typography/text'
import { pxToRem } from '../../../../../helpers/utils/typography'

class CartItem extends Component {
  render() {
    return (
      <Marger
        top="2"
        bottom="2"
        style={{
          padding: `${pxToRem(30)} ${pxToRem(20)}`,
          background: '#FFF',
          color: '#222',
        }}
      >
        <Marger bottom="2">
          <Title
            tag="p"
            modifier="senary"
            margin={false}
            className="k-u-style-italic"
          >
            Pour 60 €
          </Title>
        </Marger>

        <Marger top="2" bottom="2">
          <Text
            tag="p"
            size="micro"
            weight="light"
            color="font1"
            lineHeight="normal"
            style={{ margin: 0 }}
          >
            Les contreparties précédentes + 1 place pour le concert Démos à la
            Philharmonie en juin + 1 laissez-passer Musée de la musique
          </Text>
        </Marger>

        <Marger top=".5">
          <Text
            tag="p"
            size="micro"
            weight="light"
            color="font1"
            lineHeight="normal"
            style={{ margin: 0 }}
          >
            <Text tag="span" weight="regular">
              Livraison :{' '}
            </Text>
            Janvier 2018
          </Text>
        </Marger>

        <Marger top=".5">
          <Text
            tag="p"
            size="micro"
            weight="light"
            color="font1"
            lineHeight="normal"
            style={{ margin: 0 }}
          >
            <Text tag="span" weight="regular">
              Option :{' '}
            </Text>
            Taille XL
          </Text>
        </Marger>
      </Marger>
    )
  }
}

export default CartItem
