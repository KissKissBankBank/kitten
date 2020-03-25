import React from 'react'
import Card from './card'
import { Text } from '../../../../components/typography/text'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'

const InTheNews = () => (
  <Container>
    <Grid>
      <GridCol col="6">
        <Text weight="bold" size="default" color="font1">
          A la une
        </Text>
        <Card
          title="Keep It Silky"
          text="Soutenez ma première participation au Salon de la Lingerie de Paris et aidez moi à développer mon réseau commercial ainsi que mon image."
          imageSrc="https://via.placeholder.com/150x75"
          className="k-u-margin-top-single"
        />
      </GridCol>

      <GridCol col="6">
        <Text
          weight="bold"
          size="default"
          color="font1"
          className="k-u-hidden@l-up"
        >
          Notre sélection
        </Text>
        <Card
          title="Sloe, le soin nomade et naturel à la conquête de vos salles de bain"
          text="Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique."
          src="https://via.placeholder.com/150x75"
          className="k-u-margin-top-single"
        />
      </GridCol>
    </Grid>
  </Container>
)

export default InTheNews
