import React from 'react'
import Card from './card'
import { Text } from '../../../../components/typography/text'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Carousel } from '../../../../components/carousel/carousel/carousel'

const selectionData = [
  {
    title:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'http://placekitten.com/315/198',
  },
  {
    title: 'Lancement des prochains pantalons à plis intemporels',
    text:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc: 'http://placekitten.com/315/198',
  },
  {
    title: 'Les Arts dessinés : devenez abonné-fondateur',
    text:
      'Les Arts dessinés, un magazine uniquement consacré au dessin, sous toutes ses formes.',
    imageSrc: 'http://placekitten.com/315/198',
  },
]

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
        <Carousel
          itemMinWidth="150"
          baseItemMarginBetween="15"
          hidePaginationOnMobile
        >
          {selectionData.map((item, index) => (
            <div>
              <Card
                key={`SelectionCard${item.title}`}
                title={item.title}
                text={item.text}
                imageProps={{
                  src: item.imageSrc,
                  alt: 'Image alt',
                }}
                horizontalCard
              />
              <Card
                key={`SelectionCard${item.title}`}
                title={item.title}
                text={item.text}
                imageProps={{
                  src: item.imageSrc,
                  alt: 'Image alt',
                }}
                horizontalCard
              />
              <Card
                key={`SelectionCard${item.title}`}
                title={item.title}
                text={item.text}
                imageProps={{
                  src: item.imageSrc,
                  alt: 'Image alt',
                }}
                horizontalCard
              />
            </div>
          ))}
        </Carousel>
      </GridCol>
    </Grid>
  </Container>
)

export default InTheNews
