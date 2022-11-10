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
  padding-top: ${pxToRem(100)};
  box-sizing: border-box;

  .kiss-Manifesto__engagements__form {
    position: absolute;
    right: 0;
    width: ${pxToRem(347)};
    height:${pxToRem(705)};
    background-color: var(--color-danger-500);
    clip-path: polygon(100% 0, 100% 100%, 0% 40%);

  }
`

const Engagements = () => (
  <EngagementsWrapper>
    <div className="kiss-Manifesto__engagements__form" />
    <HeartIllustration width="166" height="153" />
    <HeartIllustration width="254" height="222" />
  </EngagementsWrapper>
)

export default Engagements
