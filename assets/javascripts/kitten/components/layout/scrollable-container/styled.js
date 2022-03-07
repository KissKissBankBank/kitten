import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { Container } from '../../../components/layout/container'

const gradientWidth = 20

export const StyledContainer = styled(Container)`
  position: relative;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
`

export const scrollableContainerStyle = ({}) => css`
  /* Deprecated */
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
    z-index: 5;
  }
  ${({ displayLeftGradient, shadowColor }) =>
    displayLeftGradient &&
    css`
      &:before {
        left: 0;
        width: ${pxToRem(gradientWidth)};
        background-image: linear-gradient(
          to right,
          ${shadowColor},
          transparent
        );
      }
    `}
  ${({ displayRightGradient, shadowColor }) =>
    displayRightGradient &&
    css`
      &:after {
        right: 0;
        width: ${pxToRem(gradientWidth)};
        background-image: linear-gradient(to left, ${shadowColor}, transparent);
      }
    `}
`

export const StyledScrollableContainer = styled.div`
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: none;

  /* Mandatory to combine scroll with this property on iOS. */
  -webkit-overflow-scrolling: touch;
  /* Hide scrollbar on Chrome and Safari. */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    pointer-events: none;
    touch-action: none;
    z-index: 5;
    width: ${pxToRem(gradientWidth)};
    opacity: 0;
    transition: opacity var(--transition);
  }

  &::before {
    left: 0;
    background-image: linear-gradient(
      to right,
      var(--scrollableContainer-gradient),
      transparent
    );
  }
  &::after {
    right: 0;
    background-image: linear-gradient(
      to left,
      var(--scrollableContainer-gradient),
      transparent
    );
  }

  &.k-ScrollableContainer--hasLeftGradient::before,
  &.k-ScrollableContainer--hasRightGradient::after {
    opacity: 1;
  }
`
