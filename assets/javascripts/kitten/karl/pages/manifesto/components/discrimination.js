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

  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    background-color: var(--color-danger-300);
    text-align: center;
  }

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    padding-top: 0;
    flex-direction: column;
    margin-right: 0;
  }

  .kiss-Manifesto__discrimination__circle {
    margin-top: ${pxToRem(10)};
    background-color: var(--color-danger-300);
    margin-left: ${pxToRem(-430)};
    border-top-right-radius: 100%;
    width: 100vw;

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
     display: none;
    }
  }

  .kiss-Manifesto__discrimination__container {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};
    align-items: flex-start;
    margin-top: ${pxToRem(270)};
    margin-left: ${pxToRem(470)};
    margin-right: ${pxToRem(100)};

    .k-Title {
      margin-bottom: ${pxToRem(20)};
    }

    .k-Button {
      margin-top: ${pxToRem(20)};
      margin-bottom: ${pxToRem(80)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-top: ${pxToRem(50)};
      margin-left: ${pxToRem(100)};
      align-items: center;
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      margin-left: ${pxToRem(40)};
      margin-right: ${pxToRem(40)};
    }
  }

  .kiss-Manifesto__discrimination__img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  
    img {
      display: block;
      object-fit: cover;
      // width: 100%;

      // @media (max-width: ${pxToRem(ScreenConfig.L.max)}) {
      //   margin-top: ${pxToRem(275)};
      // }
    }
  }
`

const Discrimination = () => (
  <DiscriminationWrapper>
    <div className="kiss-Manifesto__discrimination__circle">
      <div className="kiss-Manifesto__discrimination__container">
        <Title modifier="primary" noMargin>
          La lutte<br className="k-u-hidden@m-down" /> 
          contre les<br className="k-u-hidden@m-down" /> 
          discriminations
        </Title>
        <Text size="huge">
          Pour un monde juste où personne n’est victime <br className="k-u-hidden@m-down" />
          de discrimination.
        </Text>
        <Text size="huge">
          KissKissBankBank s’engage fermement contre toutes les formes de<br className="k-u-hidden@m-down" />
          discriminations&nbsp;:&nbsp;racisme, sexisme, homophobie, lesbophobie,<br className="k-u-hidden@m-down" />
          transphobie, grossophobie, validisme, âgisme, classisme.
        </Text>
        <Text size="huge">
          C’est pour nous une évidence qu’il faut pourtant souligner&nbsp;:&nbsp;un<br className="k-u-hidden@m-down" />
          projet qui irait à l’encontre de ces valeurs, de quelque manière que ce soit,<br className="k-u-hidden@m-down" />
          n’a pas sa place sur notre plateforme.
        </Text>
        <Button modifier="helium">Créer mon projet</Button>
      </div>
    </div>
    <div className="kiss-Manifesto__discrimination__img">
      <img alt="" src="/manifeste-1.png" />
    </div>
  </DiscriminationWrapper>
)

export default Discrimination
