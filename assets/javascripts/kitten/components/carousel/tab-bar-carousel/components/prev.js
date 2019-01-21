import React from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from './../../../icons/arrow-icon'
import TYPOGRAPHY from './../../../../constants/typography-config'

const LeftArrowStyles = styled.div`
  color: #fff;
  ${TYPOGRAPHY.fontStyles.bold};
  align-items: center;
  display: flex;
`

const TextStyles = styled.div`
  margin-left: 6px;
`

export const Prev = ({ children }) => {
  return (
    <LeftArrowStyles>
      <ArrowIcon version="solid" direction="left" fill="#fff" />
      <TextStyles>{children}</TextStyles>
    </LeftArrowStyles>
  )
}
