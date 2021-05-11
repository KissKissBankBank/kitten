import React from 'react'
import { number, object, boolean } from '@storybook/addon-knobs'
import { Carousel } from './index'
import {
  CrowdfundingCard,
  CONTAINER_PADDING,
  Marger,
  Container,
  Grid, GridCol
} from '../../../..'

export default {
  component: Default,
  title: 'Molecules/Carousels/Carousel/ProjectCarousel',
  parameters: {
    component: Default,
  },
}

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

const LegacyStoryContainer = ({ children }) => (
  <Container fullWidthBelowScreenSize="M">
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

const InNestedGridStoryContainer = ({ children }) => (
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
  },
  {
    title: 'Item B',
    imageSrc: 'http://placekitten.com/501/301',
    thumbSrc: 'http://placekitten.com/81/81',
  },
  {
    title: 'Item C',
    imageSrc: 'http://placekitten.com/502/302',
    thumbSrc: 'http://placekitten.com/82/82',
  },
  {
    title: 'Item D',
    imageSrc: 'http://placekitten.com/503/303',
    thumbSrc: 'http://placekitten.com/83/83',
  },
  {
    title: 'Item E',
    imageSrc: 'http://placekitten.com/504/304',
    thumbSrc: 'http://placekitten.com/84/84',
  },
  {
    title: 'Item F',
    imageSrc: 'http://placekitten.com/502/302',
    thumbSrc: 'http://placekitten.com/82/82',
  },
  {
    title: 'Item G',
    imageSrc: 'http://placekitten.com/503/303',
    thumbSrc: 'http://placekitten.com/83/83',
  },
  {
    title: 'Item H',
    imageSrc: 'http://placekitten.com/504/304',
    thumbSrc: 'http://placekitten.com/84/84',
  },
  {
    title: 'Item I',
    imageSrc: 'http://placekitten.com/502/302',
    thumbSrc: 'http://placekitten.com/82/82',
  },
  {
    title: 'Item J',
    imageSrc: 'http://placekitten.com/503/303',
    thumbSrc: 'http://placekitten.com/83/83',
  },
  {
    title: 'Item K',
    imageSrc: 'http://placekitten.com/504/304',
    thumbSrc: 'http://placekitten.com/84/84',
  },
]

const paginationPosition = {
  default: 'bottom',
  fromL: 'left',
}

export const Default = () => (
  <StoryContainer>
    <Carousel
      tinyButtons={boolean('Button tiny size', false)}
      itemMinWidth={number('itemMinWidth', 280)}
      baseItemMarginBetween={number('baseItemMarginBetween', CONTAINER_PADDING)}
      paginationPosition={object('paginationPosition', paginationPosition)}
      showPageSquares={boolean('showPageSquares', false)}
      loop={boolean('loop', false)}
      hidePaginationOnMobile={boolean('hidePaginationOnMobile', false)}
      hidePagination={boolean('hidePagination', false)}
      showOtherPages={boolean('showOtherPages', false)}
      preferCompletePaginationOnMobile={boolean(
        'preferCompletePaginationOnMobile',
        false,
      )}
    >
      {data.map(item => (
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
          progress={84}
          state="Custom state"
        />
      ))}
    </Carousel>
  </StoryContainer>
)

export const WithSpecificColNumber = () => (
  <StoryContainer>
    <Carousel
      tinyButtons={boolean('Button tiny size', false)}
      itemMinWidth={0}
      itemsPerPage={number('itemsPerPage', 1)}
      baseItemMarginBetween={number('baseItemMarginBetween', CONTAINER_PADDING)}
      paginationPosition={object('paginationPosition', paginationPosition)}
      showPageSquares={boolean('showPageSquares', false)}
      loop={boolean('loop', false)}
      hidePaginationOnMobile={boolean('hidePaginationOnMobile', false)}
      hidePagination={boolean('hidePagination', false)}
      showOtherPages={boolean('showOtherPages', false)}
      preferCompletePaginationOnMobile={boolean(
        'preferCompletePaginationOnMobile',
        false,
      )}
    >
      {data.map(item => (
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
          progress={84}
          state="Custom state"
        />
      ))}
    </Carousel>
  </StoryContainer>
)

export const InNestedGrid = () => (
  <InNestedGridStoryContainer>
    <Carousel
      itemMinWidth={number('itemMinWidth', 280)}
      baseItemMarginBetween={number('baseItemMarginBetween', CONTAINER_PADDING)}
      paginationPosition={object('paginationPosition', paginationPosition)}
    >
      {data.map(item => (
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
          progress={84}
          state="Custom state"
        />
      ))}
    </Carousel>
  </InNestedGridStoryContainer>
)

export const InLegacyGrid = () => (
  <LegacyStoryContainer>
    <Carousel
      withoutLeftOffset={boolean('Without left offset', false)}
      tinyButtons={boolean('Button tiny size', false)}
      itemMinWidth={number('itemMinWidth', 280)}
      baseItemMarginBetween={number('baseItemMarginBetween', CONTAINER_PADDING)}
      paginationPosition={object('paginationPosition', paginationPosition)}
      showPageSquares={boolean('showPageSquares', false)}
      loop={boolean('loop', false)}
      data={data}
      renderItem={({ item }) => (
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
          progress={84}
          state="Custom state"
        />
      )}
    />
  </LegacyStoryContainer>
)

export const WithPassedProps = () => (
  <StoryContainer>
    <Carousel
      tinyButtons={boolean('Button tiny size', false)}
      itemMinWidth={number('itemMinWidth', 280)}
      baseItemMarginBetween={number('baseItemMarginBetween', CONTAINER_PADDING)}
      paginationPosition={object('paginationPosition', paginationPosition)}
      showPageSquares={boolean('showPageSquares', false)}
      loop={boolean('loop', false)}
      exportVisibilityProps
    >
      {data.map(item => (
        <CardComponent item={item} key={`CrowdfundingCard${item.title}`} />
      ))}
    </Carousel>
  </StoryContainer>
)

const CardComponent = ({ item, hasPageBeenViewed, isActivePage }) => (
  <CrowdfundingCard
    href="#"
    imageProps={{
      src: hasPageBeenViewed ? item.imageSrc : null,
      alt: 'Image alt',
      backgroundColor: '#d8d8d8',
      color: '#333',
    }}
    avatarProps={{
      src: item.thumbSrc,
      alt: 'Avatar alt',
    }}
    ownerTitle="Was the page viewed?"
    ownerDescription={hasPageBeenViewed ? 'Viewed' : 'Not viewed'}
    titleProps={{
      tag: 'h4',
    }}
    cardTitle={item.title}
    cardSubTitle={isActivePage ? 'Is active page' : 'Inactive page'}
    titlesMinHeight
    progress={84}
    state="Custom state"
  />
)
