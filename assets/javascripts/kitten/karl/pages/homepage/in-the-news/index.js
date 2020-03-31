import React from 'react'
import Card from './card'
import { Text } from '../../../../components/typography/text'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'

const InTheNews = () => (
  <Container>
    <Grid>
      <GridCol col-l="6">
        <Text
          tag="p"
          weight="bold"
          size="default"
          color="font1"
          className="k-u-margin-bottom-singleHalf@s-up
          k-u-margin-bottom-single@s-down"
        >
          A la une
        </Text>
        <Card
          title="Keep It Silky"
          text="Soutenez ma première participation au Salon de la Lingerie de Paris et aidez moi à développer mon réseau commercial ainsi que mon image."
          imageProps={{
            src: ' http://placekitten.com/660/412',
            alt: '',
          }}
        />
      </GridCol>

      <GridCol col-l="6">
        <Text
          tag="p"
          weight="bold"
          size="default"
          color="font1"
          className="k-u-margin-bottom-singleHalf k-u-hidden@m-down"
        >
          Notre sélection
        </Text>
        <Card
          title="Sloe, le soin nomade et naturel à la conquête de vos salles de bain"
          text="Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique."
          imageProps={{
            src: 'http://placekitten.com/315/198',
            alt: '',
          }}
          horizontalCard
        />
        <Card
          title="Lancement des prochains pantalons à plis intemporels"
          text="Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris"
          imageProps={{
            src: 'http://placekitten.com/315/198',
            alt: '',
          }}
          horizontalCard
        />
        <Card
          title="Les Arts dessinés : devenez abonné-fondateur"
          text="Les Arts dessinés, un magazine uniquement consacré au dessin, sous toutes ses formes."
          imageProps={{
            src: 'http://placekitten.com/315/198',
            alt: '',
          }}
          horizontalCard
        />
      </GridCol>
    </Grid>
  </Container>
)

export default InTheNews
