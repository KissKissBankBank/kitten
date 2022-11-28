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
  max-width: ${pxToRem(1440)};
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    padding-top: ${pxToRem(50)};
  }

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    padding-top: 0;
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
      margin-top: ${pxToRem(-50)};
      margin-left: ${pxToRem(-500)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      width: 100%;
      height: 100%;
      margin-top: ${pxToRem(-600)};
      margin-left: 0;
    }
  }

  .kiss-Manifesto__hero__container {
    display: flex;

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      margin-right: ${pxToRem(50)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      flex-wrap: wrap;
      margin-right: 0;
    }
  }

  .kiss-Manifesto__hero__main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      width: 50vw;
      padding-left: ${pxToRem(50)};
      justify-content: flex-start;
      gap: ${pxToRem(20)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      box-sizing: border-box;
      padding: ${pxToRem(20)};
      text-align: center;
      align-items: center;
    }

    .k-Title {
      margin-bottom: ${pxToRem(20)};
    }
    .k-Button {
      margin-top: ${pxToRem(20)};
    }
  }

  .kiss-Manifesto__hero__illu {
    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      margin: 0 auto;
    }

    svg {
      position: relative;
      margin-top: ${pxToRem(30)};
      margin-left: ${pxToRem(70)};
      object-fit: cover;
      display: block;

      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        width: 85%;
        margin-top: ${pxToRem(-50)};
        margin-left: ${pxToRem(40)};
      }
      @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
        margin-top: ${pxToRem(20)};
        margin-left: 0;
        width: 100%;
        max-height: ${pxToRem(360)};
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
          <Text size="huge">
            KissKissBankBank croit profondément en l’intelligence
            collective et aux possibilités qu’elle offre.
          </Text>
          <Text size="huge">
            En mettant sa plateforme au service de créatrices,
            d’artisans, d’artistes, d’entrepreneuses, de journalistes,
            d’associations, nous avons permis à plus de 26 000 projets,
            petits ou grands, de voir le jour.
          </Text>
          <Text size="huge">
            Ces projets ont tous un point commun&nbsp;: ils se sont financés
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
