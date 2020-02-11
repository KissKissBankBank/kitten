import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { withKnobs, text, number, object } from '@storybook/addon-knobs'
import { CrowdfundingCard } from '../../../components/cards/crowdfunding-card'
import { Carousel } from './carousel'
import { CONTAINER_PADDING, GUTTER } from '../../../constants/grid-config'
import { Marger } from '../../../components/layout/marger'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import COLORS from '../../../constants/colors-config'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

const SmallStoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      <Grid>
        <GridCol col="10" offset="1">
          <Grid>
            <GridCol col="8" offset="2">
              {children}
            </GridCol>
          </Grid>
        </GridCol>
      </Grid>
    </Marger>
  </Container>
)

const data = [
  {
    title: 'Item A',
    imageSrc: 'http://placekitten.com/500/300',
    thumbSrc: 'http://placekitten.com/80/80',
    color: COLORS.primary1,
  },
  {
    title: 'Item B',
    imageSrc: 'http://placekitten.com/501/301',
    thumbSrc: 'http://placekitten.com/81/81',
    color: COLORS.background2,
  },
  {
    title: 'Item C',
    imageSrc: 'http://placekitten.com/502/302',
    thumbSrc: 'http://placekitten.com/82/82',
    color: COLORS.font2,
  },
  {
    title: 'Item D',
    imageSrc: 'http://placekitten.com/503/303',
    thumbSrc: 'http://placekitten.com/83/83',
    color: COLORS.primary1,
  },
  {
    title: 'Item E',
    imageSrc: 'http://placekitten.com/504/304',
    thumbSrc: 'http://placekitten.com/84/84',
    color: COLORS.primary4,
  },
  {
    title: 'Item F',
    imageSrc: 'http://placekitten.com/502/302',
    thumbSrc: 'http://placekitten.com/82/82',
    color: COLORS.font2,
  },
  {
    title: 'Item G',
    imageSrc: 'http://placekitten.com/503/303',
    thumbSrc: 'http://placekitten.com/83/83',
    color: COLORS.primary1,
  },
  {
    title: 'Item H',
    imageSrc: 'http://placekitten.com/504/304',
    thumbSrc: 'http://placekitten.com/84/84',
    color: COLORS.primary4,
  },
]

const paginationPosition = {
  default: 'bottom',
  fromL: 'left',
}

const paginationRightPosition = {
  fromS: 'right',
}

storiesOf('Carousel/ProjectCarousel', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <StoryContainer>
      <Carousel
        itemMinWidth={number('itemMinWidth', 280)}
        baseItemMarginBetween={number(
          'baseItemMarginBetween',
          CONTAINER_PADDING,
        )}
        paginationPosition={object('paginationPosition', paginationPosition)}
      >
        {data.map((item, index) => (
          <CrowdfundingCard
            key={`CrowdfundingCard${item.title}`}
            href="#"
            imageProps={{
              src: item.imageSrc,
              alt: 'Image alt',
              backgroundColor: '#d8d8d8',
              color: '#333',
            }}
            avatarProps={{
              src: item.thumbSrc,
              alt: 'Avatar alt',
            }}
            ownerTitle="Title"
            ownerDescription="Custom description"
            titleProps={{
              tag: 'h4',
            }}
            cardTitle={item.title}
            cardSubTitle="Custom subtitle"
            titlesMinHeight
            progress="84"
            state="Custom state"
          />
        ))}
      </Carousel>
    </StoryContainer>
  ))
  .add('in nested grid', () => (
    <SmallStoryContainer>
      <Carousel
        itemMinWidth={number('itemMinWidth', 280)}
        baseItemMarginBetween={number(
          'baseItemMarginBetween',
          CONTAINER_PADDING,
        )}
        paginationPosition={object('paginationPosition', paginationPosition)}
      >
        {data.map((item, index) => (
          <CrowdfundingCard
            key={item.title}
            href="#"
            imageProps={{
              src: item.imageSrc,
              alt: 'Image alt',
              backgroundColor: '#d8d8d8',
              color: '#333',
            }}
            avatarProps={{
              src: item.thumbSrc,
              alt: 'Avatar alt',
            }}
            ownerTitle="Title"
            ownerDescription="Custom description"
            titleProps={{
              tag: 'h4',
            }}
            cardTitle={item.title}
            cardSubTitle="Custom subtitle"
            titlesMinHeight
            progress="84"
            state="Custom state"
          />
        ))}
      </Carousel>
    </SmallStoryContainer>
  ))

  .add('custom scroll', () => (
    <StoryContainer>
      <Carousel
        itemMinWidth={number('itemMinWidth', 110)}
        baseItemMarginBetween={number('baseItemMarginBetween', 20)}
        paginationPosition={object(
          'paginationPosition',
          paginationRightPosition,
        )}
        hidePaginationOnTablet
      >
        {data.map((item, index) => (
          <div
            key={item.title}
            style={{
              backgroundColor: `${item.color}`,
              height: '200px',
            }}
          >
            {item.title}
          </div>
        ))}
      </Carousel>
    </StoryContainer>
  ))
