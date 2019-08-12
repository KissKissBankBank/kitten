import React, { Component } from 'react'
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

export class ListTable extends Component {
  static Header = ListTableHeader
  static Body = ListTableBody
  static Row = ListTableRow
  static Col = ListTableCol

  render() {
    const { id, children, ...props } = this.props

    return (
      <Context.Provider value={{ id }}>
        <StyledSection id={id} {...props}>
          {children}
        </StyledSection>
      </Context.Provider>
    )
  }
}

ListTable.defaultProps = {
  id: 'ListTable',
}
ListTable.propTypes = {
  id: PropTypes.string,
}
