import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'

export const StyledBackingCard = styled.article`
  --backingCard--border-width: 0;
  --backingCard--border-radius: 0;
  --backingCard--grid-col: repeat(auto-fit, minmax(${pxToRem(120)}, 1fr));
  --backingCard--border-color: var(--color-grey-400);

  /* CARD STYLE */

  border: var(--backingCard--border-width) solid
    var(--backingCard--border-color);
  border-radius: var(--backingCard--border-radius);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: border-color 0.2s ease-in-out;

  &.k-BackingCard--hasBorder {
    --backingCard--border-width: var(--border-width);
    --backingCard--border-radius: var(--border-radius-m);
  }

  /* STRUCTURE */

  .k-BackingCard__imageWrapper {
    flex: 0 0 auto;
  }

  .k-BackingCard__gridWrapper {
    flex: 1 1 auto;
    padding: ${pxToRem(30)};
    display: grid;
    grid-template-columns: [row-start] var(--backingCard--grid-col) [row-end];
    grid-gap: ${pxToRem(20)};
    align-content: start;
    overflow: hidden;
    text-align: left;

    .k-BackingCard__drawer {
      grid-column: row-start / span row-end;
      align-self: start;
      margin: 0;
    }
    .k-BackingCard__halfDrawer {
      margin: ${pxToRem(-10)} 0 0;
    }
    .k-BackingCard__drawer + .k-BackingCard__halfDrawer {
      grid-column-start: row-start;
      margin: ${pxToRem(-10)} 0 ${pxToRem(-10)};
    }
    .k-BackingCard__drawer--extensible {
      align-self: stretch;
    }
  }

  .k-BackingCard__button {
    flex: 0 0 auto;
  }

  /* SUBCOMPONENTS */

  .k-BackingCard__imageWrapper {
    max-width: 100%;
    margin: 0;
    border-top-left-radius: calc(
      var(--backingCard--border-radius) - var(--backingCard--border-width)
    );
    border-top-right-radius: calc(
      var(--backingCard--border-radius) - var(--backingCard--border-width)
    );
    position: relative;
    padding-top: calc((5 / 8) * 100%); /* ratio: 16/10 */
    overflow: hidden;

    img,
    figure,
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      transition: transform 0.2s ease-in-out;
    }
  }

  .k-BackingCard__amount {
    font-size: ${stepToRem(5)};
  }
  .k-BackingCard__button {
    margin: 0 ${pxToRem(30)} ${pxToRem(30)};
  }

  .k-BackingCard__descriptionWrapper {
    overflow: hidden;
    position: relative;

    &.k-BackingCard__descriptionWrapper--truncateText {
      max-height: calc(3 * 1.5 * ${stepToRem(-2)});

      .k-BackingCard__description__moreButton {
        position: absolute;
        top: calc(2 * 1.5 * ${stepToRem(-2)});
        right: 0;
        padding-left: ${pxToRem(40)};
        line-height: 1.5;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) ${pxToRem(30)}
        );
      }
    }

    .k-BackingCard__description * {
      ${TYPOGRAPHY.fontStyles.light.fontFamily};
      font-size: ${stepToRem(-2)};
      line-height: calc(1.5 * ${stepToRem(-2)});
    }
  }

  .k-BackingCard__headingTag {
    justify-self: start;
    display: flex;
    align-items: center;
    gap: ${pxToRem(10)};

    color: ${COLORS.primary1};
    ${TYPOGRAPHY.fontStyles.regular}

    svg,
    path {
      color: inherit;

      &[fill] {
        fill: currentColor;
      }
      &[stroke] {
        stroke: currentColor;
      }
    }
  }

  .k-BackingCard__info__legend,
  .k-BackingCard__info__value {
    white-space: nowrap;
  }

  .k-BackingCard__tagList {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(10)};
  }

  &.k-BackingCard--disabled {
    color: ${COLORS.font2};
    cursor: not-allowed;

    .k-BackingCard__imageWrapper {
      img,
      figure,
      video {
        filter: grayscale(1) opacity(0.4);
      }
    }

    .k-Tag {
      color: ${COLORS.font2};
      background-color: ${COLORS.line1};
    }

    .k-BackingCard__description__moreButton {
      color: ${COLORS.font2};
    }
  }

  &.k-BackingCard--hasHover:hover,
  button&:hover,
  a&:hover {
    --backingCard--border-color: var(--color-grey-500);

    cursor: pointer;

    .k-BackingCard__imageWrapper {
      img,
      figure,
      video {
        transform: scale(1.05);
      }
    }
    .k-BackingCard__button {
      border-color: ${COLORS.primary2};
      background-color: ${COLORS.primary2};
    }
    .k-BackingCard__description__moreButton {
      color: ${COLORS.primary2};
    }
  }

  button&:active,
  a&:active {
    --backingCard--border-color: var(--color-grey-600);
  }
`
