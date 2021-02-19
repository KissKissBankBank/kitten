import styled from 'styled-components'

import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const StyledList = styled.ul`
  --headerMenu-background-colors-hover: ${COLORS.background1};

  margin: 0;
  padding: 0;
  list-style: none;

  .k-HeaderMenu__item__link {
    display: block;
    position: relative;
    height: ${pxToRem(50)};
    box-sizing: border-box;

    padding: ${pxToRem(18)} ${pxToRem(30)} ${pxToRem(18)};

    background-color: ${COLORS.background1};

    ${TYPOGRAPHY.fontStyles.regular}
    color: ${COLORS.font1};
    line-height: 1;
    font-size: ${pxToRem(14)};
    text-decoration: none;

    &:focus {
      outline-offset: ${pxToRem(-3)};
    }

    &:hover,
    &:focus {
      color: ${COLORS.primary1};
      background-color: var(--headerMenu-background-colors-hover);
      transition: color 0.2s, background-color 0.4s;
    }
  }

  .k-HeaderMenu__item--external .k-HeaderMenu__item__link {
    display: flex;
    height: ${pxToRem(70)};
    padding: ${pxToRem(23)} ${pxToRem(21)} ${pxToRem(22)} ${pxToRem(30)};

    align-items: center;
    align-self: flex-start;
    justify-content: space-between;

    background-color: ${COLORS.background3};

    .k-HeaderMenu__item__arrow {
      margin-left: ${pxToRem(20)};
      position: relative;
      left: 0;
      transition: left 0.2s;
    }

    svg,
    img {
      max-height: ${pxToRem(24)};
      width: auto;
    }

    :focus,
    :hover {
      color: ${COLORS.font1};

      .k-HeaderMenu__item__arrow {
        left: ${pxToRem(5)};
      }
    }

    &::before {
      display: none;
    }

  }

  .k-HeaderMenu__item--hasButton {
    padding: ${pxToRem(20)};
    background-color: ${COLORS.background1};
  }

  &.k-HeaderMenu--hasBorderOnSide .k-HeaderMenu__item__link {
    &::before {
      content: '';
      position: absolute;
      top: ${pxToRem(-1)};
      bottom: 0;
      width: ${pxToRem(0)};
      background-color: transparent;
      transition: background-color 0.2s, width 0.2s;
    }

    &:hover::before,
    &:focus::before {
      background-color: ${COLORS.primary1};
      transition: width 0.2s;
    }
  }


  &.k-HeaderMenu--hasBorderOnSide-left .k-HeaderMenu__item__link::before {
    left: ${pxToRem(-1)};
  }

  &.k-HeaderMenu--hasBorderOnSide-right .k-HeaderMenu__item__link::before {
    right: ${pxToRem(-1)};
  }


  &.k-HeaderMenu--hasBorderOnSideOnHover .k-HeaderMenu__item__link {
    &:hover,
    &:focus {
      color: ${COLORS.primary1};

      &::before {
        width: ${pxToRem(4)};
        background-color: ${COLORS.primary1};
        transition: width 0.2s;
      }
    }
  }

  &.k-HeaderMenu--hasBigItems {
    .k-HeaderMenu__item .k-HeaderMenu__item__link {
      height: ${pxToRem(70)};
      padding: ${pxToRem(28)} ${pxToRem(21)} ${pxToRem(28)} ${pxToRem(40)};
    }

    .k-HeaderMenu__item--external .k-HeaderMenu__item__link {
      height: ${pxToRem(70)};
      padding: ${pxToRem(23)} ${pxToRem(21)} ${pxToRem(22)} ${pxToRem(40)};
    }
  }

  .k-HeaderMenu__item--tiny {
    .k-HeaderMenu__item__link {
      height: auto;
      padding-top: 0;
      padding-bottom: ${pxToRem(10)};
      ${TYPOGRAPHY.fontStyles.light}
    }

    & + .k-HeaderMenu__item--tiny .k-HeaderMenu__item__link {
        padding-top: ${pxToRem(5)};
    }
  }

  .k-HeaderMenu__item--big {
    .k-HeaderMenu__item__link {
      height: ${pxToRem(70)};
      padding: ${pxToRem(28)} ${pxToRem(21)} ${pxToRem(28)} ${pxToRem(40)};
    }

    &.k-HeaderMenu__item--external .k-HeaderMenu__item__link {
      height: ${pxToRem(70)};
      padding: ${pxToRem(23)} ${pxToRem(21)} ${pxToRem(22)} ${pxToRem(40)};
    }
  }

  .k-HeaderMenu__item--light {
    color: ${COLORS.font2};
  }

  .k-HeaderMenu__item--isSelected .k-HeaderMenu__item__link {
    color: ${COLORS.primary1};
  }

  &.k-HeaderMenu--hasBorderOnSide .k-HeaderMenu__item--isSelected .k-HeaderMenu__item__link::before {
    width: ${pxToRem(4)};
    background-color: ${COLORS.primary1};
  }

  &.k-HeaderMenu--hasBorders {
    border-left: ${pxToRem(1)} solid ${COLORS.line1};
    border-right: ${pxToRem(1)} solid ${COLORS.line1};

    .k-HeaderMenu__item__link {
      border-bottom: ${pxToRem(1)} solid ${COLORS.line1};
    }
  }
`
