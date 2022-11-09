import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Title,
  Text,
  Container,
  mq,
  pxToRem,
  CarouselNext,
  useWindowWidth,
  ScreenConfig,
} from 'kitten'

const ChallengesWrapper = styled.section`
  background-color: var(--color-grey-100);
  margin-top: ${pxToRem(-50)}; 
  padding: ${pxToRem(110)} 0 ${pxToRem(90)};

  @media ${mq.mobile} {
    padding: ${pxToRem(50)} 0 ${pxToRem(50)};
  }
   
  }
  .k-Title {
    @media ${mq.mobile} {
      margin: 0 ${pxToRem(20)};
    }

    max-width: ${pxToRem(790)};
    margin: 0 auto ${pxToRem(50)};
    text-align: center;
  }

  .k-CarouselNext--showOtherPages .k-CarouselNext__inner {
    --container-padding: ${pxToRem(50 - 4)};

    @media ${mq.tabletAndDesktop} {
      --container-padding: 15vw;
    }
  }

  .k-CarouselNext__page {
    height: 100% !important;
  }

  .kiss-Homepage__challenges__carouselHead {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${pxToRem(30)};
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    max-width: ${pxToRem(1440)};
  }

  .kiss-Homepage__challenges__challengeCard__item {
    display: flex;
    box-sizing: border-box;
    background-color: var(--color-grey-000);
    box-shadow: var(--box-shadow-m);
    border-radius: var(--border-radius-m);
    padding: ${pxToRem(20)};
    flex-direction: column;
    gap: ${pxToRem(20)};
    transition: box-shadow var(--transition);
    text-decoration: none;
    color: var(--color-grey-900);
    overflow: hidden;

    &:hover,
    &:focus {
      box-shadow: var(--box-shadow-hover-m);
    }

    img {
      aspect-ratio: 2 / 1;
      object-fit: cover;
      object-position: center;
      margin: ${pxToRem(-20)} ${pxToRem(-20)} 0;
    }
  }
`

const data = [
  {
    item: '1',
    thumbSrc: '/kitten-2.jpg',
    imageSrc: '/kitten-2.jpg',
    title: 'Aenean lacinia bibendum nulla sed consectetur',
    description: 'Aenean lacinia bibendum nulla sed consectetur',
  },
  {
    item: '2',
    thumbSrc: '/kitten-2.jpg',
    imageSrc: '/kitten-2.jpg',
    title: 'Aenean lacinia bibendum nulla sed consectetur',
    description: 'Aenean lacinia bibendum nulla sed consectetur',
  },
  {
    item: '3',
    thumbSrc: '/kitten-2.jpg',
    imageSrc: '/kitten-2.jpg',
    title: 'Aenean lacinia bibendum nulla sed consectetur',
    description: 'Aenean lacinia bibendum nulla sed consectetur',
  },
  {
    item: '4',
    thumbSrc: '/kitten-2.jpg',
    imageSrc: '/kitten-2.jpg',
    title: 'Aenean lacinia bibendum nulla sed consectetur',
    description: 'Aenean lacinia bibendum nulla sed consectetur',
  },
  {
    item: '5',
    thumbSrc: '/kitten-2.jpg',
    imageSrc: '/kitten-2.jpg',
    title: 'Aenean lacinia bibendum nulla sed consectetur',
    description: 'Aenean lacinia bibendum nulla sed consectetur',
  },
  {
    item: '6',
    thumbSrc: '/kitten-2.jpg',
    imageSrc: '/kitten-2.jpg',
    title: 'Aenean lacinia bibendum nulla sed consectetur',
    description: 'Aenean lacinia bibendum nulla sed consectetur',
  }
]

const ChallengeCardComponent = ({ item }) => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <a 
      key={`ChallengeCard${item.item}`}
      href="#"
      className="kiss-Homepage__challenges__challengeCard__item"
    >
      <img
        src={item.imageSrc}
        alt="Image alt"
      />
      <Text size="large" weight="500">
        {item.title}
      </Text>
      <Text size="small">
        {item.description}
      </Text>
    </a>
  )
}

const Challenges = () => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <ChallengesWrapper>
      <Title
        tag="h2"
        modifier="tertiary"
        className="kiss-Homepage__challenges__title"
      >
        Choisir KissKissBankBank, c’est booster sa campagne en participant à nos
        appels à projet.
      </Title>
      <Container className="kiss-Homepage__challenges__carouselHead k-u-hidden@m-down">
        {data.map((item, index) => (
          <>
            <ChallengeCardComponent item={item} key={index} />
          </>
        ))}
      </Container>
      
      <Container>
        <CarouselNext.Navigation
          {...navProps}
          buttonProps={{ size: 'small' }}
          className="k-u-hidden@l-up k-u-flex-justifyContent-end k-u-margin-bottom-double"
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
        className="k-u-hidden@l-up"
      >
        {data.map((item, index) => (
          <>
            <ChallengeCardComponent item={item} key={index} />
          </>
        ))}
      </CarouselNext>
    </ChallengesWrapper>
  )
}

export default Challenges
