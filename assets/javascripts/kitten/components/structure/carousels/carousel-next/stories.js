import React, { useState } from 'react'
import styled from 'styled-components'
import { CarouselNext } from './index'
import {
  ProjectCard,
  CONTAINER_PADDING,
  ScreenConfig,
  Text,
  useWindowWidth,
  mq,
  pxToRem,
  Container,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'

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
  baseGap: CONTAINER_PADDING,
  shadowSize: 30,
}

export default {
  component: CarouselNext,
  title: 'Structure/Carousels/CarouselNext',
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
          importString="CarouselNext"
        />
      ),
    },
  },
  argTypes: {
    itemMinWidth: { control: 'number' },
    itemsPerPage: { control: 'number' },
    baseGap: { control: 'number' },
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
    thumbSrc: '/kitten-1.jpg',
  },
  {
    title: 'Item B with a pretty long title on two lines',
    imageSrc: '/kitten-2.jpg',
    thumbSrc: '/kitten-2.jpg',
  },
  {
    title: 'Item C',
    imageSrc: '/kitten-3.jpg',
    thumbSrc: '/kitten-3.jpg',
  },
  {
    title: 'Item D',
    imageSrc: '/kitten-4.jpg',
    thumbSrc: '/kitten-4.jpg',
  },
  {
    title:
      'Item Ewith the longest title ever in all the world, three lines for sure',
    imageSrc: '/kitten-5.jpg',
    thumbSrc: '/kitten-5.jpg',
  },
  {
    title: 'Item F',
    imageSrc: '/kitten-6.jpg',
    thumbSrc: '/kitten-6.jpg',
  },
  {
    title: 'Item G',
    imageSrc: '/kitten-7.jpg',
    thumbSrc: '/kitten-7.jpg',
  },
  {
    title: 'Item H',
    imageSrc: '/kitten-8.jpg',
    thumbSrc: '/kitten-8.jpg',
  },
  {
    title: 'Item I',
    imageSrc: '/kitten-9.jpg',
    thumbSrc: '/kitten-9.jpg',
  },
  {
    title: 'Item J',
    imageSrc: '/kitten-0.jpg',
    thumbSrc: '/kitten-0.jpg',
  },
  {
    title: 'Item K',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: '/kitten-1.jpg',
  },
  {
    title: 'Item L',
    imageSrc: '/kitten-2.jpg',
    thumbSrc: '/kitten-2.jpg',
  },
]

export const Default = args => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <>
      <CarouselNext.Navigation {...navProps} loop={args.loop} />
      <CarouselNext
        {...args}
        viewportIsXSOrLess={windowWidth <= ScreenConfig.XS.max}
        viewportIsMOrLess={windowWidth <= ScreenConfig.M.max}
        navigationPropsGetter={setNavProps}
      >
        {data.map((item, index) => (
          <CardComponent item={item} key={index} />
        ))}
      </CarouselNext>
    </>
  )
}

Default.decorators = [story => <div className="story-Container">{story()}</div>]

export const WithSpecificColNumber = Default.bind({})
WithSpecificColNumber.args = {
  ...args,
  itemsPerPage: 2,
  itemMinWidth: 0,
}

const StyledCarouselContainer = styled.div`
  margin: 2.5em 0;

  .k-CarouselNext--showOtherPages .k-CarouselNext__inner {
    --container-padding: ${pxToRem(40 - 4)};

    @media ${mq.tabletAndDesktop} {
      --container-padding: 15vw;
    }
  }

  .k-CarouselNext__page {
    height: 100% !important;
  }
`

export const ShowOtherPages = args => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <StyledCarouselContainer>
      <Container className="k-u-flex k-u-flex-alignItems-center k-u-flex-justifyContent-sb k-u-flex-gap-double">
        <h1 className="k-u-margin-none">La sélection de la semaine</h1>
        <CarouselNext.Navigation {...navProps} loop={args.loop} />
      </Container>
      <CarouselNext
        {...args}
        cycle
        itemsPerPage={windowWidth <= ScreenConfig.XS.max ? 1 : 3}
        itemMinWidth={0}
        viewportIsXSOrLess={windowWidth <= ScreenConfig.XS.max}
        viewportIsMOrLess={windowWidth <= ScreenConfig.M.max}
        navigationPropsGetter={setNavProps}
        showOtherPages
        shadowSize={windowWidth <= ScreenConfig.XS.max ? 10 : 30}
      >
        {data.map((item, index) => (
          <CardComponent item={item} key={index} />
        ))}
      </CarouselNext>
    </StyledCarouselContainer>
  )
}

export const WithPassedProps = args => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <>
      <CarouselNext.Navigation {...navProps} loop={args.loop} />
      <CarouselNext
        {...args}
        viewportIsXSOrLess={windowWidth <= ScreenConfig.XS.max}
        viewportIsMOrLess={windowWidth <= ScreenConfig.M.max}
        navigationPropsGetter={setNavProps}
      >
        {data.map((item, index) => (
          <ViewedCardComponent item={item} key={index} />
        ))}
      </CarouselNext>
    </>
  )
}
WithPassedProps.args = {
  ...args,
  exportVisibilityProps: true,
}
WithPassedProps.decorators = [
  story => <div className="story-Container">{story()}</div>,
]

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
        <Text className="k-u-ellipsis" weight="700" size="small">
          134
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          contributeurs
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="700" size="small">
          7 jours
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          restants
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="700" size="small">
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
        <Text className="k-u-ellipsis" weight="700" size="small">
          134
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          contributeurs
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="700" size="small">
          7 jours
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          restants
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="700" size="small">
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
