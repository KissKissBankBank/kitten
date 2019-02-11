import styled, { css } from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import ColorsConfig from '../../../constants/colors-config'
import { Container } from '../../../components/grid/container'

const gradientWidth = 20

export const StyledContainer = styled(Container)`
  position: relative;
  padding-left: 0;
  padding-right: 0;
`

export const StyledScrollableContainer = styled.div`
  display: flex;
  white-space: nowrap;
  overflow-x: auto;

  /* Hide scrollbar on IE and Edge. */
  -ms-overflow-style: none;
  /* Mandatory to combine scroll with this property on iOS. */
  -webkit-overflow-scrolling: touch;
  /* Hide scrollbar on Chrome and Safari. */
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledLeftGradient = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${pxToRem(gradientWidth)};
  background: linear-gradient(
    90deg,
    ${ColorsConfig.background1},
    rgba(255, 255, 255, 0)
  );
`

export const StyledRightGradient = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: ${pxToRem(gradientWidth)};
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    ${ColorsConfig.background1}
  );
`
