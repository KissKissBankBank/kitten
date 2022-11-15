import React from 'react'
import {
  pxToRem,
  Title,
  Button,
  Text,
  MusicIllustration,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const DefenseWrapper = styled.section`
  margin-top: ${pxToRem(100)};

  svg {
    right: 0;
  }
  .kiss-Manifesto__defense__img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
  
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

  .kiss-Manifesto__defense__background {
    background-color: var(--color-danger-700);
  }

  .kiss-Manifesto__defense__container {
    max-width: ${pxToRem(1440)};
    display: flex;
    gap: ${pxToRem(40)};
    padding: ${pxToRem(120)} ${pxToRem(100)} 0 ${pxToRem(100)};
  }

  .kiss-Manifesto__defense__block {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: ${pxToRem(20)};

    .k-Button {
      margin-top: ${pxToRem(20)};
    }
  }
`

const Defense = () => (
  <DefenseWrapper>
    <MusicIllustration />
    <div className="kiss-Manifesto__defense__img">
      <img alt="" src="/kitten-3.jpg" />
    </div>
    <div className="kiss-Manifesto__defense__background">
      <div className="kiss-Manifesto__defense__container">
        <Title tag="h2" modifier="primary" noMargin>
          La défense de la culture indépendante et la libération 
          de la créativité
        </Title>
        <div className="kiss-Manifesto__defense__block">
          <Text size="large" className="k-u-padding-right-decuple@sm-up">
            Il n’y a pas de monde juste sur une planète qui meurt.
          </Text>
          <Text size="large">
            Les alertes lancées par les rapports du GIEC nous le répètent, les COP
            se succèdent et pourtant nous y voilà : les émissions de gaz à effet de serre
            continuent d’augmenter et la température avec, la calotte glaciaire fond aussi
            vite que le nombre d’espèces sur la planète.
          </Text>
          <Text size="large">
            C’est indéniable&nbsp;:&nbsp;nous aussi, par nos activités, nous contribuons au 
            réchauffement de la planète. Mais nous essayons de minimiser notre impact 
            autant que possible et invitons tous les projets que nous accueillons à prendre 
            en compte leur impact.
          </Text>
          <Button modifier="copper">Créer mon projet</Button>
        </div>
        
      </div>
    </div>
  </DefenseWrapper>
)

export default Defense
