import React from 'react'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Context } from './context'

const ContentStyled = styled.div`
  display: none;
  box-sizing: border-box;

  padding: ${pxToRem(30)};
  min-height: ${pxToRem(30)};

  background-color: ${COLORS.background3};
  border: 2px solid ${COLORS.line1};
  border-top: 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      display: block;
    `}
`

export const Content = ({ id, children }) => {
  return (
    <Context.Consumer>
      {({ selectedItem }) => (
        <ContentStyled isSelected={selectedItem === id}>
          {children}
        </ContentStyled>
      )}
    </Context.Consumer>
  )
}
