import React from 'react'
import {
  pxToRem,
  Title,
  Button,
  Text,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const DiscriminationWrapper = styled.section`
  margin-top: ${pxToRem(100)};
  max-width: ${pxToRem(1440)};
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .kiss-Manifesto__discrimination__circle {
    background: var(--color-danger-300);
    max-width: ${pxToRem(871)};
    height: ${pxToRem(827)};
    border-top-right-radius: 100%;
    flex-shrink: 0;
    margin: 0 0 auto;
  }
  
  .kiss-Manifesto__discrimination__container {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};
    align-items: flex-start;
    margin-top: ${pxToRem(200)};
    margin-left: ${pxToRem(70)};

    .k-Title {
      margin-bottom: ${pxToRem(20)};
    }

    .k-Button {
      margin-top: ${pxToRem(20)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      margin-top: ${pxToRem(150)};
      margin-left: ${pxToRem(20)};
      margin-right: ${pxToRem(100)};
    }
  }

  .kiss-Manifesto__discrimination__img {
    right: 0;
    position: absolute;
    z-index: -1;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`

const Discrimination = () => (
  <DiscriminationWrapper>
    <div className="kiss-Manifesto__discrimination__circle">
      <div className="kiss-Manifesto__discrimination__container">
        <Title modifier="primary" noMargin style={{ lineHeight: "75%" }}>
          La lutte contre<br /> les<br /> discriminations
        </Title>
        <Text size="huge">
          Pour un monde juste où personne n’est victime <br />de discrimination.
        </Text>
        <Text size="huge">
          KissKissBankBank s’engage fermement contre toutes les formes de<br />
          discriminations&nbsp;:&nbsp;racisme, sexisme, homophobie, lesbophobie,<br />
          transphobie, grossophobie, validisme, âgisme, classisme.
        </Text>
        <Text size="huge">
          C’est pour nous une évidence qu’il faut pourtant souligner&nbsp;:&nbsp;un<br />
          projet qui irait à l’encontre de ces valeurs, de quelque manière que ce soit,<br />
          n’a pas sa place sur notre plateforme.
        </Text>
        <Button modifier="helium">Créer mon projet</Button>
      </div>
    </div>
    <div className="kiss-Manifesto__discrimination__img">
      <img alt="" src="/kitten-3.jpg" />
    </div>
  </DiscriminationWrapper>
)

export default Discrimination
