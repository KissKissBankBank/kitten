import { css } from 'styled-components'
import { pxToRem, stepToRem, COLORS, TYPOGRAPHY, ScreenConfig } from 'kitten'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

export const titleStyles = css`
  ${TYPOGRAPHY.fontStyles['700']}
  font-size: ${stepToRem(-1)};
  margin: ${pxToRem(40)} ${pxToRem(20)} ${pxToRem(10)};
  line-height: 1;

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    font-size: ${stepToRem(0)};
    margin: ${pxToRem(50)} 0 ${pxToRem(15)};
  }
`

export const containerStyles = css`
  box-sizing: border-box;
  border: ${borderWidth} solid ${borderColor};
  padding: ${pxToRem(20)};
  ${TYPOGRAPHY.fontStyles['400']}
  font-size: ${stepToRem(-2)};
  line-height: 1.4;
  margin: 0 ${pxToRem(20)};

  strong {
    ${TYPOGRAPHY.fontStyles['500']}
    font-size: ${stepToRem(-1)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    padding: ${pxToRem(30)};
    font-size: ${stepToRem(-1)};
    margin: 0;

    strong {
      font-size: ${stepToRem(0)};
    }
  }

  & + & {
    margin-top: ${pxToRem(20)};
  }
`
