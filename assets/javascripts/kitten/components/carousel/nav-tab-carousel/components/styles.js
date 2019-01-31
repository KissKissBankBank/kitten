import styled, { css } from 'styled-components'
import TYPOGRAPHY from './../../../../constants/typography-config'
import { pxToRem } from './../../../../helpers/utils/typography'
import { ArrowIcon } from './../../../icons/arrow-icon'

const sharedArrowIconStyles = css`
  color: #fff;
  ${TYPOGRAPHY.fontStyles.regular};
  align-items: center;
  display: flex;
  transition: transform 0.3s ease-in-out;
  line-height: 1;
  width: 40%;
`

export const sharedHoverArrowIconStyles = css`
  cursor: pointer;
  color: ${({ hoverColor }) => hoverColor};

  svg {
    fill: ${({ hoverColor }) => hoverColor};
  }
`

export const RightArrowContainerStyles = styled.div`
  justify-content: flex-end;
  text-align: right;
  ${sharedArrowIconStyles}

  &:hover {
    transform: translate(${pxToRem(8)});
    ${sharedHoverArrowIconStyles}
  }
`

export const LeftArrowContainerStyles = styled.div`
  justify-content: flex-start;
  ${sharedArrowIconStyles}

  &:hover {
    transform: translate(-${pxToRem(8)});
    ${sharedHoverArrowIconStyles}
  }
`

export const ArrowIconStyle = styled(ArrowIcon)`
  min-width: 9px;
  min-height: 9px;
`
export const PrevTextStyles = styled.div`
  margin-left: ${pxToRem(6)};
`

export const NextTextStyles = styled.div`
  margin-right: ${pxToRem(6)};
`
