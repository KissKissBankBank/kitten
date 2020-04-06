import { css } from 'styled-components'
import { stepToRem, pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const strokeStyles = stroke => {
  let strokeWidth
  let strokeHeight
  let strokeMarginTop
  let strokeMarginBottom

  switch(stroke) {
    case 'big' :
      strokeWidth = 50
      strokeHeight = 6
      strokeMarginTop = 20
      strokeMarginBottom = 40
      break

    case 'default' :
      strokeWidth = 40
      strokeHeight = 6
      strokeMarginTop = 20
      strokeMarginBottom = 40
      break

    case 'tiny' :
      strokeWidth = 30
      strokeHeight = 4
      strokeMarginTop = 15
      strokeMarginBottom = 30
      break
  }

  return css`
    width: ${strokeWidth};
    heigth: ${strokeHeight};
    margin-top: ${strokeMarginTop};
    margin-bottom: ${strokeMarginBottom};
  `
}
