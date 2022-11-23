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

  .kiss-Manifesto__discrimination__circle {
    margin-top: ${pxToRem(10)};
    position: absolute;
    background: var(--color-danger-300);
    margin-left: ${pxToRem(-430)};
    width: 70vw;
    height: 100%;
    border-top-right-radius: 100%;

    @media (max-width: ${pxToRem(ScreenConfig.L.max)}) {
      width: 70vw;
    }

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      border-top-right-radius: 0;
    }
  }

  .kiss-Manifesto__discrimination__container {
    z-index: 1;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    gap: ${pxToRem(20)};
    align-items: flex-start;
    margin-top: ${pxToRem(150)};
    margin-left: ${pxToRem(70)};
    margin-right: ${pxToRem(50)};

    .k-Title {
      margin-bottom: ${pxToRem(20)};
    }

    .k-Button {
      margin-top: ${pxToRem(20)};
      margin-bottom: ${pxToRem(80)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      margin-top: ${pxToRem(150)};
      margin-left: ${pxToRem(20)};
      margin-right: ${pxToRem(120)};
    }
  }

  .kiss-Manifesto__discrimination__img {
    display: block;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  
    img {
      display: block;
      object-fit: cover;
      width: 100%;

      @media (max-width: ${pxToRem(ScreenConfig.L.max)}) {
        margin-top: ${pxToRem(120)};
      }

      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
       display: none;
      }
    }
  }
`

const Discrimination = () => (
  <DiscriminationWrapper>
    <div className="kiss-Manifesto__discrimination__circle" />
    <div className="kiss-Manifesto__discrimination__container">
      <Title modifier="primary" noMargin style={{ lineHeight: "75%" }}>
        La lutte<br /> contre les<br /> discriminations
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
    <div className="kiss-Manifesto__discrimination__img">
      <img alt="" src="/manifeste-1.png" />
    </div>
  </DiscriminationWrapper>
)

export default Discrimination
