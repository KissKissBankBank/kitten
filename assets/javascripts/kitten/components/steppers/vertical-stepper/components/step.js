import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { Status } from './status'
import { Title } from './title'
import { Link } from './link'
import { List } from './list'
import { STEP_CLASSNAME, LINK_CLASSNAME } from '../index'

export class Step extends Component {
  static Title = Title
  static List = List
  static Link = Link

  static propTypes = {
    href: PropTypes.string.isRequired,
    valid: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    waiting: PropTypes.bool,
  }

  static defaultProps = {
    valid: false,
    success: false,
    error: false,
    waiting: false,
  }

  render() {
    const {
      success,
      valid,
      error,
      waiting,
      statusProps,
      children,
      ...other
    } = this.props

    return (
      <StyledItem>
        <StyledLink as={other.href ? 'a' : 'span'} {...other}>
          <Status
            success={success}
            valid={valid}
            error={error}
            waiting={waiting}
            {...statusProps}
          />

          <StyledContent error={error} className={STEP_CLASSNAME}>
            {children}
          </StyledContent>
        </StyledLink>
      </StyledItem>
    )
  }
}

const StyledItem = styled.li`
  margin ${pxToRem(30)} 0;
`

const StyledLink = styled.a`
  display: inline-flex;

  ${({ as }) =>
    as === 'a' &&
    css`
      cursor: pointer;
      text-decoration: none;

      .${STEP_CLASSNAME} {
        transition: transform 0.4s;
      }

      .${LINK_CLASSNAME} {
        transition: color 0.4s;
      }

      :hover,
      :focus,
      :active {
        .${STEP_CLASSNAME} {
          transform: translateX(${pxToRem(5)});
        }

        .${LINK_CLASSNAME} {
          color: ${COLORS.primary3};
        }
      }
    `}
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${COLORS.font1};
`
