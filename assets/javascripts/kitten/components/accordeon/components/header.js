import React from 'react'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Context } from './context'

const HeaderStyled = styled.button`
  display: block;

  margin: 0;
  width: 100%;
  padding: ${pxToRem(20)};
  min-height: ${pxToRem(30)};
  box-sizing: border-box;
  overflow: visible;

  background: transparent;
  border: ${pxToRem(2)} solid ${COLORS.line1};
  border-radius: ${pxToRem(3)};

  color: inherit;
  font: inherit;
  text-align: inherit;
  line-height: normal;

  -webkit-appearance: none;
  cursor: pointer;
  /* Je préférerais me passer de outline:none; quitte à déterminer un état "actif" */
  outline: none;

  &[aria-expanded='true'] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const Header = ({ id, children }) => (
  <Context.Consumer>
    {({ updateSelectedItem, selectedItem, componentId }) => (
      <HeaderStyled
        onClick={() => updateSelectedItem(id)}
        role="tab"
        aria-expanded={selectedItem === id}
        aria-controls={`${componentId}_${id}`}
      >
        {children}
      </HeaderStyled>
    )}
  </Context.Consumer>
)
