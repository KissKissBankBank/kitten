import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Context } from './context'
import { ArrowIcon } from '../../../icons/arrow-icon'

const StyledItem = styled.a`
  display: block;
  position: relative;

  padding: ${({ largeItem }) =>
    largeItem
      ? `${pxToRem(28)} ${pxToRem(21)} ${pxToRem(28)} ${pxToRem(40)}`
      : `${pxToRem(18)} ${pxToRem(30)} ${pxToRem(17)}`};

  background-color: ${COLORS.background1};
  border-bottom: ${({ noBorder }) =>
    noBorder ? null : `${pxToRem(1)} solid ${COLORS.line1}`};
  outline: none;

  ${TYPOGRAPHY.fontStyles.regular}
  color: ${COLORS.font1};
  line-height: 1;
  font-size: ${pxToRem(14)};
  text-decoration: none;

  ${({ borderSide }) =>
    borderSide
      ? css`
          ::before {
            content: '';
            position: absolute;
            top: ${pxToRem(-1)};
            left: ${pxToRem(-1)};
            bottom: 0;
            width: ${pxToRem(0)};
            background-color: transparent;
            transition: background-color 0.2s, width 0.2s;
          }

          :hover,
          :focus {
            color: ${({ borderSideOnHover }) =>
              !borderSideOnHover && COLORS.primary1};

            &::before {
              width: ${({ borderSideOnHover }) =>
                borderSideOnHover && pxToRem(4)};
              background-color: ${COLORS.primary1};
              transition: width 0.2s;
            }
          }
        `
      : css`
          :hover,
          :focus {
            color: ${COLORS.primary1};
            background-color: ${({ backgroundColors }) =>
              backgroundColors.hover ? backgroundColors.hover : COLORS.line1};
            transition: color 0.2s, background-color 0.4s;
          }
        `}

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${COLORS.primary1};

      ::before {
        width: ${pxToRem(4)};
        background-color: ${COLORS.primary1};
      }
    `}

  ${({ modifier }) =>
    modifier === 'light' &&
    css`
      color: ${COLORS.font2};
    `}

  ${({ borderSide }) =>
    borderSide === 'right' &&
    css`
      ::before {
        left: unset;
        right: -1px;
      }
    `}
`

const ExternalStyledItem = styled(StyledItem)`
  display: flex;
  height: ${pxToRem(24)};
  padding: ${({ largeItem }) =>
    largeItem
      ? `${pxToRem(23)} ${pxToRem(21)} ${pxToRem(22)} ${pxToRem(40)}`
      : `${pxToRem(23)} ${pxToRem(21)} ${pxToRem(22)} ${pxToRem(30)}`};

  align-items: center;
  align-self: flex-start;
  justify-content: space-between;

  background-color: ${COLORS.background3};

  .itemNextToArrowIcon {
    margin-right: ${pxToRem(20)};
  }

  .headerMenuArrowIcon {
    position: relative;
    left: 0;
    transition: left 0.2s;
  }

  svg,
  img {
    max-height: ${pxToRem(24)};
    width: auto;
  }

  :focus,
  :hover {
    color: ${COLORS.font1};

    .headerMenuArrowIcon {
      left: ${pxToRem(5)};
    }
  }

  ::before {
    display: none;
  }
`

export const Item = ({ children, href, external, liProps, ...other }) => (
  <Context.Consumer>
    {({
      borderSide,
      borderSideOnHover,
      largeItem,
      noBorder,
      backgroundColors,
    }) => (
      <li role="menuitem" {...liProps}>
        {external ? (
          <ExternalStyledItem
            href={href}
            borderSide={borderSide}
            external={external}
            largeItem={largeItem}
            noBorder={noBorder}
            {...other}
          >
            <span className="itemNextToArrowIcon">{children}</span>
            <ArrowIcon
              className="headerMenuArrowIcon"
              version="solid"
              direction="right"
            />
          </ExternalStyledItem>
        ) : (
          <StyledItem
            href={href}
            borderSide={borderSide}
            borderSideOnHover={borderSideOnHover}
            external={external}
            largeItem={largeItem}
            noBorder={noBorder}
            backgroundColors={backgroundColors}
            {...other}
          >
            {children}
          </StyledItem>
        )}
      </li>
    )}
  </Context.Consumer>
)

Item.propTypes = {
  external: PropTypes.bool,
  href: PropTypes.string,
  isSelected: PropTypes.bool,
  liProps: PropTypes.object,
  modifier: PropTypes.oneOf(['light', 'default']),
}

Item.defaultProps = {
  external: false,
  href: null,
  isSelected: false,
  liProps: {},
  modifier: 'default',
}
