import React from 'react'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_MAX_WIDTH,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Context } from './context'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: ${COLORS.font1};
  color: ${COLORS.background1};
`

const StyledList = styled.ul`
  height: ${pxToRem(90)};
  margin: 0 auto;
  max-width: ${pxToRem(CONTAINER_MAX_WIDTH)};
  padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (min-width: ${ScreenConfig.M.min}px) {
    padding-left: ${pxToRem(CONTAINER_PADDING)};
    padding-right: ${pxToRem(CONTAINER_PADDING)};
  }
`

export const ListTableHeader = props => {
  return (
    <StyledHeader>
      <StyledList>
        <Context.Consumer>
          {({ id }) => (
            <>
              {React.Children.map(props.children, (child, index) => {
                return React.cloneElement(child, { id: `${id}-col-${index}` })
              })}
            </>
          )}
        </Context.Consumer>
      </StyledList>
    </StyledHeader>
  )
}
