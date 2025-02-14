import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { pxToRem } from '../../../../helpers/utils/typography'

export const StyledLinkBox = styled.a`
  display: flex;
  color: var(--LinkBox-text-color);
  text-decoration: none;

  &:focus {
    .k-LinkBox__arrow {
      transform: translate(${pxToRem(5)}, ${pxToRem(0)});
    }
  }

  .k-LinkBox__link {
    display: flex;
    min-height: ${pxToRem(90)};
    width: 100%;
    box-sizing: border-box;
    color: ${COLORS.font1};
    background-color: var(--LinkBox-background-color);
    border: var(--border);
    border-radius: var(--border-radius-s);
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${COLORS.background2};

      .k-LinkBox__arrow {
        transform: translate(${pxToRem(5)}, ${pxToRem(0)});
      }
    }

    &:active {
      background-color: ${COLORS.background3};
    }
  }

  .k-LinkBox__textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin: ${pxToRem(20)} 0 ${pxToRem(20)} ${pxToRem(15)};
  }

  .k-LinkBox__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${pxToRem(20)} 0 ${pxToRem(20)} ${pxToRem(20)};
    background-color: transparent;
  }

  .k-LinkBox__arrow {
    display: flex;
    align-items: center;
    padding: ${pxToRem(15)} ${pxToRem(22)} ${pxToRem(15)} ${pxToRem(18)};
    transition: transform 0.2s ease-in-out;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-left: ${pxToRem(30)};
      padding-right: ${pxToRem(32)};
    }
  }

  // VARIANT

  .k-LinkBox__link--orion {
    min-height: ${pxToRem(60)};
    padding-top: ${pxToRem(7)};
    padding-bottom: ${pxToRem(7)};
    background-color: var(--LinkBox-background-color);
    border: var(--border-width) solid var(--LinkBox-background-color);

    &.k-LinkBox__link--size-small {
      min-height: ${pxToRem(40)};
      padding-top: 0;
      padding-bottom: 0;
    }

    &:hover {
      background-color: var(--LinkBox-background-color);
      border: var(--border-width) solid var(--LinkBox-background-color);

      .k-LinkBox__arrow {
        transform: translate(${pxToRem(5)}, ${pxToRem(0)});
      }
    }

    &:active {
      background-color: var(--LinkBox-background-color);
      border: var(--border-width) solid var(--LinkBox-background-color);
    }

    .k-LinkBox__arrow {
      padding-left: ${pxToRem(20)};
      padding-right: ${pxToRem(18)};
    }

    .k-LinkBox__textContainer {
      margin: 0 0 0 ${pxToRem(20)};
      color: var(--LinkBox-text-color);
    }
  }
`
