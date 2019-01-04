import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Context } from './context'

const StyledItem = styled.div`
  display: block;
  padding: ${pxToRem(15)} ${pxToRem(20)};

  outline: none;
  border-left: 1px solid ${COLORS.line1};
  background-color: ${COLORS.background2};

  ${TYPOGRAPHY.fontStyles.regular}
  font-size: ${pxToRem(12)};
  line-height: 1;
  text-decoration: none;
  color: ${COLORS.font1};

  transition: color .2s, background-color .2s, border-color .2s;

  :hover,
  :focus {
    background-color: ${COLORS.line1};
    color: ${COLORS.primary1};
    text-decoration: none;
  }

  :focus {
    border-left-color: ${COLORS.primary1};
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

  ${({ borderSide, isSelected }) =>
    borderSide === 'right' &&
    css`
      border-right: 1px solid ${isSelected ? COLORS.primary1 : COLORS.line1};
      border-left: 0;
    `}
`

export class Item extends Component {
  static propTypes = {
    href: PropTypes.string,
    isSelected: PropTypes.bool,
    borderTop: PropTypes.bool,
    borderBottom: PropTypes.bool,
    modifier: PropTypes.oneOf(['light', 'default']),
  }

  static defaultProps = {
    href: null,
    isSelected: false,
    borderTop: false,
    borderBottom: false,
    modifier: 'default',
  }

  render() {
    const { children, href, ...other } = this.props

    return (
      <Context.Consumer>
        {({ borderSide }) => (
          <li role="menuitem">
            <StyledItem
              as={href ? 'a' : 'div'}
              href={href}
              borderSide={borderSide}
              {...other}
            >
              {children}
            </StyledItem>
          </li>
        )}
      </Context.Consumer>
    )
  }
}
