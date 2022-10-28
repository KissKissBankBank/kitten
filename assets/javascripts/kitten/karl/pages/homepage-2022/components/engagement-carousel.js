import React, { useState } from 'react'
import styled from 'styled-components'
import {
  ProjectCard,
  Text,
  Title,
  pxToRem,
  mq,
  LongArrowIcon,
  CarouselNext,
  useWindowWidth,
  ScreenConfig,
  Container,
} from 'kitten'

const EngagementsWrapper = styled.section`
  color: var(--color-grey-000);
  background-color: var(--color-grey-900);

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
  padding: 0;
  overflow: hidden;
  
  @media ${mq.desktop} {
    padding: 0 ${pxToRem(120)};
    gap: ${pxToRem(100)};
  }

  .kiss-Homepage__engagements__blockWrapper {
    position: relative;
    max-width: ${pxToRem(1440)};
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;

    .kiss-Homepage__engagements__graphic {
      position: absolute;
      z-index: 1;
      @media ${mq.mobile} {
        display: none;
      }
    }

    .kiss-Homepage__engagements__heart {
      width: ${pxToRem(450)};
      transform: rotate(-30deg);
      top: 55%;
      left: -12%;
    }
    .kiss-Homepage__engagements__bolt {
      height: ${pxToRem(580)};
      transform: rotate(-15deg);
      top: 5%;
      right: -20%;
    }
    .kiss-Homepage__engagements__invader {
      width: ${pxToRem(410)};
      transform: rotate(-15deg);
      top: -7%;
      left: -15%;
    }
  }

  .kiss-Homepage__engagements__block {
    position: relative;
    z-index: 2;

    & > * {
      @media ${mq.desktop} {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
  .kiss-Homepage__engagements__block__link {
    display: inline-flex;
    align-items: center;

    // @media ${mq.tablet} {
    //   display: flex;
    // }

    @media ${mq.mobile} {
      display: none;
    }
  }

  .k-CarouselNext--showOtherPages .k-CarouselNext__inner {
    --container-padding: ${pxToRem(20)};

    @media ${mq.desktop} {
      --container-padding: ${pxToRem(150)};
    }
  }

  .k-CarouselNext__page {
    height: 100% !important;
  }
`

const data = [
  {
    item: '1',
    thumbSrc: '/kitten-1.jpg',
    imageSrc: '/kitten-1.jpg',
    sticker: 'Prolongation',
    projectName: 'The Office, la série culte',
    name: 'Bidules',
    contributeurs: '134',
    restants: '7 jours',
    montant: '9 930 €',
    progress: '55',
  },
  {
    item: '2',
    thumbSrc: '/kitten-2.jpg',
    imageSrc: '/kitten-2.jpg',
    sticker: 'Prolongation',
    projectName: 'The Office, la série culte',
    name: 'Bidules',
    contributeurs: '134',
    restants: '7 jours',
    montant: '9 930 €',
    progress: '55',
  },
  {
    item: '3',
    thumbSrc: '/kitten-3.jpg',
    imageSrc: '/kitten-3.jpg',
    sticker: 'Prolongation',
    projectName: 'The Office, la série culte',
    name: 'Bidules',
    contributeurs: '134',
    restants: '7 jours',
    montant: '9 930 €',
    progress: '55',
  }
]

const EngagementCardComponent = ({ item }) => (
  <ProjectCard
    key={`ProjectCard${item.item}`}
    aria-label=""
    href=""
    colorMode="dark"
    hoverableTitle
    imageProps={{
      src: item.imageSrc,
      alt: '',
    }}
  >
    <ProjectCard.Sticker className="k-u-transform-capitalize k-u-hidden@xs-down">
      {item.sticker}
    </ProjectCard.Sticker>
    <ProjectCard.Title>
      {item.projectName}
    </ProjectCard.Title>
    <ProjectCard.Line>
      <Text size="micro">
        par <strong className="k-u-weight-700">{item.name}</strong>
      </Text>
    </ProjectCard.Line>
    <ProjectCard.ItemsLine>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" size="small" weight="700">
          {item.contributeurs}
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          contributeurs
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" size="small" weight="700">
          {item.restants}
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          restants
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-nowrap" size="small" weight="700">
          {item.restants}
        </Text>
        <Text className="k-u-nowrap" size="micro">
          sur{' '}{item.montant}
        </Text>
      </ProjectCard.Item>
    </ProjectCard.ItemsLine>
    <ProjectCard.Progress
      aria-label="Progrès de la campagne"
      value={item.progress}
    />
  </ProjectCard>
)

const EngagementBlock = () => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <div className="kiss-Homepage__engagements__block">
      <Title
        tag="h2"
        modifier="secondary"
        noMargin
        cssColor="inherit"
        className="k-u-margin-bottom-single k-u-padding-horizontal-double@m-down"
      >
        Luttons contre les discriminations
      </Title>
      <Container className="k-u-flex k-u-flex-justifyContent-sb k-u-margin-bottom-triple">
        <Text cssColor="inherit" size="small">
          Il n’y a pas de monde juste blablabla bla bla bla.
        </Text>
        <Text
          cssColor="inherit"
          size="small"
          weight="500"
          className="kiss-Homepage__engagements__block__link k-u-link k-u-link-background1"
          tag="a"
          href="#1"
        >
          <LongArrowIcon color="currentColor" height="16" className="k-u-margin-right-noneHalf" />
          Voir plus de projets engagés
        </Text>
        <CarouselNext.Navigation
          {...navProps}
          buttonProps={{ size: 'small' }}
          className="k-u-hidden@l-up"
        />
      </Container>
      
      <CarouselNext
        baseGap={30}
        itemsPerPage={windowWidth <= ScreenConfig.XS.max ? 1 : 3}
        itemMinWidth={windowWidth <= ScreenConfig.XS.max ? 200 : 300}
        viewportIsXSOrLess={windowWidth <= ScreenConfig.XS.max}
        viewportIsMOrLess={windowWidth <= ScreenConfig.M.max}
        navigationPropsGetter={setNavProps}
        showOtherPages={windowWidth <= ScreenConfig.M.min ? true : false}
        shadowSize={windowWidth <= ScreenConfig.XS.max ? 15 : 30}
      >
        {data.map((item, index) => (
          <>
            <EngagementCardComponent item={item} key={index} />
          </>
        ))}
      </CarouselNext>
      
    </div>
  )
}

const EngagementCarousel = () => {
  return (
    <EngagementsWrapper>
      <div className="kiss-Homepage__engagements__blockWrapper">
        <svg
          className="kiss-Homepage__engagements__graphic kiss-Homepage__engagements__heart"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 148 127"
        >
          <path
            fill="#2d2d2d"
            d="M37.07.1A37.12 37.12 0 0 0 10.2 62.8l63.58 63.41 61.65-61.84a37 37 0 0 0 11.92-27.31 37.13 37.13 0 0 0-73.7-6.28A37.09 37.09 0 0 0 37.07.1Z"
          />
        </svg>
        <EngagementBlock />
      </div>
      <div className="kiss-Homepage__engagements__blockWrapper">
        <svg
          className="kiss-Homepage__engagements__graphic kiss-Homepage__engagements__bolt"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 462 587"
        >
          <path
            fill="#2d2d2d"
            d="M461.97 29.06 244.17 0 0 365.06h141.38L82.52 586.13l322.5-322.06H251.58l210.4-235.01Z"
          />
        </svg>
        <EngagementBlock />
      </div>
      <div className="kiss-Homepage__engagements__blockWrapper">
        <svg
          className="kiss-Homepage__engagements__graphic kiss-Homepage__engagements__invader"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 107 125"
        >
          <path
            fill="#2d2d2d"
            d="M106.17 18.72a61.83 61.83 0 1 0 0 87.45L62.44 62.45l43.73-43.73Z"
          />
        </svg>
        <EngagementBlock />
      </div>
    </EngagementsWrapper>
  )
}

export default EngagementCarousel
