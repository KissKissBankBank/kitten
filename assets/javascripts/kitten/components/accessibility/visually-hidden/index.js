import React from 'react'
import styled from 'styled-components'

const StyledElement = styled.span`
  &:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`

export const VisuallyHidden = ({ ...props }) => {
  return <StyledElement {...props} />
}
