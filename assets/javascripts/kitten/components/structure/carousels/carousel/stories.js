import React from 'react'
import { Carousel } from './index'
import {
  ProjectCard,
  CONTAINER_PADDING,
  Grid,
  GridCol,
  EngagementCard,
  PhoneIllustration,
  pxToRem,
  ScreenConfig,
  Text,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import styled from 'styled-components'

const args = {
  itemsPerPage: 0,
  itemMinWidth: 280,
  hidePaginationOnMobile: false,
  hidePagination: false,
  showOtherPages: false,
  pagesClassName: '',
  preferCompletePaginationOnMobile: false,
  paginationPosition: {
    default: 'right',
    fromM: 'bottom',
  },
  prevButtonText: 'Previous items',
  nextButtonText: 'Next items',
  pageClickText: page => {
    return `Page ${page}`
  },
  firstButtonText: 'First items',
  lastButtonText: 'Last items',
  showPageSquares: false,
  smallButtons: false,
  loop: false,
  exportVisibilityProps: false,
  baseItemMarginBetween: CONTAINER_PADDING,
  shadowSize: 30,
}

export default {
  component: Carousel,
  title: 'Structure/Carousels/Carousel',
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
  decorators: [story => <div className="story-Container">{story()}</div>],
  argTypes: {
    itemMinWidth: { control: 'number' },
    itemsPerPage: { control: 'number' },
    baseItemMarginBetween: { control: 'number' },
    hidePaginationOnMobile: { control: 'boolean' },
    hidePagination: { control: 'boolean' },
    showOtherPages: { control: 'boolean' },
    pagesClassName: { control: 'text' },
    preferCompletePaginationOnMobile: { control: 'boolean' },
    paginationPosition: { control: 'object' },
    prevButtonText: { control: 'text' },
    nextButtonText: { control: 'text' },
    pageClickText: { control: null },
    smallButtons: { control: 'boolean' },
    firstButtonText: { control: 'text' },
    lastButtonText: { control: 'text' },
    showPageSquares: { control: 'boolean' },
    loop: { control: 'boolean' },
    exportVisibilityProps: { control: 'boolean' },
    shadowSize: { control: 'number' },
  },
  args,
}

const data = [
  {
    title: 'Item A',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item B with a pretty long title on two lines',
    imageSrc: '/kitten-2.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item C',
    imageSrc: '/kitten-3.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item D',
    imageSrc: '/kitten-4.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title:
      'Item Ewith the longest title ever in all the world, three lines for sure',
    imageSrc: '/kitten-5.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item F',
    imageSrc: '/kitten-6.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item G',
    imageSrc: '/kitten-7.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item H',
    imageSrc: '/kitten-8.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item I',
    imageSrc: '/kitten-9.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item J',
    imageSrc: '/kitten-0.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item K',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
]

export const Default = args => (
  <Carousel {...args}>
    {data.map(item => (
      <CardComponent item={item} />
    ))}
  </Carousel>
)

export const WithSpecificColNumber = Default.bind({})
WithSpecificColNumber.args = {
  ...args,
  itemsPerPage: 2,
  itemMinWidth: 0,
}

export const InNestedGrid = args => (
  <Grid>
    <GridCol col="10" offset="1">
      <Grid>
        <GridCol col="8" offset="2">
          <Carousel {...args}>
            {data.map(item => (
              <CardComponent item={item} />
            ))}
          </Carousel>
        </GridCol>
      </Grid>
    </GridCol>
  </Grid>
)

export const WithPassedProps = args => (
  <Carousel {...args}>
    {data.map(item => (
      <ViewedCardComponent item={item} key={`ProjectCard${item.title}`} />
    ))}
  </Carousel>
)
WithPassedProps.args = {
  ...args,
  exportVisibilityProps: true,
}

const CardComponent = ({ item }) => (
  <ProjectCard
    key={`ProjectCard${item.title}`}
    href="#"
    imageProps={{
      src: item.imageSrc,
      alt: 'Image alt',
      backgroundColor: '#d8d8d8',
      color: '#333',
    }}
    stretch
  >
    <ProjectCard.Title>{item.title}</ProjectCard.Title>
    <ProjectCard.Line>
      <em>subtitle</em>
    </ProjectCard.Line>

    <ProjectCard.ItemsLine>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="small">
          134
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          contributeurs
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="small">
          7 jours
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          restants
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="small">
          9 930 €
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          sur 12 000 €
        </Text>
      </ProjectCard.Item>
    </ProjectCard.ItemsLine>

    <ProjectCard.Progress aria-label="Progrès de la campagne" value="84" />
  </ProjectCard>
)

const ViewedCardComponent = ({ item, hasPageBeenViewed, isActivePage }) => (
  <ProjectCard
    key={`ProjectCard${item.title}`}
    href="#"
    imageProps={{
      src: hasPageBeenViewed ? item.imageSrc : null,
      alt: 'Image alt',
      backgroundColor: '#d8d8d8',
      color: '#333',
    }}
    sticker={hasPageBeenViewed ? 'Viewed' : 'Not viewed'}
    stretch
  >
    <ProjectCard.Title>{item.title}</ProjectCard.Title>
    <ProjectCard.Line>
      <em>{isActivePage ? 'Is active page' : 'Inactive page'}</em>
    </ProjectCard.Line>

    <ProjectCard.ItemsLine>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="small">
          134
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          contributeurs
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="small">
          7 jours
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          restants
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="small">
          9 930 €
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          sur 12 000 €
        </Text>
      </ProjectCard.Item>
    </ProjectCard.ItemsLine>

    <ProjectCard.Progress aria-label="Progrès de la campagne" value="84" />
  </ProjectCard>
)

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

const StyledContainer = styled.div`
  margin: ${pxToRem(20)} ${pxToRem(-40)};
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

export const EngagementsCarousel = args => (
  <StyledContainer>
    <Carousel
      {...args}
      shadowSize={0}
      paginationPosition={{ default: 'bottom' }}
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
EngagementsCarousel.args = {
  ...args,
  itemMinWidth: 110,
  hidePaginationOnMobile: true,
  baseItemMarginBetween: 20,
  paginationPosition: { default: 'right' },
  showOtherPages: true,
}
