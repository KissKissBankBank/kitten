import React from 'react'
import styled from 'styled-components'
import Card from './components/card'
import { Text } from '../../../../components/typography/text'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Carousel } from '../../../../components/carousel/carousel/carousel'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { mediaQueries } from '../../../../hoc/media-queries'

const StyledText = styled(Text)`
  font-size: ${stepToRem(-1)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${stepToRem(0)};
  }
`

const StyledPaddingRight = styled(GridCol)`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    padding-right: ${pxToRem(20)};
  }
`

const StyledPaddingLeft = styled(GridCol)`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    padding-left: ${pxToRem(20)};
  }
`

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


const InTheNewsBase = ({ viewportIsXSOrLess })=> (
  <Container>
    <Grid>
      <StyledPaddingRight col-l={6}>
        <StyledText
          tag="p"
          weight="bold"
          color="font1"
          className="k-u-margin-bottom-singleHalf@s-up
          k-u-margin-bottom-single@s-down"
        >
          A la une
        </StyledText>
        <Card
          title="Keep It Silky"
          text="Soutenez ma première participation au Salon de la Lingerie de Paris et aidez moi à développer mon réseau commercial ainsi que mon image."
          imageProps={{
            src: ' http://placekitten.com/660/412',
            alt: '',
          }}
        />
      </StyledPaddingRight>

      <StyledPaddingLeft col-l={6}>
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
          itemMinWidth={viewportIsXSOrLess ? 250 : 490}
          baseItemMarginBetween={10}
          paginationPosition={{ default: 'bottom' }}
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
      </StyledPaddingLeft>
    </Grid>
  </Container>
)

export const InTheNews = mediaQueries(InTheNewsBase, {
  viewportIsXSOrLess: true,
})
