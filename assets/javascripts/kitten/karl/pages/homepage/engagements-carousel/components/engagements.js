import React from 'react'
import styled, { css } from 'styled-components'
import { Container } from '../../../../../components/grid/container'
import { EngagementCardWithImage } from '../../../../../components/cards/engagement-card/withImage'
import { Carousel } from '../../../../../components/carousel/carousel/carousel'
import { GUTTER } from '../../../../../constants/grid-config'
import { pxToRem } from '../../../../../helpers/utils/typography'
import { mediaQueries } from '../../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../../constants/screen-config'

const engagementsData = [
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Autoproduction culturelle',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Fabrication française',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Éducation',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Bio',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Zéro déchet',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Média indépendant',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Féminisme',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Santé et Handicap',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Biodiversité',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Développement local',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Solidarité internationale',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Recyclage',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Commerce équitable',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Bien être animal',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Antiracisme',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Locavore',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Aide aux migrants',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'LGBTQ+',
  },
  {
    bgImage: 'https://source.unsplash.com/random/200x120',
    children: 'Senior',
  },
]

const StyledContainer = styled(Container)`
  margin-top: ${pxToRem(20)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    & > div > :last-child {
      margin-top: ${pxToRem(12)};
    }
  }

  [class^='carousel-page']:hover > [class^='carousel-page'] a:hover {
    opacity: 1;
  }

  [class^='carousel-page']:hover > [class^='carousel-page'] a {
    opacity: 0.5;
  }
`

const EngagementsBase = ({ viewportIsXSOrLess }) =>  {
  return (
    <StyledContainer fullWidthBelowScreenSize="S">
      <Carousel
        itemMinWidth={viewportIsXSOrLess ? 135 : 200}
        baseItemMarginBetween={GUTTER}
        hidePaginationOnMobile
        paginationPosition={{ default: 'right' }}
        showOtherPages={viewportIsXSOrLess}
      >
        {engagementsData.map(({ bgImage, children }) => {
          return (
            <EngagementCardWithImage
              key={children}
              href="#"
              backgroundImage={bgImage}
              imageHeight={120}
            >
              {children}
            </EngagementCardWithImage>
          )
        })}
      </Carousel>
    </StyledContainer>
  )
}

export const Engagements = mediaQueries(EngagementsBase, {
  viewportIsXSOrLess: true,
})
