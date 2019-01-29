import React from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from './../../../icons/arrow-icon'
import TYPOGRAPHY from './../../../../constants/typography-config'
import { pxToRem } from './../../../../helpers/utils/typography'

const RightArrowContainerStyles = styled.div`
  color: #fff;
  ${TYPOGRAPHY.fontStyles.regular};
  align-items: center;
  display: flex;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate(${pxToRem(8)});
    cursor: pointer;
    color: ${({ hoverColor }) => hoverColor};

    svg {
      fill: ${({ hoverColor }) => hoverColor};
    }
  }
`

const TextStyles = styled.div`
  margin-right: ${pxToRem(6)};
`

export const Next = ({ children, hoverColor }) => {
  return (
    <RightArrowContainerStyles hoverColor={hoverColor}>
      <TextStyles>{children}</TextStyles>
      <ArrowIcon version="solid" fill="#fff" />
    </RightArrowContainerStyles>
  )
}
