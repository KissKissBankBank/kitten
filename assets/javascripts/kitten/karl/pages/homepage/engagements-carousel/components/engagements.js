import React from 'react'
import styled, { css } from 'styled-components'
import { Container } from '../../../../../components/grid/container'
import { EngagementCardWithImage } from '../../../../../components/cards/engagement-card/withImage'
import { Carousel } from '../../../../../components/carousel/carousel/carousel'
import { GUTTER } from '../../../../../constants/grid-config'
import { pxToRem } from '../../../../../helpers/utils/typography'

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
  box-sizing: border-box;

  & > div > :last-child {
    margin-top: ${pxToRem(12)};
  }

  [class^='carousel-page']:hover > [class^='carousel-page'] a:hover {
    opacity: 1;
  }

  [class^='carousel-page']:hover > [class^='carousel-page'] a {
    opacity: 0.5;
  }
`

const Engagements = ({ viewportIsSOrLess }) =>  {
  return (
    <StyledContainer>
      <Carousel
        itemMinWidth={200}
        hidePaginationOnMobile
        baseItemMarginBetween={GUTTER}
        paginationPosition={{ default: 'right' }}
        showOtherPages={viewportIsSOrLess}
      >
        {engagementsData.map(({ bgImage, children }) => {
          return (
            <EngagementCardWithImage
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

export default Engagements
