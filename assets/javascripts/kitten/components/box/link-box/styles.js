import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const StyledLinkBox = styled.a`
  display: flex;
  color: ${COLORS.font1};
  text-decoration: none;

  .k-LinkBox__link {
    display: flex;
    min-height: ${pxToRem(90)};
    width: 100%;
    box-sizing: border-box;
    color: ${COLORS.font1};
    background-color: ${COLORS.background1};
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: ${pxToRem(4)};

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

  .k-LinkBox__link--deprecated {
    border-radius: 0;
  }

  .k-LinkBox__textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin-left: ${pxToRem(15)};
  }

  .k-LinkBox__textContainer--deprecated {
    margin-left: ${pxToRem(20)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-left: ${pxToRem(30)};
    }
  }

  .k-LinkBox__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${pxToRem(20)} 0 ${pxToRem(20)} ${pxToRem(20)};
    background-color: transparent;
  }

  .k-LinkBox__icon--deprecated {
    padding: 0;
    margin: ${pxToRem(-2)} 0 ${pxToRem(-2)} ${pxToRem(-2)};
    min-width: ${pxToRem(90)};
    background-color: ${COLORS.primary4};
  }

  .k-LinkBox__arrow {
    display: flex;
    align-items: center;
    padding: ${pxToRem(15)} ${pxToRem(22)} ${pxToRem(15)} ${pxToRem(18)};
    transition: transform 0.4s ease-in-out;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-left: ${pxToRem(30)};
      padding-right: ${pxToRem(32)};
    }
  }
`
