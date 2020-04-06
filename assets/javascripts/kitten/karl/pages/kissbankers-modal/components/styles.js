import { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ScreenConfig } from '../../../../constants/screen-config'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

export const titleStyles = css`
  ${TYPOGRAPHY.fontStyles.bold}
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
  ${TYPOGRAPHY.fontStyles.light}
  font-size: ${stepToRem(-2)};
  line-height: 1.4;
  margin: 0 ${pxToRem(20)};

  strong {
    ${TYPOGRAPHY.fontStyles.regular}
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
