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
  padding-top: ${pxToRem(100)};
  box-sizing: border-box;
  
  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    padding-top: ${pxToRem(50)};
  }
  
  .kiss-Manifesto__hero__circle {
    position: absolute;
    margin-top: ${pxToRem(70)};
    margin-left: ${pxToRem(-430)};
    width: ${pxToRem(860)};
    height: ${pxToRem(860)};
    clip-path: circle(50% at 50% 50%);
    background-color: var(--color-primary-500);

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-top: 0;
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      width: 80%;
      height: 80%;
      margin-left: 0;
    }
  }

  .kiss-Manifesto__hero__container {
    max-width: ${pxToRem(1440)};
    box-sizing: border-box;
    margin-left: auto;
    margin-right: ${pxToRem(100)};
    display: flex;
    margin-left: 0;
    gap: ${pxToRem(50)};

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      margin-right: ${pxToRem(50)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      // flex-direction: column-reverse;
      flex-wrap: wrap;
    }
  }

  .kiss-Manifesto__hero__main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  
    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      box-sizing: border-box;
      padding: ${pxToRem(30)} ${pxToRem(20)};
      gap: ${pxToRem(20)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      width: 50vw;
      padding-left: ${pxToRem(50)};
      justify-content: flex-start;
      gap: ${pxToRem(20)};
    }

    .k-Title {
      margin-bottom: ${pxToRem(20)};
    }
    .k-Button {
      margin-top: ${pxToRem(20)};
    }
  }

  .kiss-Manifesto__hero__illu {
    svg {
      position: relative;
      margin-top: ${pxToRem(30)};
      margin-left: ${pxToRem(70)};
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
      display: block;

      @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
        margin-top: 0;
        max-height: ${pxToRem(360)};
        max-width: 75%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="kiss-Manifesto__hero__circle" />
      <div className="kiss-Manifesto__hero__container">
        <div className="kiss-Manifesto__hero__illu">
          <WeirdIllustration />
        </div>
       <div className="kiss-Manifesto__hero__main">
          <Title noMargin modifier="secondary">
            La force du collectif au service du bien commun
          </Title>
          <Text size="large" className="k-u-padding-right-decuple@sm-up">
            KissKissBankBank croit profondément en l’intelligence
            collective et aux possibilités qu’elle offre.
          </Text>
          <Text size="large">
            En mettant sa plateforme au service de créatrices,
            d’artisans, d’artistes, d’entrepreneuses, de journalistes,
            d’associations, nous avons permis à plus de 25 000 projets,
            petits ou grands, de voir le jour.
          </Text>
          <Text size="large">
            Ces projets ont tous un point commun : ils se sont financés
            indépendamment, grâce à leurs communautés, grâce à la
            force du financement participatif.
          </Text>
          <Button modifier="helium">Voir les offres</Button>
        </div>
      </div>
    </HeroWrapper>

  )
}

export default Hero
