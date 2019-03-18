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

const sharedHoverStyledArrowIcons = css`
  cursor: pointer;
  color: ${({ hoverColor }) => hoverColor};

  svg {
    fill: ${({ hoverColor }) => hoverColor};
  }
`

const rightContainer = css`
  justify-content: flex-end;
  text-align: right;
`

const leftContainer = css`
  justify-content: flex-start;
`

export const RightEmptyContainer = styled.div`
  ${rightContainer}
  flex: 1;
`

export const LeftEmptyContainer = styled.div`
  ${leftContainer}
  flex: 1;
`

export const StyledRightArrowContainer = styled.div`
  ${rightContainer}
  ${sharedStyledArrowIcons}

  &:hover {
    transform: translate(${pxToRem(8)});
    ${sharedHoverStyledArrowIcons}
  }
`

export const StyledLeftArrowContainer = styled.div`
  ${leftContainer}
  ${sharedStyledArrowIcons}

  &:hover {
    transform: translate(-${pxToRem(8)});
    ${sharedHoverStyledArrowIcons}
  }
`

export const StyledArrowIcon = styled(ArrowIcon)`
  min-width: ${pxToRem(9)};
  min-height: ${pxToRem(9)};
`

export const StyledPrevText = styled.div`
  margin-left: ${pxToRem(6)};
`

export const StyledNextText = styled.div`
  margin-right: ${pxToRem(6)};
`
