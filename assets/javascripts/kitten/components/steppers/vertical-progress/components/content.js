import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledContent = styled.div`
  margin-top: ${pxToRem(20)};
  margin-left: ${pxToRem(30)};

`
export const Content = ({ children }) => {
  return (
    <StyledContent>
      {children}
    </StyledContent>
  )
}
