import React, { Component } from 'react'
import { ListTableHeader } from './components/header'
import { ListTableBody } from './components/body'
import { ListTableRow } from './components/row'
import { ListTableCol } from './components/col'
import styled from 'styled-components'

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
    const { children, ...props } = this.props

    return <StyledSection {...props}>{children}</StyledSection>
  }
}
