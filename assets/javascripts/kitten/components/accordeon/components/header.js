import React from 'react'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Context } from './context'

const HeaderStyled = styled.div`
  box-sizing: border-box;

  padding: ${pxToRem(20)};
  min-height: ${pxToRem(30)};

  border: 2px solid ${COLORS.line1};
  border-radius: 3px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

  cursor: pointer;
`

export const Header = ({ id, children }) => {
  return (
    <Context.Consumer>
      {({ updateSelectedItem, selectedItem }) => (
        <HeaderStyled
          isSelected={selectedItem === id}
          onClick={() => updateSelectedItem(id)}
        >
          {children}
        </HeaderStyled>
      )}
    </Context.Consumer>
  )
}
