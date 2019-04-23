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

  background: linear-gradient(to right, white 30%, rgba(255, 255, 255, 0)),
    linear-gradient(to left, white 30%, rgba(255, 255, 255, 0)),
    radial-gradient(
      farthest-side at 0 50%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
      farthest-side at 100% 50%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    );

  background-repeat: no-repeat;
  background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;
  background-position: 0, 100%;

  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
`

export const StyledScrollableContainer = styled.div`
  ${ScrollableContainerStyle}
`
