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
  justify-content: flex-end;
  gap: ${pxToRem(100)};
  max-width: ${pxToRem(1440)};
  margin-right: ${pxToRem(90)};

  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    flex-direction: column;
  }

  .kiss-Manifesto__protect__img {
    display: block;
    object-fit: cover;
    object-position: center;
  
    img {
      display: block;
      object-fit: cover;
      object-position: center;
    }

    svg {
      position: absolute;
      margin-top: ${pxToRem(700)};
      margin-left: ${pxToRem(220)};
    }
  }

  .kiss-Manifesto__protect__container {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};
    align-items: flex-start;
    margin-top: ${pxToRem(100)};

    .k-Title {
      margin-bottom: ${pxToRem(20)};
    }

    .k-Button {
      margin-top: ${pxToRem(20)};
    }
  }
`

const Protect = () => (
  <ProtectWrapper>
    <div className="kiss-Manifesto__protect__img">
      <FlashIllustration />
      <img alt="" src="/kitten-3.jpg" />
    </div>
    <div className="kiss-Manifesto__protect__container">
      <Title modifier="primary" noMargin style={{ lineHeight: "75%" }}>
        La protection de <br />l’environnement <br/>et de la biodiversité
      </Title>
      <Text size="huge" className="k-u-padding-right-decuple@sm-up">
        Pour un monde juste où nous assurons l’avenir de la planète.
      </Text>
      <Text size="huge">
        Les alertes lancées par les rapports du GIEC nous le répètent, les COP se
        succèdent et pourtant nous y voilà : les émissions de gaz à effet de serre
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
