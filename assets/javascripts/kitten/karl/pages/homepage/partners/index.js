import React from 'react'
import styled from 'styled-components'
import { Card } from './components/card'
import { Title } from '../../../../components/typography/title'
import { Carousel } from '../../../../components/carousel/carousel/carousel'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { mediaQueries } from '../../../../hoc/media-queries'

const StyledFeaturedProjects = styled.div`
  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    .FeaturedProjects__colLeft {
      padding-right: ${pxToRem(20)};
    }

    .FeaturedProjects__colRight {
      padding-left: ${pxToRem(20)};
    }
  }
`

const selectionData = [
  {
    title:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'https://source.unsplash.com/random/315x198?kitten,1',
    title2: 'Un titre court',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'https://source.unsplash.com/random/315x198?kitten,2',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'https://source.unsplash.com/random/315x198?kitten,3',
  },
  {
    title:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'https://source.unsplash.com/random/315x198?kitten,4',
    title2: 'Un titre court',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'https://source.unsplash.com/random/315x198?kitten,5',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'https://source.unsplash.com/random/315x198?kitten,6',
  },
]

const PartnersBase = ({ viewportIsXSOrLess }) => (
  <StyledFeaturedProjects>
    <div className="FeaturedProjects__colRight">
      <Title
        tag="h3"
        className="
        Homepage__section__title
        k-u-margin-top-none
        k-u-margin-bottom-singleHalf@s-up
        k-u-margin-bottom-single@s-down k-u-hidden@m-down"
      >
        Notre sélection
      </Title>
      <Carousel
        itemMinWidth={viewportIsXSOrLess ? 250 : 490}
        baseItemMarginBetween={10}
        paginationPosition={{ default: 'bottom' }}
        tinyButtons
        showPageSquares
        preferCompletePaginationOnMobile
        loop
      >
        {selectionData.map((item, index) => (
          <div>
            <Card
              key={index}
              title={item.title}
              text={item.text}
              imageProps={{
                src: item.imageSrc,
                alt: 'Image alt',
              }}
              horizontalCard
            />
            <Card
              key={index}
              title={item.title2}
              text={item.text2}
              imageProps={{
                src: item.imageSrc2,
                alt: 'Image alt',
              }}
              horizontalCard
            />
            <Card
              key={index}
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
    </div>
  </StyledFeaturedProjects>
)

export const Partners = mediaQueries(PartnersBase, {
  viewportIsXSOrLess: true,
})
