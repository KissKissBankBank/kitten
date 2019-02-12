import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
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
        <StyledLink {...other}>
          <Status
            success={success}
            valid={valid}
            error={error}
            waiting={waiting}
            {...statusProps}
            className={classNames(
              'VerticalStepper__status',
              statusProps && statusProps.className,
            )}
          />

          <StyledContent error={error} className="VerticalStepper__content">
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

  cursor: pointer;
  text-decoration: none;

  .VerticalStepper__status {
    transition: transform 0.4s;
  }

  .VerticalStepper__content {
    transition: transform 0.4s;
  }

  :hover,
  :focus,
  :active {
    // .VerticalStepper__status {
    //   transform: scale(1.1);
    // }

    .VerticalStepper__content {
      transform: translateX(5px);
    }
  }
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
