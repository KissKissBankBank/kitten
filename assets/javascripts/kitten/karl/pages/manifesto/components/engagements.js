import React from 'react'
import {
  pxToRem,
  Title,
  Text,
  Button,
  RainbowColorIllustration,
  HandAndFlowerColorIllustration,
  PencilColorIllustration,
  HeartIllustration,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const EngagementsWrapper = styled.section`
  margin-top: ${pxToRem(-150)};
  box-sizing: border-box;

  .kiss-Manifesto__engagements__form {
    position: absolute;
    right: 0;
    width: ${pxToRem(347)};
    height: ${pxToRem(705)};
    background-color: var(--color-danger-500);
    clip-path: polygon(100% 0, 100% 100%, 0% 40%);
  }

  .kiss-Manifesto__engagements__hearts {
    position: absolute;
    right: 0;
    margin-right: ${pxToRem(120)};
    margin-top: ${pxToRem(350)};
  }

  .kiss-Manifesto__engagements__engagement {
    padding-top: ${pxToRem(550)};
    text-align: center;
  }

  .kiss-Manifesto__engagements__engagement__illustrations {
    display: flex;
    gap: ${pxToRem(30)};
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .kiss-Manifesto__engagements__engagement__illustration {
    flex-direction: column;
  }
`

const Engagements = () => (
  <EngagementsWrapper>
    <div className="kiss-Manifesto__engagements__form" />
    <div className="kiss-Manifesto__engagements__hearts">
      <HeartIllustration width="166" height="153" />
      <HeartIllustration width="254" height="222" />
    </div>
    <div className="kiss-Manifesto__engagements__engagement">
      <Title
        tag="h2"
        noMargin
        modifier="secondary"
        className="k-u-margin-bottom-quadruple"
      >
        Un monde plus juste
      </Title>
      <Text size="huge">
        KissKissBankBank croit également qu’un monde plus juste pour <br />
        toutes et tous est possible, et défend trois engagements&nbsp;:
      </Text>

      <div className="kiss-Manifesto__engagements__engagement__illustrations">
      <div className="kiss-Manifesto__engagements__engagement__illustration">
        <RainbowColorIllustration />
          <Text weight="700" tag="p" size="large" cssColor="var(--color-grey-900)">
            La lutte contre toutes <br />
            les discriminations
          </Text>
        </div>
        <div className="kiss-Homepage__manifesto__illustration">
          <HandAndFlowerColorIllustration />
          <Text weight="700" tag="p" size="large" cssColor="var(--color-grey-900)">
            La protection de l’environnement <br />
            et de la biodiversité
          </Text>
        </div>
        <div className="kiss-Homepage__manifesto__illustration">
          <PencilColorIllustration />
          <Text weight="700" tag="p" size="large" cssColor="var(--color-grey-900)">
            La défense de la culture indépendante <br />
            et la libération de la créativité
          </Text>
        </div>
      </div>
    </div>
  </EngagementsWrapper>
)

export default Engagements
