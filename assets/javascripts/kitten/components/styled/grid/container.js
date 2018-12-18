import styled from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import {
  CONTAINER_MAX_WIDTH,
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
} from '../../../constants/grid-config'

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  box-sizing: border-box;
  max-width: ${pxToRem(CONTAINER_MAX_WIDTH)};
  padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    padding-left: ${pxToRem(CONTAINER_PADDING)};
    padding-right: ${pxToRem(CONTAINER_PADDING)};
  }
`

export default StyledContainer
