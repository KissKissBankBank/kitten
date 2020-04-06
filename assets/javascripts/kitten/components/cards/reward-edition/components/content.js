import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const Content = styled.div`
  padding: ${pxToRem(40)};

  @media (max-width: ${ScreenConfig.S.max}px) {
    padding: ${pxToRem(30)};
  }
`
