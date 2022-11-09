import React from 'react'
import {
  pxToRem,
  Title,
  Text,
  Button,
  WeirdIllustration,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const HeroWrapper = styled.section`
  display: flex;
  // padding-top: ${pxToRem(50)};
  // padding-right: ${pxToRem(100)};
  box-sizing: border-box;
  clip-path: circle(50% at 50% 50%);
  background-color: var(--color-primary-500);
  width: ${pxToRem(430)};
  height: ${pxToRem(860)};


  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    flex-direction: column-reverse;
  }

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    .kiss-Manifesto__hero__main {
      box-sizing: border-box;
      padding: ${pxToRem(30)} ${pxToRem(20)};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: ${pxToRem(20)};
    }
  }
  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    .kiss-Manifesto__hero__main {
      width: 50vw;
      padding: 2vw calc(40vw * 0.125);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: ${pxToRem(20)};
    }
  }

  // .kiss-Manifesto__hero__circle {
  //   width: ${pxToRem(430)};
  //   height: ${pxToRem(860)};
  //   clip-path: circle(50% at 50% 50%);
  //   background-color: var(--color-primary-500);
  // }

  .kiss-Manifesto__hero__container {
    max-width: ${pxToRem(1440)};
  }

  .kiss-Manifesto__hero__illu {
    position: absolute;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    .kiss-Manifesto__hero__illu {    
        display: block;
        max-height: ${pxToRem(360)};
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
  }
  
`

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="kiss-Manifesto__hero__circle" />
      <div className="kiss-Manifesto__hero__container">
        {/* <div className="kiss-Manifesto__hero__illu">
          <WeirdIllustration />
        </div>
        <div className="kiss-Manifesto__hero__main">
          <Title noMargin modifier="secondary">
            La force du collectif au service du bien commun
          </Title>
          <Text size="large" className="k-u-padding-right-decuple@sm-up">
            <span>
              KissKissBankBank croit profondément en l’intelligence
              collective et aux possibilités qu’elle offre.
              <br />
              En mettant sa plateforme au service de créatrices,
              d’artisans, d’artistes, d’entrepreneuses, de journalistes,
              d’associations, nous avons permis à plus de 25 000 projets,
              petits ou grands, de voir le jour.
              <br />
              Ces projets ont tous un point commun : ils se sont financés
              indépendamment, grâce à leurs communautés, grâce à la
              force du financement participatif.
            </span>
          </Text>
          <Button modifier="helium">Voir les offres</Button>
        </div> */}
      </div>
    </HeroWrapper>

  )
}

export default Hero
