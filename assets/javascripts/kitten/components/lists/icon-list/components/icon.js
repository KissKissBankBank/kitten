import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ScreenConfig } from '../../../../constants/screen-config'

const ICON_SIZE = pxToRem(50)

export const Icon = styled.span`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  border-radius: ${ICON_SIZE};
  box-sizing: border-box;

  margin-right: ${pxToRem(20)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin-right: ${pxToRem(40)};
  }

  background-color: ${COLORS.background1};
  border: 2px solid ${COLORS.line1};

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(14)};
`
