import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Title,
  CarouselNext,
  Text,
  Container,
  useWindowWidth,
  mq,
  pxToRem,
  ScreenConfig,
} from 'kitten'

const ChallengesWrapper = styled.section`
  background-color: var(--color-grey-100);
  padding: ${pxToRem(110)} 0 ${pxToRem(150)};

  .k-Title {
    max-width: ${pxToRem(810)};
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
    @media ${mq.tabletAndDesktop} {
      display: grid;
      grid-template-columns: 1fr auto 1fr;

      & > :first-child {
        grid-column: 2 / span 1;
      }
      & > :last-child {
        grid-column: 3 / span 1;
        justify-self: end;
      }
    }
  }

  .kiss-Homepage__challenges__challengeCard {
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
    height: 100%;

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

const Challenges = () => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <ChallengesWrapper>
      <Title
        modifier="tertiary"
        className="k-u-margin-top-none k-u-margin-horizontal-auto k-u-margin-bottom-doubleHalf k-u-align-center"
      >
        Choisir KissKissBankBank, c’est booster sa campagne en participant à nos
        appels à projet.
      </Title>

      <div>
        <Container className="kiss-Homepage__challenges__carouselHead">
          <Text
            tag="p"
            className="k-u-margin-none k-u-margin-vertical-double@xs-down k-u-center"
            size="large"
          >
            En ce moment&nbsp;:
          </Text>
          <CarouselNext.Navigation
            {...navProps}
            buttonProps={{ size: 'small' }}
            className="k-u-hidden@xs-down"
          />
        </Container>
        <CarouselNext
          baseGap={30}
          itemsPerPage={windowWidth <= ScreenConfig.XS.max ? 1 : 3}
          itemMinWidth={0}
          viewportIsXSOrLess={windowWidth <= ScreenConfig.XS.max}
          viewportIsMOrLess={windowWidth <= ScreenConfig.M.max}
          navigationPropsGetter={setNavProps}
          showOtherPages
          shadowSize={windowWidth <= ScreenConfig.XS.max ? 15 : 30}
        >
          {data.map((item, index) => (
            <CardComponent item={item} key={index} />
          ))}
        </CarouselNext>
      </div>
    </ChallengesWrapper>
  )
}

const CardComponent = ({ item }) => (
  <a href="#" className="kiss-Homepage__challenges__challengeCard">
    <img src={item.image} alt="" />
    <Title tag="h2" modifier="septenary" className="k-u-margin-none">
      {item.title}
    </Title>
    <Text size="small">{item.text}</Text>
  </a>
)

const data = [
  {
    image: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    title: 'Aenean lacinia bibendum nulla sed consectetur.',
    text:
      'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    image: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    title: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    text:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
  },
  {
    image: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    title:
      'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
    text:
      'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
  },
  {
    image: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    title: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    text:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
  },
  {
    image: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    title: 'Aenean lacinia bibendum nulla sed consectetur.',
    text:
      'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    image: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    title: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    text:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
  },
  {
    image: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    title:
      'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
    text:
      'Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
  },
  {
    image: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    title: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    text:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
  },
]

export default Challenges
