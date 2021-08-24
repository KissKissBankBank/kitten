import React from 'react'
import styled from 'styled-components'
import { boolean } from '@storybook/addon-knobs'
import { Carousel } from './index'
import {
  ScreenConfig,
  Container,
  EngagementCard,
  PhoneIllustration,
  pxToRem,
} from '../../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: Default,
  title: 'Molecules/Carousels/Carousel/EngagementsCarousel',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'styles.js',
            'components/carousel-inner.js',
            'components/carousel-page.js',
          ]}
          importString="Carousel"
        />
      ),
    },
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
