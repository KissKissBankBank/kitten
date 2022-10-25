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
  box-sizing: border-box;
  max-width: ${pxToRem(1440)};
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  color: var(--color-grey-900);
  text-align: center;

  > * {
    z-index: 2;
  }

  @media ${mq.mobileAndTablet} {
    display: block;
  }

  .kiss-Homepage__underHero__title {
    z-index: 3;
    position: absolute;
    margin-top: ${pxToRem(124)};

    @media ${mq.mobileAndTablet} {
      margin-bottom: ${pxToRem(30)};
      margin-top: 0;
      position: relative;
    }
  }

  .kiss-Homepage__underHero__blocks {
    display: flex;

    @media ${mq.mobileAndTablet} {
      display: block;
    }
  }

  .kiss-Homepage__underHero__block {
    padding: ${pxToRem(50)} ${pxToRem(100)};
    @media ${mq.mobileAndTablet} {
      padding: ${pxToRem(50)} ${pxToRem(30)};
      object-fit: cover;
    }
  }

  .kiss-Homepage__underHero__patch {
    display: inline-flex;
    position: absolute;
    margin-left: ${pxToRem(70)};
    margin-top:  ${pxToRem(20)};
  }
`

const UnderHero = () => {
  return (
    <UnderHeroWrapper>
      <Title
        tag="h2"
        modifier="tertiary"
        noMargin
        className="kiss-Homepage__underHero__title k-u-hidden@m-down"
      >
          2 manières <br />
          de financer <br />
          votre projet
      </Title>
      <div className="kiss-Homepage__underHero__blocks">
        <div className="kiss-Homepage__underHero__block" style={{ backgroundColor: "var(--color-primary-100)" }}>
          
          <Title
            tag="h2"
            modifier="tertiary"
            noMargin
            className="kiss-Homepage__underHero__title k-u-hidden@l-up"
          >
              2 manières <br />
              de financer
              votre projet
          </Title>
          <HourglassIllustration width="164" height="287" />
          <Title modifier="quinary" color="var(--color-primary-700)">
            Lancer une campagne limitée dans le temps avec un objectif à atteindre.
          </Title>
          <Text tag="p" size="medium">
            Idéal pour booster le lancement d’un nouveau projet.
          </Text>
          <Button size="small" modifier="helium">
            Créer mon projet
          </Button>
        </div>

        <div className="kiss-Homepage__underHero__block" style={{ backgroundColor:"var(--color-danger-100)" }}>
          <HandIllustration width="165" height="293" />
          <div className="kiss-Homepage__underHero__patch">
            <PatchNewIllustration width="86" height="86" />
          </div>
          <Title modifier="quinary" color="var(--color-danger-700)">
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
    </UnderHeroWrapper>
  )
}

export default UnderHero
