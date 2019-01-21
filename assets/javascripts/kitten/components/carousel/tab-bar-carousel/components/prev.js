import React from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from './../../../icons/arrow-icon'
import TYPOGRAPHY from './../../../../constants/typography-config'
import { pxToRem } from './../../../../helpers/utils/typography'

const LeftArrowStyles = styled.div`
  color: #fff;
  ${TYPOGRAPHY.fontStyles.regular};
  align-items: center;
  display: flex;
`

const TextStyles = styled.div`
  margin-right: pxToRem(6);
`

export const Prev = ({ children }) => {
  return (
    <LeftArrowStyles>
      <ArrowIcon version="solid" direction="left" fill="#fff" />
      <TextStyles>{children}</TextStyles>
    </LeftArrowStyles>
  )
}
