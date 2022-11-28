import React from 'react'
import {
  pxToRem,
  Title,
  Text,
  RainbowColorIllustration,
  HandAndFlowerColorIllustration,
  PencilColorIllustration,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const EngagementsWrapper = styled.section`
  max-width: ${pxToRem(1440)};
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    margin-top: ${pxToRem(80)};
  }

  .kiss-Manifesto__engagements__engagement {
    text-align: center;

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      padding-right: ${pxToRem(20)};
      padding-left: ${pxToRem(20)};
    }
  }

  .kiss-Manifesto__engagements__engagement__illustrations {
    display: flex;
    gap: ${pxToRem(100)};
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    margin-top: ${pxToRem(80)};
  }

  .kiss-Manifesto__engagements__engagement__illustration {
    flex-direction: column;
  }
`

const Engagements = () => (
  <EngagementsWrapper>
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
          <Text weight="700" tag="p" size="huge" cssColor="var(--color-grey-900)">
            La lutte contre toutes <br />
            les discriminations
          </Text>
          <Title noMargin style={{ fontSize: '96px'}}>1</Title>
        </div>
        <div className="kiss-Homepage__manifesto__illustration">
          <HandAndFlowerColorIllustration />
          <Text weight="700" tag="p" size="huge" cssColor="var(--color-grey-900)">
            La protection de l’environnement <br />
            et de la biodiversité
          </Text>
          <Title noMargin style={{ fontSize: '96px'}}>2</Title>
        </div>
        <div className="kiss-Homepage__manifesto__illustration">
          <PencilColorIllustration />
          <Text weight="700" tag="p" size="huge" cssColor="var(--color-grey-900)">
            La défense de la culture indépendante <br />
            et la libération de la créativité
          </Text>
          <Title noMargin style={{ fontSize: '96px'}}>3</Title>
        </div>
      </div>
    </div>
  </EngagementsWrapper>
)

export default Engagements
