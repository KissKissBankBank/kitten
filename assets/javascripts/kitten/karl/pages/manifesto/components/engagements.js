import React from 'react'
import {
  pxToRem,
  Title,
  Text,
  RainbowColorIllustration,
  HandAndFlowerColorIllustration,
  PencilColorIllustration,
  HeartIllustration,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const EngagementsWrapper = styled.section`
  margin-top: ${pxToRem(-150)};
  

  .kiss-Manifesto__engagements__container {
    max-width: ${pxToRem(1440)};
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
  }
  
  .kiss-Manifesto__engagements__form {
    position: absolute;
    right: 0;
    width: ${pxToRem(347)};
    height: ${pxToRem(705)};
    background-color: var(--color-danger-500);
    clip-path: polygon(100% 0, 100% 100%, 0% 40%);
    z-index: -1;
  }

  .kiss-Manifesto__engagements__hearts {
    padding-top: ${pxToRem(250)};
    display: flex;
    justify-content: flex-end;

    & :first-child {
      padding-right: ${pxToRem(7)};
      margin-top: ${pxToRem(-70)};
    }
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
    <div className="kiss-Manifesto__engagements__form" />
    <div className="kiss-Manifesto__engagements__container">
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
    </div>
  </EngagementsWrapper>
)

export default Engagements
