import React from 'react'
import PropTypes from 'prop-types'
import { ListTableHeader } from './components/header'
import { ListTableBody } from './components/body'
import { ListTableRow } from './components/row'
import { ListTableCol } from './components/col'
import styled from 'styled-components'
import { Context } from './components/context'

const StyledSection = styled.section`
  &,
  & * {
    box-sizing: border-box;
  }
`

export const ListTable = ({ id, children, ...props }) => {
  return (
    <Context.Provider value={{ id }}>
      <StyledSection id={id} {...props}>
        {children}
      </StyledSection>
    </Context.Provider>
  )
}

ListTable.Header = ListTableHeader
ListTable.Body = ListTableBody
ListTable.Row = ListTableRow
ListTable.Col = ListTableCol

ListTable.propTypes = {
  id: PropTypes.string.isRequired,
}
