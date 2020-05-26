import React from 'react'
import styled from 'styled-components'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Carousel } from './carousel'
import { Container } from '../../../components/grid/container'
import { EngagementCard } from '../../../components/cards/engagement-card'
import { PhoneIllustration } from '../../../components/illustrations/phone-illustration'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

export default {
  component: Default,
  title: 'Carousel/EngagementsCarousel',
  decorators: [withKnobs],
  parameters: {
    component: Default,
  },
}

const engagementsData = [
  {
    bgColor: '#ffebe1',
    children: 'autoproduction culturelle',
  },
  {
    bgColor: '#8fd9fa',
    children: 'Autoproduction culturelle',
  },
  {
    bgColor: '#ffebe1',
    children: 'education',
  },
  {
    bgColor: '#caf4fe',
    children: 'bio',
  },
  {
    bgColor: '#caf4fe',
    children: 'Made in france',
  },
  {
    bgColor: '#8fd9fa',
    children: 'zero-dechet',
  },
  {
    bgColor: '#caf4fe',
    children: 'bio',
  },
  {
    bgColor: '#caf4fe',
    children: 'Made in france',
  },
  {
    bgColor: '#8fd9fa',
    children: 'zero-dechet',
  },
]

const StyledContainer = styled(Container)`
  margin-top: ${pxToRem(20)};
  box-sizing: border-box;

  .k-Carousel__page__item a {
    transition: opacity 0.2s ease-in-out;
  }

  .k-Carousel__page:hover > .k-Carousel__page__item a:hover {
    opacity: 1;
  }

  .k-Carousel__page:hover > .k-Carousel__page__item a {
    opacity: 0.5;
  }

  .EngagementsCarousel__engagementCard {
    display: flex;
    height: ${pxToRem(130)};

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      height: ${pxToRem(140)};
    }
  }
`

export const Default = () => (
  <StyledContainer fullWidthBelowScreenSize="S">
    <Carousel
      itemMinWidth={110}
      hidePaginationOnMobile
      baseItemMarginBetween={20}
      paginationPosition={{ default: 'right' }}
      showOtherPages={boolean('Show other pages?', false)}
    >
      {engagementsData.map(({ bgColor, children }, index) => (
        <EngagementCard
          key={`card__${index}`}
          className="EngagementsCarousel__engagementCard"
          href="#"
          icon={<PhoneIllustration />}
          backgroundColor={bgColor}
          hoverBorder={bgColor}
        >
          {children}
        </EngagementCard>
      ))}
    </Carousel>
  </StyledContainer>
)
