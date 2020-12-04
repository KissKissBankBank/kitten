import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { Container } from '../../../components/grid/container'

const hexToHsla = (color, opacity) => {
  const regex = /(var\(--color)-([\w]+[0-9]{1}\))/gi
  const newString = '$1-hsl-$2'
  const hslColor = color.replace(regex, newString)

  return `hsla(${hslColor}, ${opacity})`
}

const gradientWidth = 20

export const StyledContainer = styled(Container)`
  position: relative;
  padding-left: 0;
  padding-right: 0;
  overflow: scroll;
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
          ${hexToHsla(shadowColor, 1)},
          ${hexToHsla(shadowColor, 0)}
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
          ${hexToHsla(shadowColor, 1)},
          ${hexToHsla(shadowColor, 0)}
        );
      }
    `}
`

export const StyledScrollableContainer = styled.div`
  ${props => scrollableContainerStyle(props)}
`
