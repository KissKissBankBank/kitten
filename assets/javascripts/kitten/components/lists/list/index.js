import React from 'react'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ButtonItem } from './components/button-item'

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ withBottomBorderRadius }) =>
    withBottomBorderRadius &&
    css`
      & li:last-child .k-List__button {
        border-bottom-left-radius: ${pxToRem(withBottomBorderRadius)};
        border-bottom-right-radius: ${pxToRem(withBottomBorderRadius)};
      }
    `}

  ${({ styles }) => styles}
`

export const List = ({ children, style, withBottomBorderRadius }) => (
  <StyledList styles={style} withBottomBorderRadius={withBottomBorderRadius}>
    {React.Children.map(children, child => {
      if (!React.isValidElement(child)) return null

      return <li>{child}</li>
    })}
  </StyledList>
)

List.ButtonItem = ButtonItem
