import React from 'react'
import styled from 'styled-components'
import {
  pxToRem,
  mq,
  Title,
  HEADER_HEIGHT,
  Paragraph,
  HourglassIllustration,
  HandIllustration
} from 'kitten'

const UnderHeroWrapper = styled.section`
  position: relative;
  color: var(--color-grey-900);
  text-align: center;

  display: flex;
  flex-direction: column;
  padding: ${pxToRem(50)} ${pxToRem(130)};

  > * {
    position: relative;
    z-index: 2;
  }
`


const UnderHero = () => {
  return (
    <UnderHeroWrapper>
      <Title cssColor="inherit" modifier="secondary">
        2 manières<br/>
        de financer<br/>
        votre projet
      </Title>
    </UnderHeroWrapper>
  )
}

export default UnderHero
