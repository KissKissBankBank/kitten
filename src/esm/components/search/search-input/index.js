import styled from 'styled-components';
import { ScreenConfig } from '../../../constants/screen-config';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
export var SearchInput = styled.input.attrs({
  type: 'search'
}).withConfig({
  displayName: "search-input__SearchInput",
  componentId: "otbzr0-0"
})(["width:100%;border:none;appearance:none;", ";color:", ";caret-color:", ";font-size:", ";line-height:", ";@media (min-width:", "px){font-size:", ";line-height:", ";}@media (min-width:", "px){font-size:", ";line-height:", ";}::placeholder{color:", ";}&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration{display:none;}&::-ms-clear{display:none;}&:focus{outline:", " solid ", ";outline-offset:", ";}"], TYPOGRAPHY.fontStyles.bold, COLORS.text1, COLORS.primary1, pxToRem(28), pxToRem(44), ScreenConfig.S.min, pxToRem(48), pxToRem(68), ScreenConfig.L.min, pxToRem(64), pxToRem(88), COLORS.line1, COLORS.primary4, pxToRem(2), pxToRem(2));