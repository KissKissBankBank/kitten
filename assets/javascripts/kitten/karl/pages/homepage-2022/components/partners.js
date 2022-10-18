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
  clip-path: polygon(100% 0%, 0% 5%, 0% 100%, 100% 95%);

  @media ${mq.tabletAndDesktop} {
    gap: ${pxToRem(50)};
    padding: ${pxToRem(100)} ${pxToRem(260)} ${pxToRem(100)};
  }

  .kiss-Homepage__partners__cards {
    display: grid;
    gap: ${pxToRem(10)};
    grid-template-columns: repeat(2, 1fr);

    @media ${mq.tabletAndDesktop} {
      gap: ${pxToRem(30)};
      grid-template-columns: repeat(4, 1fr);
    }
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
      Les entreprises s’engagent au service de la réussite des projets
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
        <Button modifier="boron" size="small">
          En savoir plus
        </Button>
      </div>
    </PartnersWrapper>
  )
}

export default Partners
