import React from 'react'
import {
  pxToRem,
  Title,
  Button,
  Text,
  FlashIllustration,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const ProtectWrapper = styled.section`
  box-sizing: border-box;
  margin-top: ${pxToRem(100)};
  display: flex;
  margin-left: auto;
  margin-right: ${pxToRem(100)};
  max-width: ${pxToRem(1440)};
  gap: ${pxToRem(90)};

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    margin-right: ${pxToRem(50)};
    margin-top: 0;
  }

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    padding-top: 0;
    flex-direction: column;
    margin-right: 0;
  }

  .kiss-Manifesto__protect__img {
    display: block;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  
    img {
      display: block;
      object-fit: cover;
      width: 100%;

      @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
        max-height: ${pxToRem(450)};
        width: 100%;
        object-position: center;
      }
    }

    svg {
      position: absolute;
      margin-top: ${pxToRem(450)};
      margin-left: ${pxToRem(150)};

      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        margin-top: ${pxToRem(400)};
        margin-left: ${pxToRem(65)};
        max-width: 90%;
      }
    }
  }

  .kiss-Manifesto__protect__container {
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: ${pxToRem(20)};
    box-sizing: border-box;

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      padding-right: ${pxToRem(20)};
      padding-left: ${pxToRem(20)};
      width: 100vw;
      text-align: center;
      align-items: center;
    }
  }

  .k-Title {
    margin-bottom: ${pxToRem(20)};
  }

  .k-Button {
    margin-top: ${pxToRem(20)};
  }
`

const Protect = () => (
  <ProtectWrapper>
    <div className="kiss-Manifesto__protect__img">
      <FlashIllustration />
      <img alt="" src="/manifeste-2.png" />
    </div>
    <div className="kiss-Manifesto__protect__container">
      <Title modifier="primary" noMargin>
        La protection de l’environnement et de la biodiversité
      </Title>
      <Text size="huge" className="k-u-padding-right-decuple@sm-up">
        Pour un monde juste où nous assurons l’avenir de la planète.
      </Text>
      <Text size="huge">
        Les alertes lancées par les rapports du GIEC nous le répètent, les COP se
        succèdent et pourtant nous y voilà&nbsp;: les émissions de gaz à effet de serre
        continuent d’augmenter et la température avec, la calotte glaciaire fond aussi
        vite que le nombre d’espèces sur la planète.
      </Text>
      <Text size="huge">
        C’est indéniable&nbsp;:&nbsp;nous aussi, par nos activités, nous contribuons au
        réchauffement de la planète. Mais nous essayons de minimiser notre impact autant
        que possible et invitons tous les projets que nous accueillons à prendre en compte
        leur impact.
      </Text>
      <Button modifier="helium">Créer mon projet</Button>
    </div>
  </ProtectWrapper>
)

export default Protect
