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

  ${({ external }) =>
    external
      ? css`
          padding: ${pxToRem(23)} ${pxToRem(21)} ${pxToRem(22)} ${pxToRem(30)};
          background-color: ${COLORS.background3};

          display: flex;
          align-items: center;
          align-self: flex-start;
          justify-content: space-between;

          text-decoration: none;

          > * {
            height: ${pxToRem(24)};
            line-height: ${pxToRem(24)};
          }

          > span > svg,
          > span > img {
            height: 100%;
            width: auto;
          }

          > i {
            width: ${pxToRem(10)};
            line-height: ${pxToRem(10)};
            height: ${pxToRem(10)};
            position: relative;
            left: 0;
            transition: left 0.2s;
          }
          :focus > i,
          :hover > i {
            left: 5px;
          }
        `
      : css`
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
          }
        `}



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

export class Item extends Component {
  static propTypes = {
    href: PropTypes.string,
    isSelected: PropTypes.bool,
    modifier: PropTypes.oneOf(['light', 'default']),
    external: PropTypes.bool,
  }

  static defaultProps = {
    href: null,
    isSelected: false,
    modifier: 'default',
    external: false,
  }

  render() {
    const { children, href, ...other } = this.props

    if (this.props.external === true) {
      return (
        <Context.Consumer>
          {({ borderSide }) => (
            <li role="menuitem">
              <StyledItem href={href} borderSide={borderSide} {...other}>
                <span>{children}</span>
                <i className="linkArrow">
                  <ArrowIcon direction="right" />
                </i>
              </StyledItem>
            </li>
          )}
        </Context.Consumer>
      )
    } else {
      return (
        <Context.Consumer>
          {({ borderSide }) => (
            <li role="menuitem">
              <StyledItem href={href} borderSide={borderSide} {...other}>
                {children}
              </StyledItem>
            </li>
          )}
        </Context.Consumer>
      )
    }
  }
}
