import React from 'react'
import styled from 'styled-components'
import {
  pxToRem,
  Title,
  Text,
  Button,
  ScreenConfig,
} from 'kitten'

const HeroWrapper = styled.section`
  display: flex;
  max-width: ${pxToRem(1440)};
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    flex-direction: column-reverse;
  }

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    .kiss-Homepage__hero__main {
      box-sizing: border-box;
      padding: ${pxToRem(30)} ${pxToRem(20)};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: ${pxToRem(20)};
    }
  }
  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    .kiss-Homepage__hero__main {
      width: 50vw;
      padding: 2vw calc(40vw * 0.125);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: ${pxToRem(20)};
    }
  }

  .kiss-Homepage__hero__img {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    display: block;
  
    img {
      display: block;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    .kiss-Homepage__hero__img {    
      img {
        display: block;
        max-height: ${pxToRem(360)};
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="kiss-Homepage__hero__main">
        <Title noMargin modifier="secondary">
          Financez vos projets grâce à votre communauté et
          nos 2,6 millions de membres.
        </Title>
        <Text size="large" className="k-u-padding-right-decuple@sm-up">
          <span>
            Nous avons déjà aidé 26 526 projets de
            créateurs et entrepreneurs à voir le jour.
            Et si c’était votre tour&nbsp;?
          </span>
        </Text>
        <Button modifier="helium">Voir les offres</Button>
      </div>
      <div className="kiss-Homepage__hero__img">
        <img alt="" src="/kitten-3.jpg" />
      </div>
    </HeroWrapper>
  )
}

export default Hero
