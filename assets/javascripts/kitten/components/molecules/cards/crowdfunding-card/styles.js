import styled, { keyframes, css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const COMPONENT_GUTTER = pxToRem(15)

const loadingKeyframes = keyframes`
  from { transform: translateX(-100%) }
  to { transform: translateX(100%) }
`

const mobileStyles = css`
  --crowdfundingCard--border-width: 1px;
  --crowdfundingCard--border-radius: 8px;
  --crowdfundingCard--border-color: var(--color-grey-400);
  
  /* CARD STYLE */

  border: var(--crowdfundingCard--border-width) solid
    var(--crowdfundingCard--border-color);
  border-radius: var(--crowdfundingCard--border-radius);

  position: relative;
  padding-bottom: ${pxToRem(10)};
  overflow: hidden;
  display: block;
  background: var(--color-grey-000);
  color: var(--color-grey-900);

  &[href] {
    text-decoration: inherit;
    color: inherit;

    .k-CrowdfundingCard__image__image {
      transition: transform 0.4s ease-in-out;
    }

    .k-CrowdfundingCard__title__title {
      transition: color 0.4s ease-in-out;
    }

    &:hover,
    &:focus {
      .k-CrowdfundingCard__image__image {
        transform: scale(1.07);
      }

      .k-CrowdfundingCard__title__title {
        color: var(--color-primary-500);
      }
    }
  }

  .k-CrowdfundingCard__paddedContainer {
    padding: 0 ${COMPONENT_GUTTER};
  }

  .k-CrowdfundingCard__noWrap {
    white-space: nowrap;
  }

  .k-CrowdfundingCard__image__imageContainer {
    overflow: hidden;
    position: relative;

    padding-top: calc(var(--Image-container-ratio) * 100%);

    & > .k-CrowdfundingCard__image__image {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      text-align: center;
    }
  }

  .k-CrowdfundingCard__image__avatar {
    margin-left: ${COMPONENT_GUTTER};
    background-color: var(--color-grey-400);
  }

  .k-CrowdfundingCard__image__owner {
    margin-left: ${COMPONENT_GUTTER};
    margin-right: calc(2 * ${COMPONENT_GUTTER});
    line-height: 1.2;
  }

  .k-CrowdfundingCard__image__ownerContainer {
    display: none;
    position: relative;
    top: 0;
    margin-top: ${pxToRem(-30)};
    background-color: var(--color-grey-000);
  }

  .k-CrowdfundingCard__title {
    flex: 1;
    padding: 0;
    line-height: 1;
    margin-top: ${pxToRem(30)};
  }

  .k-CrowdfundingCard__title__title {
    font-size: ${stepToRem(-1)};
  }

  .k-CrowdfundingCard__title__loadingElement {
    display: block;
    background-color: ar(--color-grey-400);
    border-bottom: ${pxToRem(1)} solid var(--color-grey-000);
    height: ${pxToRem(24)};

    &:last-of-type {
      width: 70%;
      border-top: ${pxToRem(1)} solid var(--color-grey-000);
      border-bottom: 0;
    }
  }

  .k-CrowdfundingCard__subtitle__container {
    display: none;
  }

  .k-CrowdfundingCard__subtitle__subtitleText {
    line-height: 1.2;
    flex: 1;

    &.k-CrowdfundingCard__subtitle__subtitleText--truncated {
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .k-CrowdfundingCard__additionalInfo {
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    margin-top: ${pxToRem(10)};

    > * {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .k-CrowdfundingCard__subtitle__horizontalStroke {
    flex-shrink: 0;
    margin: ${pxToRem(5)} ${COMPONENT_GUTTER} ${pxToRem(5)} 0;
  }

  .k-CrowdfundingCard__subtitle__loadingElement {
    display: block;
    background-color: ar(--color-grey-400);
    width: ${pxToRem(80)};
    height: ${pxToRem(12)};
  }

  .k-CrowdfundingCard__informations {
    margin-top: ${pxToRem(15)};
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    line-height: 1;
  }

  .k-CrowdfundingCard__informations__infoContainer {
    margin-right: ${pxToRem(15)};
    margin-bottom: ${pxToRem(5)};

    &:last-child {
      margin-right: 0;
    }
  }

  .k-CrowdfundingCard__informations__info {
    font-size: ${pxToRem(12)};
  }

  .k-CrowdfundingCard__informations__loadingElement {
    display: block;
    background-color: ar(--color-grey-400);
    border-bottom: ${pxToRem(1)} solid var(--color-grey-000);
    width: ${pxToRem(40)};
    height: ${pxToRem(16)};

    &:last-of-type {
      width: ${pxToRem(65)};
      border-top: ${pxToRem(1)} solid var(--color-grey-000);
      border-bottom: 0;
    }
  }

  .k-CrowdfundingCard__progressBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin-top: ${pxToRem(5)};
  }

  .k-CrowdfundingCard__progressBar__progress {
    flex: 1;
  }

  .k-CrowdfundingCard__progressBar__percent {
    display: none;
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

  /* isLoading */

  &.k-CrowdfundingCard--isLoading {
    .k-CrowdfundingCard__image__imageContainer {
      overflow: hidden;
      background-color: ar(--color-grey-400);
    }

    .k-CrowdfundingCard__image__title {
      background-color: ar(--color-grey-400);
      border-bottom: ${pxToRem(1)} solid var(--color-grey-000);
      width: ${pxToRem(70)};
      height: ${pxToRem(14)};
    }

    .k-CrowdfundingCard__subtitle__horizontalStroke {
      background-color: ar(--color-grey-400);
    }

    .k-CrowdfundingCard__image__description {
      background-color: ar(--color-grey-400);
      border-top: ${pxToRem(1)} solid var(--color-grey-000);
      width: ${pxToRem(100)};
      height: ${pxToRem(14)};
    }

    .k-CrowdfundingCard__progressBar__loadingPercent {
      display: block;
      background-color: ar(--color-grey-400);
      border-bottom: ${pxToRem(1)} solid var(--color-grey-000);
      width: ${pxToRem(40)};
      height: ${pxToRem(16)};
    }

    .k-CrowdfundingCard__cardButton__loadingButton {
      background-color: ar(--color-grey-400);
      border-color: ar(--color-grey-400);
    }
  }

  /* titlesMinHeight */

  &.k-CrowdfundingCard--titlesMinHeight .k-CrowdfundingCard__titleAndDesc {
    min-height: ${pxToRem(50)};
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

  .k-CrowdfundingCard__state {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    background-color: var(--color-grey-000);
    padding: ${COMPONENT_GUTTER};
    line-height: 1;
  }

  .k-CrowdfundingCard__widgetState {
    display: flex;
    position: absolute;
    background: var(--color-grey-900);
    border-radius: var(--border-radius-rounded);
    margin: ${pxToRem(10)} ${pxToRem(10)} 0 0;
    right: 0;
    top: 0;
    padding: ${pxToRem(10)} ${pxToRem(20)};
  }
`

const tabletStyles = css`
  .k-CrowdfundingCard__image__ownerContainer {
    display: inline-flex;
    align-items: center;
  }

  .k-CrowdfundingCard__title {
    padding: 0 ${COMPONENT_GUTTER};
  }

  .k-CrowdfundingCard__title__title {
    font-size: ${stepToRem(2)};
  }

  .k-CrowdfundingCard__subtitle__container {
    display: flex;
    align-items: center;
    line-height: 1;
    padding: 0 ${COMPONENT_GUTTER};
    margin-top: ${pxToRem(10)};
  }

  .k-CrowdfundingCard__additionalInfo {
    padding: 0 ${COMPONENT_GUTTER};
  }

  .k-CrowdfundingCard__informations {
    margin-top: ${pxToRem(30)};
    padding: 0 ${COMPONENT_GUTTER};
  }

  .k-CrowdfundingCard__informations__infoContainer {
    margin-right: ${pxToRem(20)};

    &:last-child {
      margin-right: 0;
    }
  }

  .k-CrowdfundingCard__progressBar {
    padding: 0 ${COMPONENT_GUTTER};
  }

  .k-CrowdfundingCard__progressBar__percent {
    display: inherit;
  }

  &.k-CrowdfundingCard--titlesMinHeight .k-CrowdfundingCard__titleAndDesc {
    min-height: ${pxToRem(75)};
  }

  .k-CrowdfundingCard__state {
    display: inline-flex;
    align-items: center;
  }
`

const desktopStyles = css``

export const StyledCrowdfundingCard = styled(({ forceVersion, ...props }) => (
  <div {...props} />
))`
  ${({ forceVersion }) => {
    return (() => {
      switch (forceVersion) {
        case 'desktop':
          return css`
            ${mobileStyles};
            ${tabletStyles};
            ${desktopStyles};
          `
        case 'tablet':
          return css`
            ${mobileStyles};
            ${tabletStyles};
          `
        case 'mobile':
          return css`
            ${mobileStyles};
          `
        default:
          return css`
            ${mobileStyles};

            @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
              ${tabletStyles};
            }

            @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
              ${desktopStyles};
            }
          `
      }
    })()
  }}
`
