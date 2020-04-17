import React from 'react'
import styled from 'styled-components'
import Card from './components/card'
import { Title } from '../../../../components/typography/title'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Carousel } from '../../../../components/carousel/carousel/carousel'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { mediaQueries } from '../../../../hoc/media-queries'

const StyledTitle = styled(Title)`
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
    imageSrc: 'https://source.unsplash.com/random/315x198?kitten,1',
    title2:
      'Un titre court',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'https://source.unsplash.com/random/315x198?kitten,2',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'https://source.unsplash.com/random/315x198?kitten,3',
    overtimeProgress: true,
  },
  {
    title:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'https://source.unsplash.com/random/315x198?kitten,4',
    title2:
      'Un titre court',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'https://source.unsplash.com/random/315x198?kitten,5',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'https://source.unsplash.com/random/315x198?kitten,6',
    successProgress: true,
  },
  {
    title:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'https://source.unsplash.com/random/315x198?kitten,7',
    title2:
      'Un titre court',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'https://source.unsplash.com/random/315x198?kitten,8',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'https://source.unsplash.com/random/315x198?kitten,9',
  },
]


const InTheNewsBase = ({ viewportIsXSOrLess })=> (
  <Grid>
    <StyledPaddingRight col-l={6}>
      <StyledTitle
        tag="h2"
        className="k-u-margin-bottom-singleHalf@s-up
        k-u-margin-bottom-single@s-down"
      >
        À la une
      </StyledTitle>
      <Card
        title="Keep It Silky"
        text="Soutenez ma première participation au Salon de la Lingerie de Paris et aidez moi à développer mon réseau commercial ainsi que mon image."
        imageProps={{
          src: 'https://source.unsplash.com/random/660x412?kitten',
          alt: '',
        }}
      />
    </StyledPaddingRight>

    <StyledPaddingLeft col-l={6}>
      <StyledTitle
        tag="h2"
        className="k-u-margin-bottom-singleHalf@s-up
        k-u-margin-bottom-single@s-down"
      >
        Notre sélection
      </StyledTitle>
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
)

export const InTheNews = mediaQueries(InTheNewsBase, {
  viewportIsXSOrLess: true,
})
