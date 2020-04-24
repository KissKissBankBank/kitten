import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../../components/grid/container'
import { EngagementCardWithImage } from '../../../../components/cards/engagement-card/withImage'
import { Carousel } from '../../../../components/carousel/carousel/carousel'
import { GUTTER } from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { mediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'

const engagementsData = [
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,1',
    children: 'Autoproduction culturelle',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,2',
    children: 'Fabrication française',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,3',
    children: 'Éducation',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,4',
    children: 'Bio',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,5',
    children: 'Zéro déchet',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,6',
    children: 'Média indépendant',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,7',
    children: 'Féminisme',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,8',
    children: 'Santé et Handicap',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,9',
    children: 'Biodiversité',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,10',
    children: 'Développement local',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,11',
    children: 'Solidarité internationale',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,12',
    children: 'Recyclage',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,13',
    children: 'Commerce équitable',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,14',
    children: 'Bien être animal',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,15',
    children: 'Antiracisme',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,16',
    children: 'Locavore',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,17',
    children: 'Aide aux migrants',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,18',
    children: 'LGBTQ+',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120?kitten,19',
    children: 'Senior',
  },
]

const StyledContainer = styled(Container)`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    .k-Carousel__pagination {
      margin-top: ${pxToRem(20)};
    }
  }

  .k-Carousel__page__item a {
    transition: opacity 0.2s ease-in-out;
  }

  .k-Carousel__page:hover > .k-Carousel__page__item a:hover {
    opacity: 1;
  }

  .k-Carousel__page:hover > .k-Carousel__page__item a {
    opacity: 0.7;
  }

  .EngagementsCarousel__card {
    max-width: ${pxToRem(200)};
  }
`

const EngagementsCarouselBase = ({ viewportIsXSOrLess }) => (
  <StyledContainer fullWidthBelowScreenSize="S" className="EngagementsCarousel">
    <Carousel
      itemMinWidth={viewportIsXSOrLess ? 135 : 200}
      baseItemMarginBetween={GUTTER}
      hidePaginationOnMobile
      paginationPosition={{ default: 'right' }}
      showOtherPages={viewportIsXSOrLess}
      loop
      tinyButtons
    >
      {engagementsData.map(({ bgImage, children }) => {
        return (
          <EngagementCardWithImage
            key={children}
            href="#"
            backgroundImage={bgImage}
            imageHeight={viewportIsXSOrLess ? 100 : 120}
            className="EngagementsCarousel__card"
          >
            {children}
          </EngagementCardWithImage>
        )
      })}
    </Carousel>
  </StyledContainer>
)

export const EngagementsCarousel = mediaQueries(EngagementsCarouselBase, {
  viewportIsXSOrLess: true,
})
