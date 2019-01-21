import React from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from './../../../icons/arrow-icon'

const RightArrowContainerStyles = styled.a`
  color: #fff;
  font-weight: 500;
  align-items: center;
  display: flex;
`

const TextStyles = styled.div`
  margin-right: 6px;
`

export const Next = ({ children }) => {
  return (
    <RightArrowContainerStyles>
      <TextStyles>{children}</TextStyles>
      <ArrowIcon fill="#fff" version="solid" />
    </RightArrowContainerStyles>
  )
}
