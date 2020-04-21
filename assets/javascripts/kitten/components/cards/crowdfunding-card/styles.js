import styled, { keyframes } from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'

const COMPONENT_GUTTER = pxToRem(10)
// const TRANSITION_DURATION = '0.4s'
// const TRANSITION_EASING = 'ease-in-out'

const loadingKeyframes = keyframes`
  from { transform: translateX(-100%) }
  to { transform: translateX(100%) }
`

export const StyledCrowdfundingCard = styled.div`
  position: relative;
  padding-bottom: ${pxToRem(5)};
  overflow: hidden;
  display: block;

  .k-CrowdfundingCard__paddedContainer {
    padding: 0 ${COMPONENT_GUTTER};
  }

  .k-CrowdfundingCard__noWrap {
    white-space: nowrap;
  }

  .k-CrowdfundingCard__image__imageContainer {
    overflow: hidden;
    position: relative;
    padding-top: calc((10 / 16) * 100%);

    & > img {
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      text-align: center;
    }
  }

  .k-CrowdfundingCard__image__avatar {
    margin-left: ${COMPONENT_GUTTER};
    background-color: ${COLORS.line2};
  }

  .k-CrowdfundingCard__image__owner {
    margin-left: ${COMPONENT_GUTTER};
    margin-right: calc(2 * ${COMPONENT_GUTTER});
    line-height: 1.2;
  }

  .k-CrowdfundingCard__image__ownerContainer {
    display: inline-flex;
    align-items: center;
    position: relative;
    top: 0;
    margin-top: ${pxToRem(-30)};
    background-color: ${COLORS.background1};

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      display: none;
    }
  }

  .k-CrowdfundingCard__title {
    flex: 1;
    padding: 0;
    line-height: 1;
    margin-top: ${pxToRem(10)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding: 0 ${COMPONENT_GUTTER};
    }
  }

  .k-CrowdfundingCard__title__title {
    font-size: ${stepToRem(-1)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(2)};
    }
  }

  .k-CrowdfundingCard__title__loadingElement {
    display: block;
    background-color: ${COLORS.line2};
    border-bottom: ${pxToRem(1)} solid ${COLORS.background1};
    height: ${pxToRem(24)};

    &:last-of-type {
      width: 70%;
      border-top: ${pxToRem(1)} solid ${COLORS.background1};
      border-bottom: 0;
    }
  }

  .k-CrowdfundingCard__subtitle__container {
    display: none;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      display: flex;
      align-items: center;
      line-height: 1;
      padding: 0 ${COMPONENT_GUTTER};
      margin-top: ${pxToRem(10)};
    }
  }

  .k-CrowdfundingCard__subtitle__subtitleText {
    line-height: 1;
    flex: 1;

    &.k-CrowdfundingCard__subtitle__subtitleText--truncated {
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .k-CrowdfundingCard__subtitle__horizontalStroke {
    flex-shrink: 0;
    margin: ${pxToRem(5)} ${COMPONENT_GUTTER} ${pxToRem(5)} 0;
  }

  .k-CrowdfundingCard__subtitle__loadingElement {
    display: block;
    background-color: ${COLORS.line2};
    width: ${pxToRem(80)};
    height: ${pxToRem(12)};
  }

  .k-CrowdfundingCard__informations {
    margin-top: ${pxToRem(15)};
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    line-height: 1;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-top: ${pxToRem(20)};
      padding: 0 ${COMPONENT_GUTTER};
    }
  }

  .k-CrowdfundingCard__informations__info {
    margin-right: ${pxToRem(15)};
    margin-bottom: ${pxToRem(5)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-right: ${pxToRem(20)};
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .k-CrowdfundingCard__informations__loadingElement {
    display: block;
    background-color: ${COLORS.line2};
    border-bottom: ${pxToRem(1)} solid ${COLORS.background1};
    width: ${pxToRem(40)};
    height: ${pxToRem(16)};

    &:last-of-type {
      width: ${pxToRem(65)};
      border-top: ${pxToRem(1)} solid ${COLORS.background1};
      border-bottom: 0;
    }
  }

  .k-CrowdfundingCard__progressBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin-top: ${pxToRem(5)};
    margin-bottom: ${pxToRem(10)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding: 0 ${COMPONENT_GUTTER};
      margin-bottom: ${pxToRem(20)};
    }
  }

  .k-CrowdfundingCard__progressBar__progress {
    flex: 1;
  }

  .k-CrowdfundingCard__progressBar__percent {
    flex-shrink: 0;
    margin-left: calc(2 * ${COMPONENT_GUTTER});
  }

  .k-CrowdfundingCard__loading {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.3),
      rgba(0, 0, 0, 0)
    );
    animation: x 1s linear infinite;
    animation-name: ${loadingKeyframes};
  }

  /* Widget-specific styles */

  &.k-CrowdfundingCardWidget {
    .k-CrowdfundingCard__titleAndDesc {
      margin-top: ${pxToRem(5)};
    }

    .k-CrowdfundingCard__titleWrapper {
      display: flex;
    }

    .k-CrowdfundingCard__title {
      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        padding: 0 ${COMPONENT_GUTTER} 0 0;
      }
    }

    .k-CrowdfundingCard__title__dayCounter {
      line-height: 1;
      margin-left: calc(2 * ${COMPONENT_GUTTER});
      margin-top: ${pxToRem(10)};
    }
  }

  /* isLoading */

  &.k-CrowdfundingCard--isLoading {
    .k-CrowdfundingCard__image__imageContainer {
      overflow: hidden;
      background-color: ${COLORS.line2};
    }

    .k-CrowdfundingCard__image__title {
      background-color: ${COLORS.line2};
      border-bottom: ${pxToRem(1)} solid ${COLORS.background1};
      width: ${pxToRem(70)};
      height: ${pxToRem(14)};
    }

    .k-CrowdfundingCard__subtitle__horizontalStroke {
      background-color: ${COLORS.line2};
    }

    .k-CrowdfundingCard__image__description {
      background-color: ${COLORS.line2};
      border-top: ${pxToRem(1)} solid ${COLORS.background1};
      width: ${pxToRem(100)};
      height: ${pxToRem(14)};
    }

    .k-CrowdfundingCard__progressBar__loadingPercent {
      display: block;
      background-color: ${COLORS.line2};
      border-bottom: ${pxToRem(1)} solid ${COLORS.background1};
      width: ${pxToRem(40)};
      height: ${pxToRem(16)};
    }

    .k-CrowdfundingCard__cardButton__loadingButton {
      background-color: ${COLORS.line2};
      border-color: ${COLORS.line2};
    }
  }

  /* titlesMinHeight */

  &.k-CrowdfundingCard--titlesMinHeight .k-CrowdfundingCard__titleAndDesc {
    min-height: ${pxToRem(50)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      min-height: ${pxToRem(75)};
    }
  }

  /* isStretched */

  &.k-CrowdfundingCard--isStretched {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .k-CrowdfundingCard__titleAndDesc {
      flex-grow: 1;
      flex-shrink: 0;
    }
  }
`
