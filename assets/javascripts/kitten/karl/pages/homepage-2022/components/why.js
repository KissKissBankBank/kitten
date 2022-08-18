import React from 'react'
import { pxToRem, Title, Paragraph, Button, AirplaneIconNext, mq } from 'kitten'
import styled from 'styled-components'

const WhyWrapper = styled.section`
  position: relative;
  background-color: var(--color-danger-500);
  color: var(--color-grey-000);
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
  padding: ${pxToRem(70)} ${pxToRem(20)} 0;

  @media ${mq.tabletAndDesktop} {
    gap: ${pxToRem(40)};
    padding: ${pxToRem(165)} ${pxToRem(100)} 0;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    background-color: var(--color-grey-100);
    height: ${pxToRem(70)};
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    clip-path: polygon(0 -1px, 100% -1px, 33% 100%, 33% 33%, 0 66%);
  }

  &::after {
    content: '';
    background-color: var(--color-grey-900);
    height: 40%;
    width: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
    clip-path: polygon(
      0 0,
      50% 100px,
      50% 50px,
      100% 100px,
      100% calc(100% + 1px),
      0 calc(100% + 1px)
    );
  }

  .kiss-Homepage__why__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${pxToRem(20)};

    .kiss-Homepage__why__card {
      color: var(--color-grey-900);
      background-color: var(--color-grey-000);
      padding: ${pxToRem(40)} ${pxToRem(30)} ${pxToRem(30)};
      border-radius: var(--border-radius-m);
    }
  }
`

const Why = () => {
  return (
    <WhyWrapper>
      <Title cssColor="inherit" modifier="secondary">
        Pourquoi choisir KissKissBankBank ?
      </Title>
      <div className="kiss-Homepage__why__cards">
        <div className="kiss-Homepage__why__card">
          <AirplaneIconNext
            className="k-u-margin-bottom-double"
            width="70"
            height="70"
            color="var(--color-danger-500)"
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
          <AirplaneIconNext
            className="k-u-margin-bottom-double"
            width="70"
            height="70"
            color="var(--color-danger-500)"
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
          <AirplaneIconNext
            className="k-u-margin-bottom-double"
            width="70"
            height="70"
            color="var(--color-danger-500)"
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
        <Button modifier="beryllium">En savoir plus</Button>
      </div>
    </WhyWrapper>
  )
}

export default Why
