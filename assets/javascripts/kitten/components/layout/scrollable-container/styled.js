import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { Container } from '../../../components/layout/container'
import { hexToRgba } from '../../../helpers/utils/hex-to-rgba'

const gradientWidth = 20

export const StyledContainer = styled(Container)`
  position: relative;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
`

export const scrollableContainerStyle = ({}) => css`
  display: flex;
  white-space: nowrap;
  overflow-x: auto;

  /* Mandatory to combine scroll with this property on iOS. */
  -webkit-overflow-scrolling: touch;
  /* Hide scrollbar on Chrome and Safari. */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    pointer-events: none;
    touch-action: none;
  }
  ${({ displayLeftGradient, shadowColor }) =>
    displayLeftGradient &&
    css`
      &:before {
        left: 0;
        width: ${pxToRem(gradientWidth)};
        background-image: linear-gradient(
          to right,
          ${hexToRgba(shadowColor, 1)},
          ${hexToRgba(shadowColor, 0)}
        );
      }
    `}
  ${({ displayRightGradient, shadowColor }) =>
    displayRightGradient &&
    css`
      &:after {
        right: 0;
        width: ${pxToRem(gradientWidth)};
        background-image: linear-gradient(
          to left,
          ${hexToRgba(shadowColor, 1)},
          ${hexToRgba(shadowColor, 0)}
        );
      }
    `}
`

export const StyledScrollableContainer = styled.div`
  ${props => scrollableContainerStyle(props)}
`
