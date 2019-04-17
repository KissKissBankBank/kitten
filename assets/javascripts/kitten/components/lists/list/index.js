import React from 'react'
import styled from 'styled-components'
import { ButtonItem } from './components/button-item'

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ styles }) => styles}
`

export const List = ({ children, style }) => (
  <StyledList styles={style}>
    {React.Children.map(children, child => {
      if (!React.isValidElement(child)) return null

      return <li>{child}</li>
    })}
  </StyledList>
)

List.ButtonItem = ButtonItem
