
import React from 'react'
import {
  pxToRem,
  HeartIllustration,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const UnderHeroWrapper = styled.section`

  max-width: ${pxToRem(1440)};
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-end;
  
  .kiss-Manifesto__underHero__form {
    position: absolute;
    right: 0;
    width: ${pxToRem(347)};
    height: ${pxToRem(705)};
    background-color: var(--color-danger-500);
    clip-path: polygon(100% 0, 100% 100%, 0% 40%);
    z-index: -1;
  }

    
  .kiss-Manifesto__underHero__container {
    margin-right: ${pxToRem(100)};

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-right: ${pxToRem(70)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      margin-right: ${pxToRem(5)};
    }
  }

  .kiss-Manifesto__underHero__hearts {
    padding-top: ${pxToRem(150)};
    
    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      padding-top: ${pxToRem(50)};
    }

    & :first-child {
      padding-bottom: ${pxToRem(100)};
      @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
        padding-top: ${pxToRem(20)};
      }
    }
  }
`

const UnderHero = () => (
  <UnderHeroWrapper>
    <div className="kiss-Manifesto__underHero__form" />
    <div className="kiss-Manifesto__underHero__container">
      <div className="kiss-Manifesto__underHero__hearts">
        <HeartIllustration width="166" height="153" />
        <HeartIllustration width="254" height="222" />
      </div>
    </div>
  </UnderHeroWrapper>
)

export default UnderHero

