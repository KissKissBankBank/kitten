import React, { Component, Fragment } from 'react'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { Button } from '../../../../components/buttons/button/button'
import { Triptych as KittenTriptych } from '../../../../components/cards/triptych'

const Card = () => (
  <Fragment>
    <Marger bottom="3">
      <div style={{ background: '#404040', height: 200 }} />
    </Marger>

    <Marger bottom="3">
      <Text color="font1" size="huge" weight="bold">
        La Social Cup, la Coupe de France des jeunes entrepreneurs sociaux
      </Text>
    </Marger>

    <Button as="a" href="#">
      En savoir plus
    </Button>
  </Fragment>
)

class Triptych extends Component {
  render() {
    return (
      <Marger top="10" bottom="10">
        <Container>
          <KittenTriptych
            title={
              <Title tag="h2" modifier="secondary" margin={false}>
                La Banque Postale, un exemple de <br />
                partenariat riche de sens
              </Title>
            }
            item1={<Card />}
            item2={<Card />}
            item3={<Card />}
          />
        </Container>
      </Marger>
    )
  }
}

export default Triptych
