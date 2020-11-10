import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'

const Title = styled.p`
  margin: 0 0 ${pxToRem(2)};

  ${TYPOGRAPHY.fontStyles.bold};
  font-size: ${stepToRem(-1)};
  line-height: normal;
`

export default Title
