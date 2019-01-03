import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const Link = styled.a`
  display: block;
  padding: ${pxToRem(15)} ${pxToRem(20)};

  border-left: 1px solid ${COLORS.line1};
  background-color: ${COLORS.background2};

  font-family: "Maax", Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: ${pxToRem(12)};
  line-height: 1;
  text-decoration: none;
  color: ${COLORS.font1};

  outline: none;

  transition: color .2s, background-color .2s, border-color .2s;

  :hover {
    background-color: ${COLORS.line1};
    color: ${COLORS.primary1};
    text-decoration: none;
  }

  :focus {
    background-color: ${COLORS.line1};
    border-left-color: ${COLORS.primary1};
    color: ${COLORS.primary1};
    text-decoration: none;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-left-color: ${COLORS.primary1};
      color: ${COLORS.primary1};
    `}

  ${({ borderTop }) =>
    borderTop &&
    css`
      border-top: 1px solid ${COLORS.line1};
    `}

  ${({ borderBottom }) =>
    borderBottom &&
    css`
      border-bottom: 1px solid ${COLORS.line1};
    `}

  ${({ modifier }) =>
    modifier === 'light' &&
    css`
      color: ${COLORS.font2};
    `}
`

export class Item extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    borderTop: PropTypes.bool,
    borderBottom: PropTypes.bool,
    modifier: PropTypes.oneOf(['light', 'default']),
  }

  static defaultProps = {
    isSelected: false,
    borderTop: false,
    borderBottom: false,
    modifier: 'default',
  }

  render() {
    const { children, tag, ...other } = this.props

    return (
      <li>
        <Link {...other}>{children}</Link>
      </li>
    )
  }
}
