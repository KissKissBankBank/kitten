import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Context } from './context'
import { ArrowIcon } from '../../../icons/arrow-icon'

const StyledItem = styled.a`
  display: block;

  outline: none;
  background-color: ${COLORS.background1};

  ${TYPOGRAPHY.fontStyles.regular}
  font-size: ${pxToRem(14)};
  text-decoration: none;
  color: ${COLORS.font1};
  position: relative;

  border-bottom: 1px solid ${COLORS.line1};

  padding: ${pxToRem(18)} ${pxToRem(30)} ${pxToRem(17)};
  line-height: 1;

  ::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    width: 1px;
    background-color: transparent;

    transition: background-color 0.2s, width 0.2s;
  }
  :hover::before,
  :focus::before {
    background-color: ${COLORS.primary1};
    width: 4px;
    transition: width 0.2s;
    color: ${COLORS.font1}
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${COLORS.primary1};
      ::before {
        background-color: ${COLORS.primary1};
        width: 4px;
      }
    `}

  ${({ modifier }) =>
    modifier === 'light' &&
    css`
      color: ${COLORS.font2};
    `}

  ${({ borderSide, isSelected }) =>
    borderSide === 'right' &&
    css`
      ::before {
        left: unset;
        right: -1px;
      }
    `}
`

const ExternalStyledItem = styled(StyledItem)`
  padding: ${pxToRem(23)} ${pxToRem(21)} ${pxToRem(22)} ${pxToRem(30)};
  background-color: ${COLORS.background3};

  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: space-between;

  transition: padding-right 0.2s;

  height: ${pxToRem(24)};

  svg,
  img {
    max-height: ${pxToRem(24)};
    width: auto;
  }

  :focus,
  :hover {
    padding-right: ${pxToRem(16)};
    color: ${COLORS.font1};
  }

  ::before {
    display: none;
  }
`

export class Item extends Component {
  static propTypes = {
    href: PropTypes.string,
    isSelected: PropTypes.bool,
    modifier: PropTypes.oneOf(['light', 'default']),
    external: PropTypes.bool,
    liProps: PropTypes.object,
  }

  static defaultProps = {
    href: null,
    isSelected: false,
    modifier: 'default',
    external: false,
    liProps: {},
  }

  render() {
    const { children, href, external, liProps, ...other } = this.props

    return (
      <Context.Consumer>
        {({ borderSide }) => (
          <li role="menuitem" {...liProps}>
            {external ? (
              <ExternalStyledItem
                href={href}
                borderSide={borderSide}
                external={external}
                {...other}
              >
                <span>{children}</span>
                <ArrowIcon direction="right" />
              </ExternalStyledItem>
            ) : (
              <StyledItem
                href={href}
                borderSide={borderSide}
                external={external}
                {...other}
              >
                {children}
              </StyledItem>
            )}
          </li>
        )}
      </Context.Consumer>
    )
  }
}
