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
  display: grid;
  grid-template-columns: 2fr 1fr;


  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: none;
  }
  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    grid-template-rows: none;
    grid-template-columns: none;
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
    width: 200%;

    @media (max-width: ${pxToRem(ScreenConfig.L.max)}) {
      width: 235%;
      margin-left: ${pxToRem(-350)};
    }
    
    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      width: 178%;
      margin-left: ${pxToRem(-30)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)})  {
      border-top-right-radius: 0;
      width: 100%;
      margin-top: 0;
      margin-left: 0;
      text-align: center;
      align-items: center;
    }
  }

  .kiss-Manifesto__discrimination__container {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};
    align-items: flex-start;
    margin-top: ${pxToRem(270)};
    margin-left: ${pxToRem(470)};

    .k-Title {
      margin-bottom: ${pxToRem(20)};
    }

    span {
      margin-right: ${pxToRem(200)};

      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        margin-right: ${pxToRem(216)};
      } 
      
      @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
        margin-right: 0;
      }
    }

    .k-Button {
      margin-top: ${pxToRem(20)};
      margin-bottom: ${pxToRem(80)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-top: ${pxToRem(100)};
      margin-left: ${pxToRem(100)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      margin-top: ${pxToRem(40)};
      margin-left: ${pxToRem(40)};
      margin-right: ${pxToRem(40)};
    }
  }

  .kiss-Manifesto__discrimination__img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    margin-top: ${pxToRem(100)};
  
    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-top: ${pxToRem(-200)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      margin-top: ${pxToRem(-200)};

      img {
        width: 100%;
      }
    }

    img {
      display: block;
      object-fit: cover;
    }
  }
`

const Discrimination = () => (
  <DiscriminationWrapper>
    <div className="kiss-Manifesto__discrimination__img k-u-hidden@m-up">
      <img alt="" src="/manifeste-1.png" />
    </div>
    <div className="kiss-Manifesto__discrimination__circle">
      <div className="kiss-Manifesto__discrimination__container">
        <Title modifier="primary" noMargin>
          La lutte <br className="k-u-hidden@m-down" />contre les
          <br className="k-u-hidden@s-down" /> discriminations
        </Title>
        <Text size="huge">
          Pour un monde juste où personne n’est victime 
          de discrimination.
        </Text>
        <Text size="huge">
          KissKissBankBank s’engage fermement contre toutes les formes de
          discriminations&nbsp;:&nbsp;racisme, sexisme, homophobie, lesbophobie, 
          transphobie, grossophobie, validisme, âgisme, classisme.
        </Text>
        <Text size="huge">
          C’est pour nous une évidence qu’il faut pourtant souligner&nbsp;:&nbsp;un
          projet qui irait à l’encontre de ces valeurs, de quelque manière que ce soit,
          n’a pas sa place sur notre plateforme.
        </Text>
        <Button modifier="helium">Créer mon projet</Button>
      </div>
    </div>
    <div className="kiss-Manifesto__discrimination__img k-u-hidden@s-down">
      <img alt="" src="/manifeste-1.png" />
    </div>
  </DiscriminationWrapper>
)

export default Discrimination
