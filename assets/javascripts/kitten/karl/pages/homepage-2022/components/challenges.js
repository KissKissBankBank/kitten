import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Title,
  Text,
  Container,
  useWindowWidth,
  mq,
  pxToRem,
  ScreenConfig,
} from 'kitten'

const ChallengesWrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  max-width: ${pxToRem(1440)};
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
          <div>
            <a href="#" className="kiss-Homepage__challenges__challengeCard">
              <img src="/kitten-${Math.floor(Math.random() * 10)}.jpg" alt="" />
              <Title tag="h2" modifier="septenary" className="k-u-margin-none">
                Aenean lacinia bibendum nulla sed consectetur
              </Title>
              <Text size="small">
                Aenean lacinia bibendum nulla sed consectetur.
              </Text>
            </a>
          </div>
        </Container>
          
  
      </div>
    </ChallengesWrapper>
  )
}

export default Challenges
