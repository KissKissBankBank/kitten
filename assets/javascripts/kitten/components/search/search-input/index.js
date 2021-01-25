import styled from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const SearchInput = styled.input.attrs({ type: 'search' })`
  width: 100%;

  border: none;
  appearance: none;

  ${TYPOGRAPHY.fontStyles.bold};
  color: ${COLORS.text1};
  caret-color: ${COLORS.primary1};
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(44)};
  @media (min-width: ${ScreenConfig.S.min}px) {
    font-size: ${pxToRem(48)};
    line-height: ${pxToRem(68)};
  }
  @media (min-width: ${ScreenConfig.L.min}px) {
    font-size: ${pxToRem(64)};
    line-height: ${pxToRem(88)};
  }

  ::placeholder {
    color: ${COLORS.line1};
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::-ms-clear {
    display: none;
  }

  &:focus {
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
  }
`
