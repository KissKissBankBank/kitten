import {
  Button,
  CarouselNext,
  Container,
  mq,
  ProjectCard,
  pxToRem,
  ScreenConfig,
  Text,
  useWindowWidth,
} from 'kitten'
import React, { useState } from 'react'
import styled from 'styled-components'

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
    title: 'Item E',
    imageSrc: '/kitten-5.jpg',
    thumbSrc: '/kitten-5.jpg',
  },
  {
    title: 'Item F',
    imageSrc: '/kitten-6.jpg',
    thumbSrc: '/kitten-6.jpg',
  },
  {
    title: 'Item I',
    imageSrc: '/kitten-7.jpg',
    thumbSrc: '/kitten-7.jpg',
  },
  {
    title: 'Item J',
    imageSrc: '/kitten-8.jpg',
    thumbSrc: '/kitten-8.jpg',
  },
  {
    title: 'Item K',
    imageSrc: '/kitten-9.jpg',
    thumbSrc: '/kitten-9.jpg',
  },
  {
    title: 'Item L',
    imageSrc: '/kitten-0.jpg',
    thumbSrc: '/kitten-0.jpg',
  },
  {
    title: 'Item M',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: '/kitten-1.jpg',
  },
  {
    title: 'Item N',
    imageSrc: '/kitten-2.jpg',
    thumbSrc: '/kitten-2.jpg',
  },
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
      <Text>subtitle</Text>
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

const ProjectCarousel = () => (
  <StyledWrapper>
    <CarouselBlock title="Les projets populaires" />
    <Button className="k-u-alignSelf-center" tag="a" href="#">
      Voir plus de projets
    </Button>
  </StyledWrapper>
)

const CarouselBlock = ({ title }) => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <div>
      <Container className="k-u-flex k-u-flex-alignItems-center k-u-flex-justifyContent-sb k-u-flex-gap-double">
        <Text
          tag="h2"
          className="k-u-margin-none k-u-margin-vertical-double@xs-down"
          weight="500"
          transform="uppercase"
          letterSpacing="10%"
          size="small"
        >
          {title}
        </Text>
        <CarouselNext.Navigation
          {...navProps}
          buttonProps={{ size: 'small' }}
        />
      </Container>
      <CarouselNext
        baseGap={30}
        cycle
        itemsPerPage={windowWidth <= ScreenConfig.XS.max ? 1 : 3}
        itemMinWidth={windowWidth <= ScreenConfig.XS.max ? 200 : 300}
        viewportIsXSOrLess={windowWidth <= ScreenConfig.XS.max}
        viewportIsMOrLess={windowWidth <= ScreenConfig.M.max}
        navigationPropsGetter={setNavProps}
        showOtherPages
        shadowSize={windowWidth <= ScreenConfig.XS.max ? 10 : 30}
      >
        {data.map((item, index) => (
          <>
            <CardComponent item={item} key={index} />
          </>
        ))}
      </CarouselNext>
    </div>
  )
}

const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(40)};
  padding-bottom: ${pxToRem(50)};

  & > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    z-index: 1;
    display: block;
    content: '';
    position: absolute;
    background-color: var(--color-grey-000);
    // height: ${pxToRem(310)};
    width: 100%;
    left: 0;
    top: 0;
    clip-path: polygon(0 -1px, 100% -1px, 100% 100%, 0 50%);
  }

  .k-CarouselNext--showOtherPages .k-CarouselNext__inner {
    --container-padding: ${pxToRem(50)};

    @media ${mq.tabletAndDesktop} {
      --container-padding: ${pxToRem(150)};
    }
  }

  .k-CarouselNext__page {
    height: 100% !important;
  }
`

export default ProjectCarousel
