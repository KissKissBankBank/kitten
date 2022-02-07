import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { mq } from '../../../../constants/screen-config'

export const StyledBackingCard = styled.article`
  --backingCard--border-width: 0;
  --backingCard--border-radius: 0;
  --backingCard--grid-col: repeat(auto-fit, minmax(${pxToRem(120)}, 1fr));
  --backingCard--border-color: var(--color-grey-400);

  /* CARD STYLE */

  position: relative;
  border: var(--backingCard--border-width) solid
    var(--backingCard--border-color);
  border-radius: var(--backingCard--border-radius);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: border-color 0.2s ease-in-out;

  &.k-BackingCard--isStretched {
    height: 100%;
  }

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
    padding: ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(20)};
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
    margin: 0 ${pxToRem(20)} ${pxToRem(20)};
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

  .k-BackingCard__titleWrapper {
    line-height: ${pxToRem(22)};
    height: ${pxToRem(44)};
    display: flex;
    align-items: center;
  }

  .k-BackingCard__title {
    width: 100%;
    white-space: nowrap;
  }

  .k-BackingCard__amount__wrapper {
    margin: 0;
  }

  .k-BackingCard__amount {
    position: relative;
    top: ${pxToRem(-5)};
    font-size: ${pxToRem(28)};
    color: var(--color-primary-500);
    line-height: 0.9em;
    letter-spacing: -0.015em !important;
  }

  .k-BackingCard__amount__suffix {
    font-size: ${pxToRem(10)};
    line-height: ${pxToRem(22)};
    color: var(--color-grey-700);
  }

  .k-BackingCard__descriptionWrapper {
    --backingCard-description-fontSize: ${pxToRem(12)};

    @media ${mq.tabletAndDesktop} {
      --backingCard-description-fontSize: ${pxToRem(14)};
    }

    .k-BackingCard__description--truncateText {
      overflow: hidden;
      position: relative;
      max-height: calc(
        6 * (var(--backingCard-description-fontSize) + ${pxToRem(4)})
      );
    }

    .k-BackingCard__description__moreButton {
      margin-top: ${pxToRem(10)};
    }

    .k-BackingCard__description * {
      ${TYPOGRAPHY.fontStyles.light.fontFamily};
      font-size: var(--backingCard-description-fontSize);
      line-height: calc(
        (var(--backingCard-description-fontSize) + ${pxToRem(4)})
      );
    }
  }

  .k-BackingCard__headingTag {
    position: absolute;
    top: ${pxToRem(-12)};
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: ${pxToRem(6)};

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
    align-items: center;
    justify-content: center;
    gap: ${pxToRem(10)};
  }

  &.k-BackingCard--hasHover:hover:not(.k-BackingCard--disabled),
  button&:hover:not(.k-BackingCard--disabled),
  a&:hover:not(.k-BackingCard--disabled) {
    --backingCard--border-color: var(--color-grey-500);

    cursor: pointer;

    .k-BackingCard__imageWrapper {
      img,
      figure,
      video {
        transform: scale(1.05);
      }
    }
    .k-BackingCard__button:not(.k-Button--disabled) {
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

  &.k-BackingCard--disabled {
    color: var(--color-grey-500);
    cursor: not-allowed;

    .k-BackingCard__imageWrapper {
      img,
      figure,
      video {
        filter: grayscale(1) opacity(0.4);
      }
    }

    .k-BackingCard__amount,
    .k-BackingCard__amount__suffix {
      color: var(--color-grey-500);
    }

    .k-Tag:not(.k-BackingCard__headingTag) {
      background-color: var(--color-grey-200);
      color: var(--color-grey-500);
    }

    .k-Tag.k-BackingCard__headingTag {
      background-color: var(--color-grey-500);
      color: var(--color-grey-100);
    }

    .k-BackingCard__description__moreButton.k-u-color-primary1 {
      color: var(--color-grey-600) !important;
    }
  }
`
