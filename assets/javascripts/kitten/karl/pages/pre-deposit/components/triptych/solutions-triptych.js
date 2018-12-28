import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Container } from '../../../../../components/grid/container'
import { Grid, GridCol } from '../../../../../components/grid/grid'
import { Marger } from '../../../../../components/layout/marger'
import { Title } from '../../../../../components/typography/title'
import { CardWithButton } from './card-with-button'
import { Triptych } from '../../../../../components/cards/triptych'

class SolutionsTriptych extends Component {
  render() {
    return (
      <Marger top="11.4">
        <Container>
          <Grid>
            <GridCol offset-l="1" col-l="10">
              <Triptych
                title={
                  <Title tag="h2" modifier="secondary" margin={false}>
                    3 solutions pour collecter des fonds et financer mon projet
                  </Title>
                }
                item1={
                  <CardWithButton
                    title="Le don en échange de contreparties"
                    paragraph="Adapté à tous les types de projets, laissez parler votre créativité pour remercier vos contributeurs."
                    imageProps={{
                      src: 'http://via.placeholder.com/350x350/19b4fa/19b4fa',
                      alt: '',
                    }}
                    horizontalStroke={false}
                    marginBetweenImgAndBody="3"
                  />
                }
                item2={
                  <CardWithButton
                    title="La prévente"
                    paragraph="Recommandée pour lancer vos créations, votre marque, vos produits ou pour tester un prototype. Fonctionne aussi très bien pour gérer la billetterie de vos événements."
                    imageProps={{
                      src: 'http://via.placeholder.com/350x350/19b4fa/19b4fa',
                      alt: '',
                    }}
                    horizontalStroke={false}
                    marginBetweenImgAndBody="3"
                  />
                }
                item3={
                  <CardWithButton
                    title="Le don libre"
                    paragraph="Idéal pour les projets associatifs, philanthropiques, de défense de l’environnement, éducatifs, patrimoniaux, de mécénat, personnels…"
                    imageProps={{
                      src: 'http://via.placeholder.com/350x350/19b4fa/19b4fa',
                      alt: '',
                    }}
                    horizontalStroke={false}
                    marginBetweenImgAndBody="3"
                  />
                }
              />
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  }
}

export default SolutionsTriptych
