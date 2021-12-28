import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'

export const StyledCard = styled.div`
  border: var(--border);
  border-radius: var(--border-radius-m);
  overflow: hidden;
  color: var(--color-grey-900);
  text-decoration: none;
  transition: border var(--transition);

  &[href]:active,
  &[href]:hover {
    border: var(--border-hover);
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
    overflow: hidden;

    .k-ProjectCard__image__image {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      object-position: center;
    }
  }

  .k-ProjectCard__content {
    position: relative;
    padding: ${pxToRem(30)} ${pxToRem(15)} ${pxToRem(10)};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${pxToRem(10)};
  }

  .k-ProjectCard__sticker {
    position: absolute;
    height: ${pxToRem(22)};
    box-sizing: border-box;
    top: ${pxToRem(-11)};
    left: ${pxToRem(15)};
    max-width: calc(100% - ${pxToRem(2 * (10 + 15))});

    line-height: ${pxToRem(20)};
    background-color: var(--projectCard-statusColor);
    border-radius: var(--border-radius-rounded);
    padding: ${pxToRem(0)} ${pxToRem(10)} ${pxToRem(2)};

    color: var(--color-grey-000);
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${pxToRem(12)};
  }

  .k-ProjectCard__title,
  .k-ProjectCard__line,
  .k-ProjectCard__progress {
    grid-column: span 3;
  }

  .k-ProjectCard__item {
    margin-top: ${pxToRem(20)};
    grid-column: span 1;

    > * {
      line-height: ${pxToRem(16)};
      display: block;
    }
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
`
