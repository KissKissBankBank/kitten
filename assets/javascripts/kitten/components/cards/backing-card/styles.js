import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

export const StyledBackingCard = styled.article`
  --backingCard--border-width: ${pxToRem(2)};
  --backingCard--border-radius: ${pxToRem(8)};
  --backingCard--grid-min: ${pxToRem(120)};

  /* CARD STYLE */

  border: var(--backingCard--border-width) solid ${COLORS.line1};
  border-radius: var(--backingCard--border-radius);
  display: flex;
  flex-direction: column;

  /* STRUCTURE */

  .k-BackingCard__imageWrapper {
    flex: 0 0 auto;
  }

  .k-BackingCard__gridWrapper {
    flex: 1 1 auto;
    padding: ${pxToRem(30)};
    display: grid;
    grid-template-columns:
      [row-start] repeat(auto-fit, minmax(var(--backingCard--grid-min), 1fr))
      [row-end];
    grid-gap: ${pxToRem(20)};
    align-content: start;
    overflow: hidden;

    .k-BackingCard__drawer {
      grid-column: row-start / span row-end;
      align-self: start;
      margin: 0;
    }
    .k-BackingCard__halfDrawer {
      margin: ${pxToRem(-10)} 0 0;
    }
    .k-BackingCard__drawer + .k-BackingCard__halfDrawer {
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
    max-width: calc(100% + 2 * var(--backingCard--border-width));
    margin: calc(-1 * var(--backingCard--border-width))
      calc(-1 * var(--backingCard--border-width)) 0;
    border-top-left-radius: var(--backingCard--border-radius);
    border-top-right-radius: var(--backingCard--border-radius);
    position: relative;
    padding-top: calc((5 / 8) * 100%);
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

    * {
      font-size: ${stepToRem(-2)};
      line-height: 1.5;
    }

    /* TEMP */
    * {
      margin: 0;
    }
  }

  .k-BackingCard__tagList {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(10)};
  }
`
