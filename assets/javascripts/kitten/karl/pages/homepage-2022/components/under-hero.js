import React from 'react'
import styled from 'styled-components'
import {
  pxToRem,
  mq,
  Title,
  Text,
  Button,
  HEADER_HEIGHT,
  HourglassIllustration,
  HandIllustration
} from 'kitten'

const UnderHeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  color: var(--color-grey-900);
  text-align: center;

  > * {
    z-index: 2;
  }

  .kiss-Homepage__underHero__title {
    z-index: 3;
    position: absolute;
    margin-top: ${pxToRem(124)};
  }

  .kiss-Homepage__underHero__blocks {
    display: flex;
  }

  .kiss-Homepage__underHero__block {
    padding: ${pxToRem(50)} ${pxToRem(100)};
  }
`


const UnderHero = () => {
  return (
    <UnderHeroWrapper>
      <Title
        tag="h2"
        modifier="tertiary"
        noMargin
        className="kiss-Homepage__underHero__title"
      >
          2 manières <br />
          de financer <br />
          votre projet
      </Title>
      <div className="kiss-Homepage__underHero__blocks">
        <div className="kiss-Homepage__underHero__block" style={{ backgroundColor:"#E5F3FF" }}>
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

        <div className="kiss-Homepage__underHero__block" style={{ backgroundColor:"#FFE9EF" }}>
          <HandIllustration width="165" height="293" />
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
