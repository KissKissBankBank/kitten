import React from 'react'
import styled, { css } from 'styled-components'
import { Container } from '../../../../../components/grid/container'
import { EngagementCardWithImage } from '../../../../../components/cards/engagement-card-with-image'
import { Carousel } from '../../../../../components/carousel/carousel/carousel'
import { GUTTER } from '../../../../../constants/grid-config'
import { pxToRem } from '../../../../../helpers/utils/typography'

const engagementsData = [
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Autoproduction culturelle',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Fabrication française',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Éducation',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Bio',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Zéro déchet',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Média indépendant',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Féminisme',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Santé et Handicap',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Biodiversité',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Développement local',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Solidarité internationale',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Recyclage',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Commerce équitable',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Bien être animal',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Antiracisme',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Locavore',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Aide aux migrants',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'LGBTQ+',
  },
  {
    bgImage: 'https://source.unsplash.com/random',
    children: 'Senior',
  },
]

const StyledContainer = styled(Container)`
  margin-top: ${pxToRem(20)};
  box-sizing: border-box;

  [class^='carousel-page']:hover > [class^='carousel-page'] a:hover {
    opacity: 1;
  }

  [class^='carousel-page']:hover > [class^='carousel-page'] a {
    opacity: 0.5;
  }
`

const Engagements = props =>  {
  return (
    <StyledContainer fullWidthBelowScreenSize="S">
      <Carousel
        itemMinWidth={200}
        hidePagination
        baseItemMarginBetween={20}
        paginationPosition={{ default: 'right' }}
      >
        {engagementsData.map(({ bgImage, children }) => {
          return (
            <StyledEngagementCard
              href="#"
              backgroundImage={bgImage}
            >
              {children}
            </StyledEngagementCard>
          )
        })}
      </Carousel>
    </StyledContainer>
  )
}

export default Engagements
