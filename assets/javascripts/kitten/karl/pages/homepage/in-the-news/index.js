import React from 'react'
import styled from 'styled-components'
import Card from './components/card'
import { Text } from '../../../../components/typography/text'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Carousel } from '../../../../components/carousel/carousel/carousel'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const selectionData = [
  {
    title:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'http://placekitten.com/315/198',
    title2:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'http://placekitten.com/315/198',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'http://placekitten.com/315/198',
    overtimeProgress: true,
  },
  {
    title:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'http://placekitten.com/315/198',
    title2:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'http://placekitten.com/315/198',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'http://placekitten.com/315/198',
    successProgress: true,
  },
  {
    title:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'http://placekitten.com/315/198',
    title2:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'http://placekitten.com/315/198',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'http://placekitten.com/315/198',
  },
]

const StyledGridCol = styled(GridCol)`
  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    padding: 0;
    padding-right: ${pxToRem(CONTAINER_PADDING)};
  }
`

const InTheNews = () => (
  <Container>
    <Grid>
      <StyledGridCol col-l="6">
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
      </StyledGridCol>

      <StyledGridCol col-l="6">
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
          itemMinWidth={500}
          baseItemMarginBetween={10}
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
                overtimeProgress
              />
              <Card
                key={`SelectionCard${item.title2}`}
                title={item.title2}
                text={item.text2}
                imageProps={{
                  src: item.imageSrc2,
                  alt: 'Image alt',
                }}
                horizontalCard
                successProgress
              />
              <Card
                key={`SelectionCard${item.title3}`}
                title={item.title3}
                text={item.text3}
                imageProps={{
                  src: item.imageSrc3,
                  alt: 'Image alt',
                }}
                horizontalCard
              />
            </div>
          ))}
        </Carousel>
      </StyledGridCol>
    </Grid>
  </Container>
)

export default InTheNews
