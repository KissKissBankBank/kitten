import styled, { css } from 'styled-components'
import TYPOGRAPHY from './../../../../constants/typography-config'
import { pxToRem } from './../../../../helpers/utils/typography'
import { ArrowIcon } from './../../../icons/arrow-icon'

const sharedStyledArrowIcons = css`
  color: #fff;
  ${TYPOGRAPHY.fontStyles.regular};
  align-items: center;
  display: flex;
  transition: transform 0.3s ease-in-out;
  line-height: 1;
  width: 40%;
`

export const sharedHoverStyledArrowIcons = css`
  cursor: pointer;
  color: ${({ hoverColor }) => hoverColor};

  svg {
    fill: ${({ hoverColor }) => hoverColor};
  }
`

export const StyledRightArrowContainer = styled.div`
  justify-content: flex-end;
  text-align: right;
  ${sharedStyledArrowIcons}

  &:hover {
    transform: translate(${pxToRem(8)});
    ${sharedHoverStyledArrowIcons}
  }
`

export const StyledLeftArrowContainer = styled.div`
  justify-content: flex-start;
  ${sharedStyledArrowIcons}

  &:hover {
    transform: translate(-${pxToRem(8)});
    ${sharedHoverStyledArrowIcons}
  }
`

export const StyledArrowIcon = styled(ArrowIcon)`
  min-width: 9px;
  min-height: 9px;
`
export const StyledPrevText = styled.div`
  margin-left: ${pxToRem(6)};
`

export const StyledNextText = styled.div`
  margin-right: ${pxToRem(6)};
`
