import styled, { css } from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Container } from '../../../components/grid/container'
import { rgba } from 'polished'

const gradientWidth = 60

export const StyledContainer = styled(Container)`
  position: relative;
  padding-left: 0;
  padding-right: 0;
`

export const scrollableContainerStyle = ({}) => css`
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

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  ${({ displayLeftGradient, shadowColor }) =>
    displayLeftGradient &&
    css`
      &:before {
        left: 0;
        width: ${pxToRem(gradientWidth)};
        background-image: linear-gradient(
          to right,
          ${rgba(shadowColor, 1)},
          ${rgba(shadowColor, 0)}
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
          ${rgba(shadowColor, 1)},
          ${rgba(shadowColor, 0)}
        );
      }
    `}
`

export const StyledScrollableContainer = styled.div`
  ${props => scrollableContainerStyle(props)}
`
