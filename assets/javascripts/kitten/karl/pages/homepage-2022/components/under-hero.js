import React from 'react'
import styled from 'styled-components'
import {
  pxToRem,
  mq,
  Title,
  Text,
  Button,
  HourglassIllustration,
  HandIllustration,
  PatchNewIllustration
} from 'kitten'

const UnderHeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  color: var(--color-grey-900);
  text-align: center;

  > * {
    z-index: 2;
  }
  .kiss-Homepage-underHero__background__left {
    background-color: var(--color-primary-100);
    width: 50vw;
    left: 0;
    
    @media ${mq.mobile} {
      width: 100vw;
    }
  }

  .kiss-Homepage-underHero__background__right {
    background-color: var(--color-danger-100);
    width: 50vw;
    right: 0;

    @media ${mq.mobile} {
      width: 100vw;
    }
  }

  @media ${mq.mobile} {
    display: block;
  }

  .kiss-Homepage__underHero__title {
    z-index: 2;
    position: absolute;
    margin-top: ${pxToRem(124)};

    @media ${mq.mobile} {
      margin-bottom: ${pxToRem(30)};
      margin-top: 0;
      position: relative;
    }
  }

  .kiss-Homepage__underHero__block {
    padding: ${pxToRem(50)} ${pxToRem(100)};
    @media ${mq.mobile} {
      padding: ${pxToRem(50)} ${pxToRem(30)};
      object-fit: cover;
    }
  }

  .kiss-Homepage__underHero__patch {
    display: inline-flex;
    position: absolute;
    margin-left: ${pxToRem(20)};
    margin-top: ${pxToRem(20)};
      
    @media ${mq.mobile} {
      margin-left: 0;
    }

    svg {
      @media ${mq.mobile} {
        width: 90%;
      }
    }
  }
`

const UnderHero = () => {
  return (
    <UnderHeroWrapper>
      <div className="kiss-Homepage-underHero__background__left">
        <div className="kiss-Homepage__underHero__block" style={{ backgroundColor: "var(--color-primary-100)" }}>
          <Title
            tag="h2"
            modifier="tertiary"
            noMargin
            className="kiss-Homepage__underHero__title k-u-hidden@m-up"
          >
              2 manières <br />
              de financer
              votre projet
          </Title>
          <HourglassIllustration width="164" height="287" />
          <Title tag="h3" modifier="quinary" color="var(--color-primary-700)">
            Lancer une campagne limitée dans le temps avec un objectif à atteindre.
          </Title>
          <Text tag="p" size="medium">
            Idéal pour booster le lancement d’un nouveau projet.
          </Text>
          <Button size="small" modifier="helium">
            Créer mon projet
          </Button>
        </div>
      </div>

      <div className="kiss-Homepage-underHero__background__right">
        <div className="kiss-Homepage__underHero__block" style={{ backgroundColor: "var(--color-danger-100)" }}>
          <HandIllustration width="165" height="293" />
          <div className="kiss-Homepage__underHero__patch">
            <PatchNewIllustration width="86" height="86" />
          </div>
          <Title tag="h3" modifier="quinary" color="var(--color-danger-700)">
            Générer un revenu sur la durée grâce à des contributeurs récurrents
          </Title>
          <Text tag="p" size="medium">
          Idéal si vous avez du contenu mensuel ou trimestriel à offrir à vos contributeurs.
          </Text>
          <Button size="small" modifier="iron">
            Créer mon projet
          </Button>
        </div>
      </div>
      <Title
        tag="h2"
        modifier="tertiary"
        noMargin
        className="kiss-Homepage__underHero__title k-u-hidden@s-down"
      >
          2 manières <br />
          de financer <br />
          votre projet
      </Title>
    </UnderHeroWrapper>
  )
}

export default UnderHero
