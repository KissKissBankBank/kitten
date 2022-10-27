import React from 'react'
import styled from 'styled-components'
import {
  Title,
  Text,
  Container,
  mq,
  pxToRem,
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
    max-width: ${pxToRem(790)};
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
      grid-template-columns: 1fr 1fr 1fr;
      gap: ${pxToRem(30)};
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
      max-width: ${pxToRem(1440)};
    }
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
  return (
    <ChallengesWrapper>
      <Title
        tag="h2"
        modifier="tertiary"
        className="k-u-margin-top-none k-u-margin-horizontal-auto k-u-margin-bottom-quintuple k-u-align-center"
      >
        Choisir KissKissBankBank, c’est booster sa campagne en participant à nos
        appels à projet.
      </Title>
      <Container className="kiss-Homepage__challenges__carouselHead">
        <a href="#" className="kiss-Homepage__challenges__challengeCard__item">
          <img src="/kitten-1.jpg" alt="" />
          <Text size="large" weight="500">
            Aenean lacinia bibendum nulla sed consectetur
          </Text>
          <Text size="small">
            Aenean lacinia bibendum nulla sed consectetur.
          </Text>
        </a>
        <a href="#" className="kiss-Homepage__challenges__challengeCard__item">
          <img src="/kitten-2.jpg" alt="" />
          <Text size="large" weight="500">
            Aenean lacinia bibendum nulla sed consectetur
          </Text>
          <Text size="small">
            Aenean lacinia bibendum nulla sed consectetur.
          </Text>
        </a>
        <a href="#" className="kiss-Homepage__challenges__challengeCard__item">
          <img src="/kitten-3.jpg" alt="" />
          <Text size="large" weight="500">
            Aenean lacinia bibendum nulla sed consectetur
          </Text>
          <Text size="small">
            Aenean lacinia bibendum nulla sed consectetur.
          </Text>
        </a>

        <a href="#" className="kiss-Homepage__challenges__challengeCard__item">
          <img src="/kitten-4.jpg" alt="" />
          <Text size="large" weight="500">
            Aenean lacinia bibendum nulla sed consectetur
          </Text>
          <Text size="small">
            Aenean lacinia bibendum nulla sed consectetur.
          </Text>
        </a>
        <a href="#" className="kiss-Homepage__challenges__challengeCard__item">
          <img src="/kitten-5.jpg" alt="" />
          <Text size="large" weight="500">
            Aenean lacinia bibendum nulla sed consectetur
          </Text>
          <Text size="small">
            Aenean lacinia bibendum nulla sed consectetur.
          </Text>
        </a>
        <a href="#" className="kiss-Homepage__challenges__challengeCard__item">
          <img src="/kitten-6.jpg" alt="" />
          <Text size="large" weight="500">
            Aenean lacinia bibendum nulla sed consectetur
          </Text>
          <Text size="small">
            Aenean lacinia bibendum nulla sed consectetur.
          </Text>
        </a>
      </Container>
    </ChallengesWrapper>
  )
}

export default Challenges
