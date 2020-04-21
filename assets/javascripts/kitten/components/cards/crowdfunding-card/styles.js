import styled, { keyframes } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
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

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      display: none;
    }
  }

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

    .k-CrowdfundingCard__image__description {
      background-color: ${COLORS.line2};
      border-top: ${pxToRem(1)} solid ${COLORS.background1};
      width: ${pxToRem(100)};
      height: ${pxToRem(14)};
    }
  }

  &.k-CrowdfundingCard--titlesMinHeight .k-CrowdfundingCard__titleAndDesc {
    min-height: ${pxToRem(50)};

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      min-height: ${pxToRem(75)};
    }
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
`
