import React from 'react'
import { pxToRem, Title, Text, Button, AirplaneIconNext, mq } from 'kitten'
import styled from 'styled-components'

const PartnersWrapper = styled.section`
  position: relative;
  background-color: var(--color-danger-100);
  color: var(--color-grey-900);
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(30)};
  padding: ${pxToRem(70)} ${pxToRem(20)} ${pxToRem(70)};

  @media ${mq.tabletAndDesktop} {
    gap: ${pxToRem(50)};
    padding: ${pxToRem(165)} ${pxToRem(260)} ${pxToRem(100)};
  }

  &::before {
    content: '';
    background-color: var(--color-grey-900);
    height: ${pxToRem(70)};
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    clip-path: polygon(0 -1px, 100% -1px, 100% 50%, 75% 75%, 75% 25%, 0 100%);
  }

  &::after {
    content: '';
    background-color: var(--color-grey-100);
    height: ${pxToRem(70)};
    width: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
    clip-path: polygon(
      0 calc(100% + 1px),
      100% calc(100% + 1px),
      100% 0,
      20% 100%,
      20% 33%,
      0 66%
    );
  }

  .kiss-Homepage__partners__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${pxToRem(30)};

    .kiss-Homepage__partners__card {
      background-color: var(--color-grey-000);
      border-radius: var(--border-radius-m);
      box-shadow: var(--box-shadow-m);
      padding: ${pxToRem(10)};
      aspect-ratio: 22 / 15;

      img,
      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
`

const Partners = () => {
  return (
    <PartnersWrapper>
      <Title modifier="secondary">
        Les plus grandes marques s’engagent également au service de la réussite
        des projets.
      </Title>
      <div className="kiss-Homepage__partners__cards">
        <div className="kiss-Homepage__partners__card">
          <AirplaneIconNext />
        </div>
        <div className="kiss-Homepage__partners__card">
          <AirplaneIconNext />
        </div>
        <div className="kiss-Homepage__partners__card">
          <AirplaneIconNext />
        </div>
        <div className="kiss-Homepage__partners__card">
          <AirplaneIconNext />
        </div>
        <div className="kiss-Homepage__partners__card">
          <AirplaneIconNext />
        </div>
        <div className="kiss-Homepage__partners__card">
          <AirplaneIconNext />
        </div>
        <div className="kiss-Homepage__partners__card">
          <AirplaneIconNext />
        </div>
        <div className="kiss-Homepage__partners__card">
          <AirplaneIconNext />
        </div>
      </div>
      <div className="k-u-margin-top-triple@s-up">
        <Text
          size="huge"
          weight="700"
          className="k-u-block k-u-margin-horizontal-auto k-u-margin-bottom-double"
        >
          Vous êtes une marque ?
        </Text>
        <Button modifier="beryllium" size="small">
          En savoir plus
        </Button>
      </div>
    </PartnersWrapper>
  )
}

export default Partners
