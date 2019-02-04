import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { Status } from './status'
import { Label } from './label'
import { Link } from './link'
import { List } from './list'

export class Step extends Component {
  static Label = Label
  static List = List
  static Link = Link

  render() {
    const { valid, error, statusProps, children, ...other } = this.props

    return (
      <StyledItem {...other}>
        <Status valid={valid} error={error} {...statusProps} />

        <StyledContent error={error}>{children}</StyledContent>
      </StyledItem>
    )
  }
}

const StyledItem = styled.li`
  display: flex;

  margin ${pxToRem(30)} 0;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${COLORS.font1};

  ${({ error }) =>
    error &&
    css`
      color: ${COLORS.error};
    `}
`
