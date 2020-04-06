import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'

export const Title = styled.p`
  margin: 0 0 ${pxToRem(2)};

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(16)};
  line-height: normal;
`
