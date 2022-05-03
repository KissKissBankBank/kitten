import styled, { keyframes } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'

const loadingKeyframes = keyframes`
  from { transform: translateX(-100%) }
  to { transform: translateX(100%) }
`

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  border-radius: var(--border-radius-xs);
  color: var(--color-grey-900);
  text-decoration: none;
  transition: border var(--transition);
  box-shadow: var(--box-shadow-m);

  &[href]:active,
  &[href]:hover {
    box-shadow: var(--box-shadow-hover-m);

    .k-ProjectCard__image__overlay {
      opacity: 1;
    }

    &.k-ProjectCard--hoverableTitle .k-ProjectCard__title {
      color: var(--color-primary-500);
    }
  }

  &[href]:focus-visible {
    outline: var(--outline);
  }

  &.k-ProjectCard--normal {
    --projectCard-statusColor: var(--color-primary-500);
  }

  &.k-ProjectCard--danger {
    --projectCard-statusColor: var(--color-danger-500);
  }

  &.k-ProjectCard--warning {
    --projectCard-statusColor: var(--color-warning-500);
  }

  &.k-ProjectCard--success {
    --projectCard-statusColor: var(--color-success-500);
  }

  &.k-ProjectCard--disabled {
    --projectCard-statusColor: var(--color-grey-500);
  }

  .k-ProjectCard__image {
    position: relative;
    overflow: hidden;
    flex: 0 0 auto;
    border-top-left-radius: calc(var(--border-radius-m) - 1px);
    border-top-right-radius: calc(var(--border-radius-m) - 1px);

    .k-ProjectCard__image__image {
      display: block;
      width: 100%;
      object-fit: cover;
      object-position: center;
      @supports (aspect-ratio: 16 / 10) {
        aspect-ratio: 16 / 10;
      }
    }

    @supports not (aspect-ratio: 16 / 10) {
      height: 0;
      padding-bottom: calc((10 / 16) * 100%);

      .k-ProjectCard__image__image {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    .k-ProjectCard__image__overlay {
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      display: flex;
      position: absolute;
      text-align: center;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;
      padding: ${pxToRem(20)};
      font-size: ${pxToRem(14)};
      color: var(--color-grey-000);
      ${TYPOGRAPHY.fontStyles.bold};
      transition: opacity var(--transition);
      background-color: rgba(34, 34, 34, 0.8);
    }
  }

  .k-ProjectCard__topLine {
    position: absolute;
    top: 0;
    left: ${pxToRem(15)};
    right: ${pxToRem(15)};
    transform: translateY(-50%);

    display: flex;
    align-items: center;

    &.k-ProjectCard__topLine--left {
      justify-content: flex-start;
    }
    &.k-ProjectCard__topLine--center {
      justify-content: center;
    }
    &.k-ProjectCard__topLine--right {
      justify-content: flex-end;
    }
  }

  .k-ProjectCard__title {
    transition: color var(--transition);
  }

  .k-ProjectCard__content {
    flex: 1 0 auto;
    position: relative;
    padding: ${pxToRem(30)} ${pxToRem(15)} ${pxToRem(10)};
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
  }

  .k-ProjectCard__sticker {
    position: absolute;
    height: ${pxToRem(22)};
    box-sizing: border-box;
    top: ${pxToRem(-11)};
    left: ${pxToRem(15)};
    max-width: calc(100% - ${pxToRem(2 * (10 + 15))});

    line-height: ${pxToRem(22)};
    background-color: var(--projectCard-statusColor);
    border-radius: var(--border-radius-rounded);
    padding: ${pxToRem(0)} ${pxToRem(10)};

    color: var(--color-grey-000);
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${pxToRem(12)};
  }

  .k-ProjectCard__avatar {
    position: absolute;
    height: ${pxToRem(75)};
    width: ${pxToRem(75)};
    box-sizing: border-box;
    top: ${pxToRem(-50)};
    left: ${pxToRem(15)};
    background-color: var(--color-grey-000);
    border-radius: var(--border-radius-m);
    border: var(--border-width) solid var(--color-grey-300);
    padding: ${pxToRem(10)};
    box-shadow: 0px 0px ${pxToRem(20)} rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .k-ProjectCard__avatar + .k-ProjectCard__title {
    margin-top: ${pxToRem(10)};
  }

  .k-ProjectCard__title,
  .k-ProjectCard__line,
  .k-ProjectCard__itemsLine,
  .k-ProjectCard__progress {
    flex: 0 0 auto;
  }

  .k-ProjectCard__line--lastLine {
    flex-grow: 1;
  }

  .k-ProjectCard__itemsLine {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: ${pxToRem(10)};
    flex: 1 0 auto;
    align-items: end;

    &:not(.k-ProjectCard__itemsLine--noMargin) {
      margin-top: ${pxToRem(20)};
    }
  }

  .k-ProjectCard__item > * {
    line-height: ${pxToRem(16)};
    display: block;
  }

  .k-ProjectCard__progress {
    display: flex;
    align-items: center;
    gap: ${pxToRem(20)};

    .k-Meters-Progress {
      flex: 1 0 auto;

      .k-Meters-Progress__ramp {
        --progress-color: var(--projectCard-statusColor);

        height: ${pxToRem(4)};
      }
    }
  }

  &.k-ProjectCard--isStretched {
    height: 100%;
  }

  &.k-ProjectCard--isLoading {
    --projectCard-statusColor: var(--color-grey-400);

    position: relative;
    border-color: var(--color-grey-300);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform: translateX(-100%);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.6) 25%,
        rgba(255, 255, 255, 0) 50%
      );
      animation: x 2s linear infinite;
      animation-name: ${loadingKeyframes};
    }

    .k-ProjectCard__image {
      background-color: var(--color-grey-300);
    }

    .k-ProjectCard__image__image {
      opacity: 0;
    }

    .k-ProjectCard__title {
      min-height: ${pxToRem(20)};
    }

    .k-ProjectCard__line {
      min-height: ${pxToRem(16)};
    }

    .k-ProjectCard__item {
      min-width: ${pxToRem(50)};
      min-height: ${pxToRem(16)};
    }

    .k-ProjectCard__sticker {
      display: none;
    }

    .k-ProjectCard__title,
    .k-ProjectCard__line,
    .k-ProjectCard__item,
    .k-ProjectCard__progress__text {
      color: var(--color-grey-300);
      background-color: var(--color-grey-300);
    }
  }
`
