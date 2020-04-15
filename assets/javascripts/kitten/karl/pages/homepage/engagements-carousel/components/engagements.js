import React from 'react'
import styled, { css } from 'styled-components'
import { Container } from '../../../components/grid/container'
import { EngagementCard } from '../../../components/cards/engagement-card'
import { Carousel } from '../../../components/carousel/carousel/carousel'
import { GUTTER } from '../../../constants/grid-config'
import { pxToRem } from '../../../helpers/utils/typography'

const engagementsData = [
  {
    bgImage: '',
    children: 'autoproduction culturelle',
  },
  {
    bgImage: '#8fd9fa',
    children: 'Autoproduction culturelle',
  },
  {
    bgImage: '#ffebe1',
    children: 'education',
  },
  {
    bgImage: '#caf4fe',
    children: 'bio',
  },
  {
    bgImage: '#caf4fe',
    children: 'Made in france',
  },
  {
    bgImage: '#8fd9fa',
    children: 'zero-dechet',
  },
  {
    bgImage: '#caf4fe',
    children: 'bio',
  },
  {
    bgImage: '#caf4fe',
    children: 'Made in france',
  },
  {
    bgImage: '#8fd9fa',
    children: 'zero-dechet',
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
        itemMinWidth={110}
        hidePagination
        baseItemMarginBetween={20}
        paginationPosition={{ default: 'right' }}
        showOtherPages={boolean('Show other pages?', false)}
      >
        {engagementsData.map(({ bgImage, children }) => {
          return (
            <StyledEngagementCard
              href="#"
              icon={<PhoneIllustration />}
              backgroundColor={bgColor}
              hoverBorder={bgColor}
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
