import React from 'react'
import {
  pxToRem,
  Title,
  Paragraph,
  Button,
  RibbonIllustration,
  FormIllustration,
  ComputerIllustration,
  mq,
} from 'kitten'
import styled from 'styled-components'

const WhyWrapper = styled.section`
  position: relative;
  background-color: var(--color-danger-100);
  color: var(--color-grey-900);
  text-align: center;
  clip-path: polygon(100% 0%, 0% 5%, 0% 100%, 100% 95%);

  > * {
    position: relative;
    z-index: 2;
  }

  .kiss-Homepage__why__container {
    box-sizing: border-box;
    max-width: ${pxToRem(1440)};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding: ${pxToRem(110)} ${pxToRem(20)};

    @media ${mq.tabletAndDesktop} {
      padding: ${pxToRem(120)} ${pxToRem(100)};
    }
  }

  .kiss-Homepage__why__cards {
    display: grid;
    gap: ${pxToRem(30)};
    margin: ${pxToRem(40)} 0;
    grid-template-columns: 1fr;
  
    @media ${mq.desktop} {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .kiss-Homepage__why__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-grey-900);
    background-color: var(--color-grey-000);
    padding: ${pxToRem(40)} ${pxToRem(30)} ${pxToRem(30)};
    border-radius: var(--border-radius-m);
    box-shadow: var(--box-shadow-m);
    overflow: hidden;
  }
`

const Why = () => {
  return (
    <WhyWrapper>
      <div className="kiss-Homepage__why__container">
        <Title tag="h2" cssColor="inherit" modifier="secondary" noMargin>
          Pourquoi choisir KissKissBankBank ?
        </Title>
        <div className="kiss-Homepage__why__cards">
          <div className="kiss-Homepage__why__card">
            <RibbonIllustration
              className="k-u-margin-bottom-double"
              width="218"
              height="160"
            />
            <Title tag="h2" modifier="quinary">
              Un accompagnement inspirant et adapté à vos besoins
            </Title>
            <Paragraph modifier="tertiary">
              Ressources en libre-service, coaching personnalisé, prestations
              sur-mesure ou accompagnement stratégique, notre expérience unique du
              financement participatif et de la communication vous mènera au
              succès.
            </Paragraph>
          </div>
          <div className="kiss-Homepage__why__card">
            <FormIllustration
              className="k-u-margin-bottom-double"
              width="100"
              height="160"
            />
            <Title tag="h2" modifier="quinary">
              Plusieurs types de financement en fonction des étapes de votre
              projet
            </Title>
            <Paragraph modifier="tertiary">
              La campagne à durée limitée pour lancer un nouveau projet en
              collectant des dons ou des précommandes puis la collecte de dons
              récurrents ou d’abonnements pour financer son projet sur la durée.
            </Paragraph>
          </div>
          <div className="kiss-Homepage__why__card">
            <ComputerIllustration
              className="k-u-margin-bottom-double"
              width="183"
              height="160"
            />
            <Title tag="h2" modifier="quinary">
              Des fonctionnalités poussées pour engager votre communauté
            </Title>
            <Paragraph modifier="tertiary">
              Personnalisation de votre page projet aux couleurs de votre marque,
              publications à vos contributeurs, options multiples sur vos
              contreparties ou abonnements, etc.
            </Paragraph>
          </div>
        </div>
        <div className="k-u-align-center">
          <Button modifier="iron">En savoir plus</Button>
        </div>
      </div>
    </WhyWrapper>
  )
}

export default Why
