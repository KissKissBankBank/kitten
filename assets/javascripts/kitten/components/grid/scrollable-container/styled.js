import styled, { css } from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Container } from '../../../components/grid/container'
import { rgba } from 'polished'

const gradientWidth = 20

export const StyledContainer = styled(Container)`
  position: relative;
  padding-left: 0;
  padding-right: 0;
`

export const ScrollableContainerStyle = css`
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

  background-image: linear-gradient(
      to right,
      ${props =>
        `${rgba(props.backgroundColor, 1)} 30%, ${rgba(
          props.backgroundColor,
          0,
        )}`}
    ),
    linear-gradient(
      to left,
      ${props =>
        `${rgba(props.backgroundColor, 1)} 30%, ${rgba(
          props.backgroundColor,
          0,
        )}`}
    ),
    radial-gradient(
      farthest-side at 0 50%,
      ${props =>
        `${rgba(props.shadowColor, 0.3)}, ${rgba(props.shadowColor, 0)}`}
    ),
    radial-gradient(
      farthest-side at 100% 50%,
      ${props =>
        `${rgba(props.shadowColor, 0.3)}, ${rgba(props.shadowColor, 0)}`}
    );

  background-repeat: no-repeat;
  background-size: ${pxToRem(60)} 100%, ${pxToRem(60)} 100%, ${pxToRem(20)} 100%,
    ${pxToRem(20)} 100%;
  background-position: 0, 100%, 0, 100%;

  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
`

export const StyledScrollableContainer = styled.div`
  ${ScrollableContainerStyle}
`
