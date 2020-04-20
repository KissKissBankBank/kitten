import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, object, boolean } from '@storybook/addon-knobs'
import { CrowdfundingCard } from '../../../components/cards/crowdfunding-card'
import { Carousel } from './carousel'
import { CONTAINER_PADDING } from '../../../constants/grid-config'
import { Marger } from '../../../components/layout/marger'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { EngagementCard } from '../../../components/cards/engagement-card'
import { PhoneIllustration } from '../../../components/illustrations/phone-illustration'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

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
        showPageSquares={boolean('showPageSquares', false)}
        loop={boolean('loop', false)}
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
            progress="84"
            state="Custom state"
          />
        ))}
      </Carousel>
    </SmallStoryContainer>
  ))

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

  [class^='carousel-page']:hover > [class^='carousel-page'] a:hover {
    opacity: 1;
  }

  [class^='carousel-page']:hover > [class^='carousel-page'] a {
    opacity: 0.5;
  }
`

const StyledEngagementCard = styled(EngagementCard)`
  display: flex;
  height: ${pxToRem(130)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    height: ${pxToRem(140)};
  }
`

storiesOf('Carousel/EngagementsCarousel', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StyledContainer fullWidthBelowScreenSize="S">
        <Carousel
          itemMinWidth={110}
          hidePaginationOnMobile
          baseItemMarginBetween={20}
          paginationPosition={{ default: 'right' }}
          showOtherPages={boolean('Show other pages?', false)}
        >
          {engagementsData.map(({ bgColor, children }) => {
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
  })
